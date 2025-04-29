import React from 'react';
import { Box, Container, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from '../i18n/useTranslation';
import profileImage from '../assets/profile.png'; // Certifique-se que essa imagem existe

export const About: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 8, minHeight: '80vh' }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="Foto de Perfil"
            src={profileImage}
            sx={{
              width: 180,
              height: 180,
              margin: isMobile ? '0 auto' : '0',
              border: '4px solid',
              borderColor: 'primary.main',
            }}
          />
          <Box>
            <Typography variant="h4" gutterBottom>
              {t.about.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {t.about.paragraph1}
            </Typography>
            <Typography variant="body1" paragraph>
              {t.about.paragraph2}
            </Typography>
            <Typography variant="body1" paragraph>
              {t.about.paragraph3}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
