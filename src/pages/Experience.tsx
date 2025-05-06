import React, { useEffect, useState } from 'react';
import { Box, Container, Typography,List, ListItem, ListItemText, ListItemIcon, Paper, Avatar } from '@mui/material';
import { useTranslation as Transaltion } from '../i18n/useTranslation';
import { useTranslation } from 'react-i18next';
import { getLocalizedText } from '../utils/getLocalizedText';
import WorkIcon from '@mui/icons-material/Work';
import { renderRichText } from '../utils/renderWithBreaks';

interface ExperienceItem {
  company: { pt: string; en: string; logo?: string }; // logo opcional
  position: { pt: string; en: string };
  period: string;
  description: { pt: string; en: string };
}

export const Experience: React.FC = () => {
  const { t } = Transaltion();
  const { i18n } = useTranslation();
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    fetch('./data/experience.json')
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom textAlign="center">
          {t.experience.title}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experiences.map((exp, index) => (
            <ListItem key={index} component={Paper} elevation={3} sx={{ padding: 2 }}>
              <ListItemIcon>
                {/* Verifica se há logo da empresa, senão exibe um ícone padrão */}
                {exp.company.logo ? (
                  <Avatar src={exp.company.logo} alt={getLocalizedText(exp.company, i18n.language)} sx={{ width: 40, height: 40 }} />
                ) : (
                  <WorkIcon sx={{ fontSize: 40 }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <Typography variant="h6">
                      {getLocalizedText(exp.position, i18n.language)} – {getLocalizedText(exp.company, i18n.language)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.period}
                    </Typography>
                  </>
                }
                secondary={
                  <Typography variant="body1">
                    {renderRichText(getLocalizedText(exp.description, i18n.language))}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};
