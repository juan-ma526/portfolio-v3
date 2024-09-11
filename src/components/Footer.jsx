import { Avatar, Box, Button, keyframes, Typography } from "@mui/material";
import cat from "../assets/catFooter.png";

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

export const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        height: { xs: "auto", md: "300px" },
        background: "linear-gradient(135deg, #e8e8e8,#333333,#FAFAFA,#333333)",
        backgroundSize: "400% 400%",
        animation: `${gradientAnimation} 10s ease infinite`,

        mt: "75px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          mx: { xs: "0px", md: "32px" },
          gap: { xs: 4, md: 0 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: { xs: 0, md: 1 } }}>
          <Avatar
            src={cat}
            variant="square"
            sx={{
              height: "200px",
              width: "200px",
              mt: "22px",
              objectFit: "contain",
              "& .MuiAvatar-img": {
                objectFit: "contain",
              },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "28px",
                fontWeight: 600,
                background: "linear-gradient(to right,#FF007F, #8A2BE2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Martin Perez
            </Typography>
            <Typography variant="subtitle1" color="black">
              FullStack Developer
            </Typography>
          </Box>
        </Box>
        <Button
          href="mailto:jmperez675@gmail.com"
          component="a"
          variant="contained"
          sx={{
            background: "linear-gradient(to right,#FA007F, #8A2BE2)",
          }}
        >
          Contacto
        </Button>
        <Typography
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,.5)",
            color: "black",
            position: "absolute",
            top: { xs: "390px", md: "240px" },
            left: { xs: "14%", sm: "31%", md: "39%", lg: "44%" },
          }}
        >
          Página hecha por 😎 Martin Perez 2024.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: { xs: "80px", md: "0px" },
          }}
        >
          <Button
            href="https://www.linkedin.com/in/juan-ma526/"
            target="_blank"
            component="a"
            variant="contained"
            sx={{
              background: "linear-gradient(to right,#FA007F, #8A2BE2)",
            }}
          >
            Linkedin
          </Button>
          <Button
            href="https://www.youtube.com/@jmperez526"
            target="_blank"
            component="a"
            variant="contained"
            sx={{
              background: "linear-gradient(to right,#FA007F, #8A2BE2)",
            }}
          >
            Youtube
          </Button>
          <Button
            href="https://github.com/juan-ma526"
            target="_blank"
            component="a"
            variant="contained"
            sx={{
              background: "linear-gradient(to right,#FA007F, #8A2BE2)",
            }}
          >
            Github
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
