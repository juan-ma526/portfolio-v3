import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import PhotoProfile from '../assets/photoProfile2.png';
import { Trans, useTranslation } from 'react-i18next';
import { Reveal } from './Reveal';

const highlightStyle = {
  color: '#00FFFF',
  fontWeight: 700,
};

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Box
      id="about-me"
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        my: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          borderRadius: '22px',          
          background:
            'linear-gradient(135deg, rgba(26,26,46,0.9), rgba(42,10,58,0.85), rgba(10,42,58,0.85))',
          border: '1px solid rgba(0, 255, 255, 0.15)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.05)',
          p: { xs: 3, md: 6 },
          minHeight: { xs: 'auto', md: 500 },
          justifyContent: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Reveal>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 2 }}>
              {t('about.title')}
            </Typography>
          </Reveal>
          <Reveal delay={100}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <Trans
                i18nKey="about.paragraph1"
                components={{ highlight: <span style={highlightStyle} /> }}
              />
            </Typography>
          </Reveal>
          <Reveal delay={200}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <Trans
                i18nKey="about.paragraph2"
                components={{ highlight: <span style={highlightStyle} /> }}
              />
            </Typography>
          </Reveal>
          <Reveal delay={300}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <Trans
                i18nKey="about.paragraph3"
                components={{ highlight: <span style={highlightStyle} /> }}
              />
            </Typography>
          </Reveal>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',            
            gap: 3,
          }}
        >
          <Reveal delay={150}>
            <Avatar
              alt="Foto de perfil"
              src={PhotoProfile}
              sx={{
                width: { xs: 260, sm: 320, md: 360 },
                height: { xs: 260, sm: 320, md: 360 },
                border: '4px solid',
                borderColor: 'neon.cyan',
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.3)',
              }}
            />
          </Reveal>
          <Reveal delay={250}>
            <Button
              component="a"
              href="/Martin-Perez-CV.pdf"
              download="Martin-Perez-CV.pdf"
              size="large"
              sx={{
                bgcolor: 'transparent',
                color: 'neon.cyan',
                border: '1px solid rgba(0, 255, 255, 0.4)',
                borderRadius: '10px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(0, 255, 255, 0.08)',
                  borderColor: 'neon.cyan',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                },
              }}
            >
              {t('about.downloadCV')}
            </Button>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  );
};