/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaGooglePlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LINK_CONFIG = {
  github:    { icon: <FaGithub />,         color: "#FF1D8D" },
  video:     { icon: <FaYoutube />,        color: "#FF0000" },
  demo:      { icon: <FaExternalLinkAlt />, color: "#8A2BE2" },
  app:       { icon: <FaExternalLinkAlt />, color: "#8A2BE2" },
  website:   { icon: <FaExternalLinkAlt />, color: "#8A2BE2" },
  playstore: { icon: <FaGooglePlay />,      color: "#00C853" },
};

export const ProjectLinks = ({ links }) => {
  const { t } = useTranslation();
  if (!links || links.length === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {links.map((link, index) => {
        const config = LINK_CONFIG[link.type] || LINK_CONFIG.website;
        return (
          <Button
            key={`${link.type}-${index}`}
            variant="contained"
            startIcon={config.icon}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            size="medium"
            sx={{
              bgcolor: config.color,
              color: "white",
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
              py: 1,
              "&:hover": {
                bgcolor: config.color,
                filter: "brightness(1.15)",
                transform: "translateY(-2px)",
              },
              transition: "transform 0.2s ease, filter 0.2s ease",
            }}
          >
            {t(`projects.linkTypes.${link.type}`)}
          </Button>
        );
      })}
    </Box>
  );
};