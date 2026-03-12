import { Box, Grid, Typography } from "@mui/material";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaShieldAlt, FaKey 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiMui, SiNextdotjs, 
  SiPostgresql, SiSequelize, SiRedux, SiMongodb, SiJsonwebtokens, SiJest 
} from "react-icons/si";
import { useTranslation } from "react-i18next";

// Lista completa de tus tecnologías con sus colores oficiales
const tecnologias = [
  { title: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { title: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { title: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { title: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { title: 'React', icon: <FaReact color="#61DAFB" /> },
  { title: 'React Native', icon: <FaReact color="#61DAFB" /> }, // Usa el mismo de React
  { title: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> }, // Blanco para fondo oscuro
  { title: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
  { title: 'Material UI', icon: <SiMui color="#007FFF" /> },
  { title: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { title: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
  { title: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { title: 'Sequelize', icon: <SiSequelize color="#52B0E7" /> },
  { title: 'Redux', icon: <SiRedux color="#764ABC" /> },
  { title: 'AuthJS', icon: <FaShieldAlt color="#00C000" /> }, // Escudo genérico
  { title: 'OAuth', icon: <FaKey color="#F3C623" /> }, // Llave genérica
  { title: 'JWT', icon: <SiJsonwebtokens color="#FF0000" /> },
  { title: 'Jest', icon: <SiJest color="#C21325" /> },
  { title: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { title: 'GitHub', icon: <FaGithub color="#ffffff" /> }, // Blanco para fondo oscuro
];

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <Box 
      id="skills" 
      component="section" 
      sx={{ 
        py: 10, 
        bgcolor: '#121212', 
        scrollMarginTop: '85px' 
      }}
    >
      <Typography
        
        variant="h2"
        sx={{ ml: { xs: '20px', md: '400px' }, fontWeight: 700, fontSize: { xs: '1.875rem', md: '2.25rem' }, color: 'white' }}
      >
        {t('skills.title')}
      </Typography>   
         <Box
        sx={{
          borderBottom: 4,
          borderColor: '#00FFFF',
          width: '100px',
          ml: { xs: '20px', md: '400px' },
          mb: { xs: '32px' },
        }}
      />

   

      <Grid 
        container 
        spacing={3} 
        justifyContent="center" 
        sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}
      >
        {tecnologias.map((tech, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                height: '100%',
                borderRadius: '16px',
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                '&:hover': {
                  bgcolor: 'rgba(0, 255, 255, 0.05)',
                  borderColor: 'rgba(0, 255, 255, 0.5)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                  transform: 'translateY(-4px)',
                }
              }}
            >
              <Box sx={{ fontSize: '3.5rem', mb: 1.5, display: 'flex' }}>
                {tech.icon}
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#e0e0e0', 
                  fontWeight: 500,
                  textAlign: 'center'
                }}
              >
                {tech.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};