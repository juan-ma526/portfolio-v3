import { Avatar, Button, Grid, Typography } from '@mui/material';
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
          SOBRE MÍ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '18px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          Soy un{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            Desarrollador Frontend & Mobile
          </span>{' '}
          al que le apasionan los{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            desafíos
          </span>{' '}
          y la{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            mejora
          </span>{' '}
          continua. Mi mayor fortaleza es la{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            adaptabilidad
          </span>
          . Comencé mi camino dominando tecnologías clave del{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            frontend
          </span>{' '}
          y rápidamente sumé nuevas herramientas a mi stack para asegurar el
          éxito de cada entrega,{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            expandiéndome
          </span>{' '}
          con fluidez hacia el desarrollo backend cuando los desafíos del
          proyecto lo exigieron.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '18px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          En mi día a día, priorizo la{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            comunicaciónn
          </span>{' '}
          transparente y el{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            trabajo en equipo
          </span>
          . Me enfoco en cumplir las metas establecidas,{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            adaptándome
          </span>{' '}
          a los ritmos del proyecto y{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            gestionando
          </span>{' '}
          los desafíos de forma ágil. Disfruto{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            proponer soluciones
          </span>
          ,{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            recibir
          </span>{' '}
          feedback para optimizar el código y buscar proactivamente
          oportunidades de mejora continua en cada aplicación.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '18px', sm: '24px' },
            marginBottom: '20px',
          }}
        >
          Fuera del editor de código, la{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            disciplina
          </span>{' '}
          que aplico en el deporte y mis entrenamientos me acompaña en lo
          profesional: constancia, cero excusas y un{' '}
          <span
            style={{
              color: '#0ab8f7',
              fontWeight: 600,
              textShadow: '2px 2px black',
            }}
          >
            compromiso
          </span>{' '}
          total con el equipo para lograr el éxito en cada entrega 🚀.
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
          Descarga CV
        </Button>
      </Grid>
    </Grid>
  );
};
