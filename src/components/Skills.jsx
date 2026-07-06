import { Box, Container, Grid, Typography } from "@mui/material";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaShieldAlt, FaKey
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiMui, SiNextdotjs,
  SiPostgresql, SiSequelize, SiRedux, SiMongodb, SiJsonwebtokens, SiJest
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

// Lista completa de tecnologías con sus colores de marca
const tecnologias = [
  { title: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { title: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { title: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { title: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { title: 'React', icon: <FaReact color="#61DAFB" /> },
  { title: 'React Native', icon: <FaReact color="#61DAFB" /> },
  { title: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
  { title: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
  { title: 'Material UI', icon: <SiMui color="#007FFF" /> },
  { title: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { title: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
  { title: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { title: 'Sequelize', icon: <SiSequelize color="#52B0E7" /> },
  { title: 'Redux', icon: <SiRedux color="#764ABC" /> },
  { title: 'AuthJS', icon: <FaShieldAlt color="#00C000" /> },
  { title: 'OAuth', icon: <FaKey color="#F3C623" /> },
  { title: 'JWT', icon: <SiJsonwebtokens color="#FF0000" /> },
  { title: 'Jest', icon: <SiJest color="#C21325" /> },
  { title: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { title: 'GitHub', icon: <FaGithub color="#ffffff" /> },
];

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: 8, bgcolor: 'background.default', scrollMarginTop: '85px' }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            {t('skills.title')}
          </Typography>
          <Box
            sx={{
              borderBottom: 4,
              borderColor: 'neon.cyan',
              width: 100,
              mb: 4,
            }}
          />
        </Reveal>

        <Grid container spacing={3} justifyContent="center">
          {tecnologias.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={tech.title}>
              <Reveal delay={(index % 6) * 60}>
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
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
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
                      color: 'text.primary',
                      fontWeight: 500,
                      textAlign: 'center'
                    }}
                  >
                    {tech.title}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};