import { Avatar, Button, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png'; // Certifique-se que essa imagem existe

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const typedStrings = i18n.language === 'pt'
    ? [
        'Desenvolvedor fullstack.',
        'Especialista em C# e AWS.',
        'Amante de React e interfaces criativas.'
      ]
    : [
        'Fullstack developer.',
        'Specialist in C# and AWS.',
        'Passionate about React and creative UIs.'
      ];

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          alt="Minha Foto"
          src={profileImage}
          sx={{
            width: 150,
            height: 150,
            margin: '0 auto',
            mb: 3,
            boxShadow: 6,
            border: '3px solid white',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          {t('home.greeting')}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
          <ReactTyped
            strings={typedStrings}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop
            startDelay={500}
            showCursor
          />
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button
            component={Link} to="/projects"
          variant="contained"
          size="large"
          color="secondary"
          sx={{ mt: 4 }}
        >
          {t('home.viewProjects')}
        </Button>
      </motion.div>
    </Container>
  );
};
