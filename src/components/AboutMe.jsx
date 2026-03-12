import { Avatar, Button, Grid, Typography } from '@mui/material';
import PhotoProfile from '../assets/photoProfile2.png';
import { keyframes } from '@emotion/react';
import { Trans, useTranslation } from 'react-i18next';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const highlightStyle = {
  color: '#0ab8f7',
  fontWeight: 600,
  textShadow: '2px 2px black',
};

export const AboutMe = () => {
   const { t } = useTranslation();
  return (
    <Grid
      id="about-me"
      minHeight={589}
      alignItems="center"
      container
      spacing={3}
      sx={{
        borderRadius: '22px',
        background:
          'linear-gradient(135deg, #00FFFF, #FF007F, #8A2BE2, #333333)',
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
        padding: '20px',
        margin: '22px 22px 100px 22px',
      }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignContent="center"
        maxWidth={1000}
        minHeight={500}
        xs={12}
        md={6}
        sx={{ margin: 'auto', padding: '20px' }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '30px', sm: '42px' },
            color: 'white',
            fontWeight: 700,
            marginBottom: '20px',
          }}
        >
          {t('about.title')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '18px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
         <Trans
            i18nKey="about.paragraph1"
            components={{ highlight: <span style={highlightStyle} /> }}
          />
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '18px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          <Trans
            i18nKey="about.paragraph2"
            components={{ highlight: <span style={highlightStyle} /> }}
          /> 
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '18px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
        <Trans
            i18nKey="about.paragraph3"
            components={{ highlight: <span style={highlightStyle} /> }}
          /> 
        </Typography>
      </Grid>
      <Grid
        minHeight={350}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        sx={{ margin: 'auto' }}
      >
        <Avatar
          alt="Foto de perfil"
          src={PhotoProfile}
          sx={{
            width: { xs: 300, sm: 350, md: 400 },
            height: { xs: 300, sm: 350, md: 400 },
            border: '4px solid white',
          }}
        />
        <Button
          component="a"
          href="/Martin-Perez-CV.pdf"
          download="Martin-Perez-CV.pdf"
          size="large"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          {t('about.downloadCV')}
        </Button>
      </Grid>
    </Grid>
  );
};
