import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslation as Transaltion } from '../i18n/useTranslation';
import { useTranslation } from 'react-i18next';
import { getLocalizedText } from '../utils/getLocalizedText';

interface CourseItem {
  title: { pt: string; en: string };
  institution: { pt: string; en: string };
  period: string;
  description: { pt: string; en: string };
}

export const Courses: React.FC = () => {
  const { t } = Transaltion();
  const { i18n } = useTranslation();
  const [courses, setCourses] = useState<CourseItem[]>([]);

  useEffect(() => {
    fetch('./data/courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom textAlign="center">
          {t.course.title}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {courses.map((course, index) => (
            <ListItem key={index} component={Paper} elevation={3} sx={{ padding: 2 }}>
              <ListItemIcon>
                <SchoolIcon sx={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <Typography variant="h6">
                      {getLocalizedText(course.title, i18n.language)} – {getLocalizedText(course.institution, i18n.language)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.period}
                    </Typography>
                  </>
                }
                secondary={
                  <Typography variant="body1">
                    {getLocalizedText(course.description, i18n.language)}
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
