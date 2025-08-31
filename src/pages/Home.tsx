import {
  Avatar,
  Button,
  Typography,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const typedStrings =
    i18n.language === 'pt'
      ? [
        'Desenvolvedor fullstack.',
        'Especialista em C# e AWS.',
        'Amante de React e interfaces criativas.',
        'Transformo ideias em sistemas modernos e escaláveis.'
      ]
      : [
        'Fullstack developer.',
        'Specialist in C# and AWS.',
        'Passionate about React and creative UIs.',
        'Transforming ideas into modern, scalable software solutions.'
      ];

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        mt: { xs: 8, md: 12 },
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Avatar com animação */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          alt="Thiago Watanabe"
          src={profileImage}
          sx={{
            width: 250,
            height: 250,
            mb: 4,
            boxShadow: 6,
            border: '3px solid white',
            backgroundColor: "white"
          }}
          imgProps={{
            style: {
              objectFit: "cover",      // Preenche todo o círculo sem distorcer
              objectPosition: "top",   // Foca na parte superior da imagem
              width: "100%",
              height: "100%",
            }
          }}
        />
      </motion.div>

      {/* Nome e título */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant={isSmallScreen ? 'h4' : 'h3'}
          component="h1"
          gutterBottom
          fontWeight={600}
        >
          Thiago Watanabe
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          gutterBottom
          fontWeight={400}
        >
          Full Stack Developer • C# | ReactJS | AWS
        </Typography>
      </motion.div>

      {/* Texto digitado com animação lateral */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
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

      {/* Botões de ação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          spacing={2}
          sx={{ mt: 4 }}
          justifyContent="center"
        >
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            color="secondary"
            size="large"
            aria-label="Ver projetos"
          >
            {t('home.viewProjects')}
          </Button>

          <Button
            component="a"
            href="/ThiagoWatanabe-CV.pdf" // substitua pelo caminho do seu currículo
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            aria-label="Baixar currículo"
          >
            {t('home.downloadCV')}
          </Button>
        </Stack>
      </motion.div>
    </Container>
  );
};
