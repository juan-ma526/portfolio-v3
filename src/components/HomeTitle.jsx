import { Box, IconButton, Typography, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import desktop from "../assets/desktop.jpg";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";


export const HomeTitle = () => {
   const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: 'auto', md: '100vh' },
        bgcolor: 'background.default',
        color: 'text.primary',
        position: 'relative',
        // En móvil/tablet: backdrop con la imagen + overlay oscuro para contraste
        backgroundImage: {
          xs: `linear-gradient(rgba(18,18,18,0.88), rgba(18,18,18,0.92)), url(${desktop})`,
          md: 'none',
        },
        backgroundSize: { xs: 'cover', md: 'auto' },
        backgroundPosition: { xs: 'center', md: 'unset' },
        backgroundAttachment: { xs: 'fixed', md: 'unset' },
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
        <Reveal>
          <Typography
            variant="h1"
            sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' }, maxWidth: { md: 620 } }}
          >
            {t('home.greeting')}
          </Typography>
        </Reveal>
        <Reveal delay={120}>
          <Typography
            variant="h2"
            sx={{
              color: 'neon.magenta',
              mb: 4,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('home.subtitle')}
          </Typography>
        </Reveal>
        <Reveal delay={240}>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { md: 560 },
            }}
          >
            {t('home.description')}
          </Typography>
        </Reveal>
        <Reveal delay={360}>
        <Stack direction="row" spacing={3}>
          <IconButton
            component="a"
            href="https://github.com/juan-ma526"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              color: { xs: 'text.primary', md: 'text.secondary' },
              fontSize: '2.5rem',
              transition: 'color 0.2s',
              '&:hover': { color: 'neon.cyan' },
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/juan-ma526"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: { xs: 'text.primary', md: 'text.secondary' },
              fontSize: '2.5rem',
              transition: 'color 0.2s',
              '&:hover': { color: 'neon.cyan' },
            }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        </Reveal>
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
          alt="Martín Pérez - Setup de desarrollo cyberpunk"
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
