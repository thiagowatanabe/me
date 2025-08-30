// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import {
  Box, Container, Typography, Card, CardContent,
  CardMedia, Button, List, ListItem, Chip, Stack
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  imageUrl: string;
  link: string;
  isFork: boolean;
  updatedAt: string;
  language: string | null;
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForks, setShowForks] = useState<boolean>(true);
  const { t, i18n } = useTranslation();
  const githubUsername = 'thiagowatanabe'; // ← Substitua aqui

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const mappedProjects: Project[] = data
          .filter((repo: any) => !repo.fork && repo.name.toLowerCase() !== "me") // 👈 oculta o repositório "me"
          .map((repo: any) => ({
            id: repo.id,
            title: {
              pt: repo.name,
              en: repo.name
            },
            description: {
              pt: repo.description || 'Sem descrição disponível.',
              en: repo.description || 'No description available.'
            },
            imageUrl: `https://opengraph.githubassets.com/1/${repo.full_name}`,
            link: repo.html_url,
            isFork: repo.fork,
            updatedAt: repo.updated_at,
            language: repo.language
          }));

        // Ordena do mais recente para o mais antigo
        mappedProjects.sort(
          (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );

        setProjects(mappedProjects);
      })
      .catch((error) => console.error('Erro ao buscar repositórios:', error));

  }, [githubUsername]);

  const getLocalizedText = (
    field: { pt: string; en: string },
    lang: string
  ) => field[lang as 'pt' | 'en'] || field.en;

  const formatDate = (dateStr: string, lang: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  console.log('Fetched projects for user:', projects);

  // Função para cortar textos longos
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          {t('projects.title')}
        </Typography>

        {/* Botão de toggle para mostrar/ocultar forks */}
        <Button
          variant="outlined"
          onClick={() => setShowForks((prev) => !prev)}
          sx={{ mb: 3 }}
        >
          {showForks ? t('projects.hideForks') : t('projects.showForks')}
        </Button>

        <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {projects
            .filter((project) => (showForks ? true : !project.isFork))
            .map((project) => (
              <ListItem key={project.id} sx={{ width: '100%', maxWidth: 345 }}>
                <Card
                  sx={{
                    width: '100%',
                    minHeight: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imageUrl}
                    alt={getLocalizedText(project.title, i18n.language)}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {getLocalizedText(project.title, i18n.language)}
                    </Typography>

                    {/* Chips para fork e linguagem */}
                    <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
                      {project.isFork && (
                        <Chip
                          label={t('projects.fork')}
                          size="small"
                          color="warning"
                        />
                      )}
                      {project.language && (
                        <Chip
                          label={project.language}
                          size="small"
                          color="info"
                        />
                      )}
                    </Stack>

                    {/* Descrição limitada a 150 caracteres */}
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {truncateText(getLocalizedText(project.description, i18n.language), 150)}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      {t('projects.updated')} {formatDate(project.updatedAt, i18n.language)}
                    </Typography>
                  </CardContent>

                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.link}
                      target="_blank"
                      fullWidth
                    >
                      {t('projects.view')}
                    </Button>
                  </Box>
                </Card>
              </ListItem>
            ))}
        </List>
      </Container>
    </Box>
  );
};
