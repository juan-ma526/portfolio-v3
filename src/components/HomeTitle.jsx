import { Box, IconButton, Typography, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import desktop from "../assets/desktop.jpg";
import { useTranslation } from "react-i18next";


export const HomeTitle = () => {
   const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
        bgcolor: '#121212',
        color: 'white',
      }}
    >
      {/* MITAD IZQUIERDA: TEXTO */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          px: 4,
          paddingTop: 14,
          paddingBottom: {xs: 0, md: 14},          
          pl: { md: 12 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
            mb: 2,
            fontSize: { xs: '3rem', md: '4.5rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {t('home.greeting')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            color: '#FF1D8D',
            mb: 4,
            fontSize: { xs: '1.875rem', md: '2.25rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
         Frontend & Mobile Developer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#A3A3A3',
            mb: 6,
            fontSize: '1.125rem',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {t('home.description')}
        </Typography>
        <Stack direction="row" spacing={3}>
          <IconButton
            component="a"
            href="https://github.com/juan-ma526"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color:{ xs: '#ffffff', md: '#A3A3A3' },
              fontSize: '2.5rem',
              transition: 'color 0.2s',
              '&:hover': { color: 'white' },
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/juan-ma526"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color:{ xs: '#ffffff', md: '#A3A3A3' },
              fontSize: '2.5rem',
              transition: 'color 0.2s',
              '&:hover': { color: 'white' },
            }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Box>

      {/* MITAD DERECHA: IMAGEN */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          minHeight: { xs: '300px', md: '100vh' },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          component="img"
          src={desktop}
          alt="Martin Perez Setup Cyberpunk"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            py: 14,
            top: 0,
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
};
