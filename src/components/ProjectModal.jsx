/* eslint-disable react/prop-types */
import {
  Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Chip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectTechChips } from "./ProjectTechChips";
import { ProjectLinks } from "./ProjectLinks";

export const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="project-modal-title"
      sx={{
        "& .MuiDialog-paper": {
          display: "flex",
          flexDirection: "column",
          maxHeight: "92vh",
        },
      }}
    >
      {project && (
        <>
          {/* HEADER con categoría */}
          <DialogTitle
            id="project-modal-title"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pr: 1.5,
              py: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {project.category && (
                <Chip
                  label={t(`projects.categories.${project.category}`)}
                  size="small"
                  sx={{
                    bgcolor: "rgba(0, 255, 255, 0.1)",
                    color: "neon.cyan",
                    border: "1px solid rgba(0, 255, 255, 0.4)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "0.7rem",
                  }}
                />
              )}
              <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
                {project.title}
              </Typography>
            </Box>
            <IconButton
              onClick={onClose}
              aria-label={t("projects.close")}
              sx={{
                color: "neon.magenta",
                "&:hover": { bgcolor: "rgba(255, 29, 141, 0.1)" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          {/* CONTENIDO scrolleable */}
          <DialogContent
            sx={{
              p: 0,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {/* HERO: Galería */}
            <ProjectGallery images={project.img} title={project.title} />

            {/* DESCRIPCIÓN */}
            <Box sx={{ px: { xs: 2, sm: 3 } }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {project.desc}
              </Typography>
            </Box>

            {/* TECNOLOGÍAS */}
            {project.icons && project.icons.length > 0 && (
              <Box sx={{ px: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", mb: 2, textAlign: "center" }}
                >
                  {t("projects.stack")}
                </Typography>
                <ProjectTechChips icons={project.icons} />
              </Box>
            )}
          </DialogContent>

          {/* STICKY BOTTOM: Links siempre visibles */}
          {project.links && project.links.length > 0 && (
            <Box
              sx={{
                position: "sticky",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2.5,
                bgcolor: "background.paper",
                borderTop: "1px solid rgba(255, 29, 141, 0.25)",
                boxShadow: "0 -4px 20px rgba(0,0,0,0.5)",
                zIndex: 1,
              }}
            >
              <ProjectLinks links={project.links} />
            </Box>
          )}
        </>
      )}
    </Dialog>
  );
};