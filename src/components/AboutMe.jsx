import { Avatar, Button, Grid2, Typography } from '@mui/material';
import PhotoProfile from '../assets/photoProfile2.png';
import { keyframes } from '@emotion/react';

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

export const AboutMe = () => {
  return (
    <Grid2
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
      <Grid2
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
            fontSize: { xs: '32px', sm: '42px' },
            color: 'white',
            fontWeight: 700,
            marginBottom: '20px',
          }}
        >
          SOBRE MÍ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '22px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          👋 Me apasionan la <b>programación</b>, la <b>tecnología</b>, y el{' '}
          <b>deporte</b>. Mi curiosidad es lo que me impulsa a{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            mejorar
          </span>{' '}
          y seguir aprendiendo constantemente, aplicando cada nuevo conocimiento
          en los proyectos en los que participo.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '22px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          Cuento con <b>habilidades técnicas</b> requeridas en el mundo IT, así
          como con{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            habilidades blandas
          </span>{' '}
          para, junto a mis compañeros de equipo, llevar cualquier proyecto
          adelante.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '22px', sm: '24px' },
            marginBottom: '40px',
          }}
        >
          También poseo las competencias necesarias para trabajar en equipo,
          aportando tanto en el ámbito técnico como en el humano para lograr el{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            éxito
          </span>{' '}
          en cada proyecto.
        </Typography>
        {/* <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '22px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          Comencé mi camino en <b>Ingeniería en Sistemas</b>, pero en 2022
          decidí enfocarme en el mundo de la
          <span style={{ color: 'black' }}>programación</span>, en busca de
          nuevos desafíos y oportunidades para llevar mis capacidades a otro
          nivel 🚀 .
        </Typography> */}
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '22px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          En mi día a día como <b>Desarrollador Mobile Web</b>, me enfrento
          constantemente con el desafio de cumplir con las expectativas en
          cuanto a diseño y funcionalidad de cada uno de los componentes de la
          aplicación, para que funcionen correctamente tanto en la version web,
          como en la version android y ios. Disfruto mi día a día, aprendiendo,{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            resolviendo
          </span>{' '}
          y mejorando en el mundo de la programación 🚀.
        </Typography>
      </Grid2>
      <Grid2
        minHeight={500}
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
          Descarga CV
        </Button>
      </Grid2>
    </Grid2>
  );
};
