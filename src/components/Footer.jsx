import { Avatar, Box, Button, Typography, Stack } from '@mui/material';
import cat from '../assets/catFooter.png';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(255, 29, 141, 0.25)',
        mt: 8,
        py: 6,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: { xs: 4, md: 2 },
          px: { xs: 3, md: 6 },
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {/* Identidad */}
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Avatar
            src={cat}
            variant="square"
            sx={{
              height: { xs: 120, md: 160 },
              width: { xs: 120, md: 160 },
              objectFit: 'contain',
              '& .MuiAvatar-img': { objectFit: 'contain' },
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h5"
              sx={{
                background: 'linear-gradient(to right, #00FFFF, #FF1D8D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Martín Pérez
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              {t('home.subtitle')}
            </Typography>
          </Box>
        </Stack>

        {/* Contacto */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Button
            href="mailto:jmperez675@gmail.com"
            component="a"
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #FF1D8D, #8A2BE2)',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
            }}
          >
            {t('footer.contact')}
          </Button>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('footer.created')} Martín Pérez 2024.
          </Typography>
        </Box>

        {/* Redes */}
        <Stack direction="row" spacing={1}>
          <Button
            href="https://www.linkedin.com/in/juan-ma526/"
            target="_blank"
            rel="noopener noreferrer"
            component="a"
            variant="outlined"
            aria-label="LinkedIn"
            sx={{
              color: 'neon.cyan',
              borderColor: 'rgba(0, 255, 255, 0.3)',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'neon.cyan',
                bgcolor: 'rgba(0, 255, 255, 0.05)',
              },
            }}
          >
            LinkedIn
          </Button>
          <Button
            href="https://www.youtube.com/@jmperez526"
            target="_blank"
            rel="noopener noreferrer"
            component="a"
            variant="outlined"
            aria-label="YouTube"
            sx={{
              color: 'neon.cyan',
              borderColor: 'rgba(0, 255, 255, 0.3)',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'neon.cyan',
                bgcolor: 'rgba(0, 255, 255, 0.05)',
              },
            }}
          >
            YouTube
          </Button>
          <Button
            href="https://github.com/juan-ma526"
            target="_blank"
            rel="noopener noreferrer"
            component="a"
            variant="outlined"
            aria-label="GitHub"
            sx={{
              color: 'neon.cyan',
              borderColor: 'rgba(0, 255, 255, 0.3)',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'neon.cyan',
                bgcolor: 'rgba(0, 255, 255, 0.05)',
              },
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};