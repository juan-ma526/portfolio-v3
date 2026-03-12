import { 
  Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, 
  Dialog, DialogContent, DialogTitle, IconButton, Button, Chip 
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { getProjects } from "../data/projectData";

export const Projects = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);
  // Estados para manejar el Modal
  const [openModal, setOpenModal] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  

  const handleOpen = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setProyectoSeleccionado(null);
  };

  // Función para asignar el icono correcto según el título del link
  const getLinkIcon = (title) => {
    if (title.toLowerCase().includes("github")) return <FaGithub />;
    if (title.toLowerCase().includes("video")) return <FaYoutube />;
    return <FaExternalLinkAlt />;
  };

  return (
    <Box
      id="proyectos"
      component="section"
      sx={{ py: 0, bgcolor: '#121212', scrollMarginTop: '85px' }}
    >
      {/* TÍTULO */}
      <Typography
        variant="h2"
        sx={{
          ml: { xs: '20px', md: '400px' },
          fontWeight: 700,
          fontSize: { xs: '1.875rem', md: '2.25rem' },
          color: 'white',
        }}
      >
        {t('projects.title')}
      </Typography>
      <Box
        sx={{
          borderBottom: 4,
          borderColor: '#FF1D8D',
          width: '100px',
          ml: { xs: '20px', md: '400px' },
          mb: { xs: '32px' },
        }}
      />

      {/* GRID DE TARJETAS ESTANDARIZADAS */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}
      >
        {projects.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(255, 255, 255, 0.03)', // Cristal oscuro
                borderRadius: '16px',
                border: '1px solid rgba(0, 255, 255, 0.1)', // Borde cian sutil
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 255, 255, 0.15)',
                  borderColor: 'rgba(0, 255, 255, 0.4)',
                },
              }}
            >
              {/* ActionArea hace que toda la tarjeta sea clickeable */}
              <CardActionArea
                onClick={() => handleOpen(proyecto)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {/* LOGO DEL PROYECTO (Fondo negro para que resalten) */}
                <Box
                  sx={{
                    width: '100%',
                    bgcolor: '#0a0a0a',
                    p: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
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
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {proyecto.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#00FFFF',
                      textAlign: 'center',
                      mt: 2,
                      fontWeight: 500,
                    }}
                  >
                    {t('projects.click')} &rarr;
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* MODAL DE DETALLES (MUI Dialog) */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#161616', // Fondo oscuro del modal
            border: '1px solid rgba(255, 29, 141, 0.3)', // Borde magenta
            borderRadius: '16px',
            boxShadow: '0 0 30px rgba(0,0,0,0.8)',
            color: 'white',
          },
        }}
      >
        {proyectoSeleccionado && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 1,
              }}
            >
              <Typography
                variant="h4"
                component="span"
                sx={{ fontWeight: 'bold' }}
              >
                {proyectoSeleccionado.title}
              </Typography>
              <IconButton
                onClick={handleClose}
                sx={{
                  color: '#FF1D8D',
                  '&:hover': { bgcolor: 'rgba(255, 29, 141, 0.1)' },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent
              dividers
              sx={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              {/* TECNOLOGÍAS (Píldoras) */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 3,
                  justifyContent: 'center',
                }}
              >
                {proyectoSeleccionado.icons.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: 'transparent',
                      color: '#00FFFF',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>

              {/* DESCRIPCIÓN */}
              <Typography
                variant="body1"
                sx={{
                  color: '#A3A3A3',
                  mb: 4,
                  textAlign: 'justify',
                  lineHeight: 1.7,
                }}
              >
                {proyectoSeleccionado.desc}
              </Typography>

              {/* GALERÍA DE IMÁGENES (Scroll Horizontal) */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  overflowX: 'auto',
                  pb: 2,
                  '&::-webkit-scrollbar': { height: '8px' },
                  '&::-webkit-scrollbar-thumb': {
                    bgcolor: '#FF1D8D',
                    borderRadius: '4px',
                  },
                }}
              >
                {proyectoSeleccionado.img.map((imagen, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={imagen}
                    alt={`Captura ${index + 1}`}
                    sx={{
                      height: '250px',
                      borderRadius: '8px',
                      width: { xs: '100%', md: '350px' },
                      objectFit: 'fill',
                      margin: 'auto',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </Box>

              {/* BOTONES DE ENLACES (Dinámicos) */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                  mt: 4,
                }}
              >
                {proyectoSeleccionado.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    startIcon={getLinkIcon(link.title)}
                    href={link.path}
                    target="_blank"
                    sx={{
                      bgcolor:
                        link.title.toLowerCase() === 'video'
                          ? '#FF0000'
                          : '#FF1D8D',
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor:
                          link.title.toLowerCase() === 'video'
                            ? '#CC0000'
                            : '#D01772',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.title}
                  </Button>
                ))}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};