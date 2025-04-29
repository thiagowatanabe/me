// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import {
  Box, Container, Typography, Card, CardContent,
  CardMedia, Button, List, ListItem
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLocalizedText } from '../utils/getLocalizedText';

interface Project {
  id: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  imageUrl: string;
  link: string;
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch('./data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          {t('projects.title')}
        </Typography>

        {/* Lista para os cards de projetos */}
        <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {projects.map((project) => (
            <ListItem key={project.id} sx={{ width: '100%', maxWidth: 345 }}>
              <Card sx={{ width: '100%' }}>
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
