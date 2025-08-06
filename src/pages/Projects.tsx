// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import {
  Box, Container, Typography, Card, CardContent,
  CardMedia, Button, List, ListItem, Chip
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  imageUrl: string;
  link: string;
  isFork: boolean;
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { t, i18n } = useTranslation();
  const githubUsername = 'thiagowatanabe'; // ← Substitua aqui

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const mappedProjects: Project[] = data.map((repo: any) => ({
          id: repo.id,
          title: {
            pt: repo.name,
            en: repo.name
          },
          description: {
            pt: repo.description || 'Sem descrição disponível.',
            en: repo.description || 'No description available.'
          },
          imageUrl: `https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}`,
          link: repo.html_url,
          isFork: repo.fork
        }));
        setProjects(mappedProjects);
      })
      .catch((error) => console.error('Erro ao buscar repositórios:', error));
  }, [githubUsername]);

  const getLocalizedText = (
    field: { pt: string; en: string },
    lang: string
  ) => {
    return field[lang as 'pt' | 'en'] || field.en;
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          {t('projects.title')}
        </Typography>

        <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {projects.map((project) => (
            <ListItem key={project.id} sx={{ width: '100%', maxWidth: 345 }}>
              <Card sx={{ width: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={getLocalizedText(project.title, i18n.language)}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {getLocalizedText(project.title, i18n.language)}
                  </Typography>

                  {/* Exibe o chip se for fork */}
                  {project.isFork && (
                    <Chip
                      label={t('projects.fork')}
                      size="small"
                      color="warning"
                      sx={{ mb: 1 }}
                    />
                  )}

                  <Typography variant="body2" color="text.secondary">
                    {getLocalizedText(project.description, i18n.language)}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    sx={{ mt: 2 }}
                  >
                    {t('projects.view')}
                  </Button>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};
