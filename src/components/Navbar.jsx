/* eslint-disable react/prop-types */
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LaptopIcon from "@mui/icons-material/Laptop";

const drawerWidth = 240;

// Tu lista original, intacta
const navItems = [
  { title: "Inicio", icon: <HomeIcon />, path: "#" },
  { title: "Sobre mi", icon: <PersonIcon />, path: "#about-me" },
  { title: "Experiencia", icon: <HomeRepairServiceIcon />, path: "#trabajos" },
  { title: "Proyectos", icon: <LaptopIcon />, path: "#proyectos" },
  { title: "Tecnologias", icon: <SchoolIcon />, path: "#skills" },
  { title: "Contacto", icon: <EmailIcon />, path: "#footer" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // El Drawer (Menú lateral móvil) con los colores adaptados
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", height: '100%', bgcolor: '#121212', color: 'white' }}>
      <Typography variant="h6" sx={{ my: 3, fontWeight: 'bold', letterSpacing: '2px' }}>
        <span style={{ color: '#00FFFF' }}>&lt;</span> MP <span style={{ color: '#FF1D8D' }}>/&gt;</span>
      </Typography>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton 
              href={item.path} 
              component="a" 
              sx={{ 
                textAlign: "center", 
                py: 2,
                '&:hover': { bgcolor: 'rgba(0, 255, 255, 0.1)' } 
              }}
            >
              <ListItemText 
                primary={item.title} 
                sx={{ 
                  '& .MuiTypography-root': { 
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  } 
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed" // Fijo arriba
        sx={{
          // ESTILOS NUEVOS: Glassmorphism y Full-Width
          width: '100%',
          bgcolor: 'rgba(18, 18, 18, 0.8)', // Fondo casi negro semitransparente
          backdropFilter: 'blur(12px)', // Efecto esmerilado
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid rgba(0, 255, 255, 0.15)', // Borde cian sutil
        }}
      >
        <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'center' }, minHeight: '70px' }}>
          
          {/* BOTÓN HAMBURGUESA MOBILE */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: '#00FFFF' }}
          >
            <MenuIcon />
          </IconButton>

          {/* MENÚ DESKTOP (Acentos Neón) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                component="a"
                href={item.path}
                startIcon={item.icon}
                key={item.title}
                sx={{
                  color: "#e0e0e0",
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 2,
                  py: 1,
                  transition: "all 0.3s ease",
                  '& .MuiButton-startIcon': {
                    color: 'inherit', // El icono hereda el color del texto
                    transition: "color 0.3s ease",
                  },
                  // EFECTO NEÓN AL HACER HOVER
                  "&:hover": {
                    color: "#00FFFF", // Texto a cian
                    textShadow: "0 0 8px rgba(0, 255, 255, 0.6)",
                    bgcolor: "transparent",
                    transform: "translateY(-2px)", // Saltito
                    '& .MuiButton-startIcon': {
                      color: "#FF1D8D", // Icono a magenta en hover (contraste genial)
                      filter: "drop-shadow(0 0 5px rgba(255, 29, 141, 0.6))"
                    }
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* NAVEGACIÓN MOBILE (Drawer) */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { 
              boxSizing: "border-box", 
              width: drawerWidth,
              borderRight: '1px solid rgba(255, 29, 141, 0.2)' // Borde magenta en el menú
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;