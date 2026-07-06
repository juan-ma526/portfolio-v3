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
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Tu lista original, intacta
  const navItems = [
    { title: t('navbar.home'),       icon: <HomeIcon />,              path: '#' },
    { title: t('navbar.about'),      icon: <PersonIcon />,            path: '#about-me' },
    { title: t('navbar.experience'), icon: <HomeRepairServiceIcon />, path: '#trabajos' },
    { title: t('navbar.projects'),   icon: <LaptopIcon />,            path: '#proyectos' },
    { title: t('navbar.skills'),     icon: <SchoolIcon />,            path: '#skills' },
    { title: t('navbar.contact'),    icon: <EmailIcon />,             path: '#footer' },
  ];

    const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es');
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Typography variant="h6" sx={{ my: 3, fontWeight: 'bold', letterSpacing: '2px' }}>
        <Box component="span" sx={{ color: 'neon.cyan' }}>&lt;</Box> MP <Box component="span" sx={{ color: 'neon.magenta' }}>/&gt;</Box>
      </Typography>
      <Divider />
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
        <ListItem sx={{ justifyContent: 'center', py: 2 }}>
          <Button
            onClick={toggleLanguage}
            aria-label={i18n.language.startsWith('es') ? 'Switch to English' : 'Cambiar a Español'}
            sx={{
              px: 4,
              py: 1,
              color: 'neon.cyan',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '20px',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'rgba(0, 255, 255, 0.1)',
                borderColor: 'neon.cyan',
              }
            }}
            variant="outlined"
          >
            {i18n.language.startsWith('es') ? 'EN' : 'ES'}
          </Button>
        </ListItem>
      </List>
   
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          width: '100%',
          bgcolor: 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid rgba(0, 255, 255, 0.15)',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: 'space-between', lg: 'center' },
            minHeight: '70px',
          }}
        >
          {/* BOTÓN HAMBURGUESA MOBILE */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' }, color: 'neon.cyan' }}
          >
            <MenuIcon />
          </IconButton>

          {/* MONOGRAMA visible en móvil/tablet */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: 'block', lg: 'none' },
              fontWeight: 'bold',
              letterSpacing: '2px',
              color: 'text.primary',
            }}
          >
            <Box component="span" sx={{ color: 'neon.cyan' }}>&lt;</Box>
            {' MP '}
            <Box component="span" sx={{ color: 'neon.magenta' }}>/&gt;</Box>
          </Typography>

          {/* MENÚ DESKTOP (Acentos Neón) */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 1,
              alignItems: 'center',
              maxWidth: 1100,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                component="a"
                href={item.path}
                startIcon={item.icon}
                key={item.title}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  transition: 'all 0.3s ease',
                  '& .MuiButton-startIcon': {
                    color: 'inherit',
                    transition: 'color 0.3s ease',
                  },
                  '&:hover': {
                    color: 'neon.cyan',
                    textShadow: '0 0 8px rgba(0, 255, 255, 0.6)',
                    bgcolor: 'transparent',
                    transform: 'translateY(-2px)',
                    '& .MuiButton-startIcon': {
                      color: 'neon.magenta',
                      filter: 'drop-shadow(0 0 5px rgba(255, 29, 141, 0.6))',
                    },
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
            <Button
              onClick={toggleLanguage}
              aria-label={i18n.language.startsWith('es') ? 'Switch to English' : 'Cambiar a Español'}
              sx={{
                ml: 2,
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                color: 'text.primary',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'neon.cyan',
                  borderColor: 'neon.cyan',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  bgcolor: 'rgba(0, 255, 255, 0.05)',
                  transform: 'translateY(-2px)',
                }
              }}
              variant="outlined"
            >
              {i18n.language.startsWith('es') ? 'EN' : 'ES'}
            </Button>
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
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid rgba(255, 29, 141, 0.2)',
              bgcolor: 'background.default',
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