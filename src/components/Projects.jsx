import { Box, Button, Grid2, Icon, Modal, Typography } from "@mui/material";
import { projects } from "../data/projectData";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Carrousel } from "./Carrousel";

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setOpen(true);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <>
      <Typography id="proyectos" variant="h2" sx={{ mt: "80px", ml: { xs: "20px", md: "70px" } }}>
        Proyectos
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
      <Grid2
        container
        spacing={2}
        sx={{ justifyContent: "center", alignContent: "stretch", mb: "22px", mx: { xs: "20px", md: "60px" } }}
      >
        {projects.map((project) => (
          <Grid2
            container
            onClick={() => handleOpen(project)}
            direction={{ xs: "column", md: "row" }}
            size={{ xs: 6, md: 6, lg: 3 }}
            key={project.title}
            sx={{
              backgroundColor: "white",
              cursor: "pointer",
              height: { xs: "130px", sm: "280px", md: "325px" },
              justifyContent: "center",
              alignContent: "center",
              borderRadius: "20px",
              transition: "transform .2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
              boxShadow: "0px 0px 4px white",
            }}
          >
            <img
              src={project.logo}
              alt="imagen icono"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
          </Grid2>
        ))}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...style,
              width: { xs: "350px", sm: "580px", md: "auto" },
              padding: "16px 10px",
              background: "linear-gradient(135deg, black, #333333)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
            }}
          >
            <Icon
              onClick={handleClose}
              sx={{
                position: "absolute",
                cursor: "pointer",
                right: "10px",
                top: "10px",
                fontSize: "2rem",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              color="error"
            >
              <CloseIcon sx={{ fontSize: "2rem" }} />
            </Icon>
            <Typography
              variant="h3"
              sx={{ color: "white", mb: "16px", fontWeight: 500, fontSize: { xs: "2rem", md: "44px" } }}
            >
              {selectedProject?.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", textAlign: "center", mb: "16px", fontSize: { md: "18px" } }}
            >
              {selectedProject?.desc}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: { xs: "wrap", md: "nowrap" },

                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mb: "22px",
              }}
            >
              {selectedProject?.icons.map((icon) => (
                <Button variant="outlined" color="error" key={icon}>
                  {icon}
                </Button>
              ))}
            </Box>
            {/* Box Img */}
            <Box
              sx={{
                width: { xs: "300px", sm: "450px", md: "500px" },
                height: { xs: "200px", sm: "250px", md: "300px" },
                textAlign: "center",
                bgcolor: "red",
                mb: "32px",
              }}
            >
              <Carrousel />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: "22px" }}>
              {selectedProject?.links.map((link, index) => (
                <Button href={link.path} target="_blank" color="error" variant="contained" key={link.title + index}>
                  {link.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Modal>
      </Grid2>
    </>
  );
};
