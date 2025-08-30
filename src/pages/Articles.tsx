// src/pages/Articles.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface Article {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  description: string;
}

export const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { t, i18n } = useTranslation();
  const mediumUsername = "thiagowatanabe"; // 👈 substitua pelo seu usuário do Medium

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.items)) {
          setArticles(data.items);
        } else {
          setArticles([]);
        }
      })
      .catch((err) => {
        console.error("Erro ao carregar artigos:", err);
        setArticles([]);
      });
  }, [mediumUsername]);

  // Função para truncar textos longos
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          {t("articles.title")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {articles?.map((article, index) => (
            <Card
              key={index}
              sx={{
                width: "calc(33.33% - 16px)", // 3 cards por linha
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {article.thumbnail && (
                <CardMedia
                  component="img"
                  height="160"
                  image={article.thumbnail}
                  alt={article.title}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, textAlign: "justify" }}>
                  {truncateText(article.description.replace(/<[^>]+>/g, ""), 650)}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {t("articles.published")}{" "}
                  {new Date(article.pubDate).toLocaleDateString(
                    i18n.language === "pt" ? "pt-BR" : "en-US"
                  )}
                </Typography>
              </CardContent>

              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  href={article.link}
                  target="_blank"
                  rel="noopener"
                  fullWidth
                >
                  {t("articles.readMore")}
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
