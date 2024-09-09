import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import homeImg from "../assets/Home2.jpg";

export const HomeTitle = () => {
  return (
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
        marginBottom: "100px",
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
            href="https://github.com/juan-ma526"
            target="_blanck"
            sx={{
              width: "52px",
              height: "52px",
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
            <GitHubIcon sx={{ width: "32px", height: "32px" }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/juan-ma526/"
            target="_blanck"
            sx={{
              boxShadow: "0 4px 6px #000000b3",
              width: "52px",
              height: "52px",
              bgcolor: "error.main",
              fontSize: "2rem",
              backdropFilter: blur("4px"),
              color: "white",
              "&:hover": {
                bgcolor: "black",
              },
            }}
            variant="contained"
          >
            <LinkedInIcon sx={{ width: "32px", height: "32px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
