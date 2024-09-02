import { Box, Container, IconButton, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import homeImg from "./assets/HomeImage.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <>
      <Container
        sx={{
          bgcolor: "red",
        }}
        component="main"
        maxWidth={false}
        disableGutters
      >
        <Navbar />
        <Box
          sx={{
            backgroundImage: `url(${homeImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "700px", md: "917px" },
            position: "relative",
            width: "100%",
            backgroundAttachment: "scroll",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              padding: "10px",
              gap: "20px",
            }}
            color="white"
          >
            <Typography fontWeight={800} variant="h3" sx={{ fontSize: { xs: "36px", sm: "52px", md: "66px" } }}>
              Hola soy Martin Perez
            </Typography>
            <Typography
              sx={{
                background: "linear-gradient(to right,#FF007F, #8A2BE2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "70px", sm: "68px", md: "96px" },
              }}
              fontWeight={800}
              variant="h1"
            >
              Fullstack
            </Typography>
            <Typography
              color="#fff"
              fontWeight={800}
              variant="h2"
              sx={{ fontSize: { xs: "48px", sm: "40px", md: "56px" } }}
            >
              Developer
            </Typography>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
              <IconButton
                size="large"
                sx={{
                  boxShadow: "0 4px 6px #000000b3",
                  bgcolor: "error.main",
                  backdropFilter: blur("4px"),
                  color: "white",
                  "&:hover": {
                    bgcolor: "black",
                  },
                }}
                variant="contained"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  boxShadow: "0 4px 6px #000000b3",
                  bgcolor: "error.main",
                  backdropFilter: blur("4px"),
                  color: "white",
                  "&:hover": {
                    bgcolor: "black",
                  },
                }}
                variant="contained"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box height="300px" sx={{ backgroundColor: "#13151a" }}>
          ss
        </Box>
      </Container>
    </>
  );
}

export default App;
