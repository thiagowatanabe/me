import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: { xs: 'center', sm: 'inherit' },
        }}
      >
        <Box sx={{ mb: { xs: 2, sm: 0 } }}>
          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/thiagowatanabe"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.linkedin.com/in/thiago-watanabe"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="mailto:thiagowatanabe@gmail.com"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Thiago Watanabe. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};
