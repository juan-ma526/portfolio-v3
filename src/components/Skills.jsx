import { Box, Grid2, Typography } from "@mui/material";
import { ICONS } from "../data/skillsData";

export const Skills = () => {
  return (
    <>
      <Typography variant="h2" sx={{ mt: "80px", ml: { xs: "20px", md: "70px" } }}>
        Tecnologías
      </Typography>
      <Box
        sx={{
          display: "inline-block",
          width: "90px",
          color: "#00FFFF",
          borderBottom: 4,
          mb: "60px",
          ml: { xs: "20px", md: "70px" },
        }}
      ></Box>
      <Grid2 container spacing={2} margin="auto" sx={{ justifyContent: "center", alignContent: "center", mb: "22px" }}>
        {ICONS.map((icon, index) => (
          <Grid2
            container
            spacing={{ xs: 1, md: 2 }}
            direction={{ xs: "column", md: "row" }}
            size={{ xs: 6, md: 2 }}
            key={index}
            sx={{
              backgroundColor: "white",
              width: { xs: "165px", md: "200px" },
              height: { xs: "130px", md: "90px" },
              justifyContent: "center",
              alignContent: "center",
              borderRadius: "20px",
              boxShadow: "0px 2px 10px #00FFFF",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "rotate(-10deg)",
              },
            }}
          >
            <img src={icon.path} alt="imagen icono" style={{ width: "80px", height: "80px" }} />
            <Typography sx={{ color: "black", alignSelf: "center", fontWeight: "500" }}>{icon.title}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
