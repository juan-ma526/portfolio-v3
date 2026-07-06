import {
  Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Chip
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { getProjects } from "../data/projectData";
import { Reveal } from "./Reveal";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const handleOpen = (proyecto) => setProyectoSeleccionado(proyecto);
  const handleClose = () => setProyectoSeleccionado(null);

  return (
    <Box
      id="proyectos"
      component="section"
      sx={{ py: 8, bgcolor: 'background.default', scrollMarginTop: '85px' }}
    >
      <Container maxWidth="lg">
        {/* TÍTULO */}
        <Reveal>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            {t('projects.title')}
          </Typography>
          <Box
            sx={{
              borderBottom: 4,
              borderColor: 'neon.magenta',
              width: 100,
              mb: 4,
            }}
          />
        </Reveal>

        {/* GRID DE TARJETAS */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((proyecto, index) => (
            <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
              <Reveal delay={(index % 3) * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0, 255, 255, 0.15)',
                      borderColor: 'rgba(0, 255, 255, 0.4)',
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => handleOpen(proyecto)}
                    aria-label={proyecto.title}
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                  >
                    {/* LOGO del proyecto */}
                    <Box
                      sx={{
                        width: '100%',
                        bgcolor: '#0a0a0a',
                        p: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        position: 'relative',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={proyecto.logo}
                        alt={proyecto.title}
                        sx={{
                          maxHeight: '100%',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
                        }}
                      />
                      {/* Categoría en la card */}
                      {proyecto.category && (
                        <Chip
                          label={t(`projects.categories.${proyecto.category}`)}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            bgcolor: 'rgba(0, 255, 255, 0.1)',
                            color: 'neon.cyan',
                            border: '1px solid rgba(0, 255, 255, 0.4)',
                            fontWeight: 600,
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        />
                      )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ color: 'text.primary', fontWeight: 'bold', textAlign: 'center' }}
                      >
                        {proyecto.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'neon.cyan', textAlign: 'center', mt: 2, fontWeight: 500 }}
                      >
                        {t('projects.click')} &rarr;
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* MODAL */}
      <ProjectModal project={proyectoSeleccionado} onClose={handleClose} />
    </Box>
  );
};