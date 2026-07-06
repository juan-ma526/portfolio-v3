/* eslint-disable react/prop-types */
import { Box, Chip } from "@mui/material";

// Tecnologías "core" (frameworks principales) → cian (acento principal)
// El resto (Html, Css, etc.) → violeta (sub-acento)
const CORE_TECHS = [
  "React", "React Native Expo", "Next JS", "NextJs", "Nest JS",
  "Express", "Node.js", "Typescript"
];

export const ProjectTechChips = ({ icons }) => {
  if (!icons || icons.length === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "center",
        paddingBottom: 4,
      }}
    >
      {icons.map((tech) => {
        const isCore = CORE_TECHS.includes(tech);
        return (
          <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              bgcolor: "transparent",
              color: isCore ? "neon.cyan" : "neon.violet",
              border: `1px solid ${isCore ? "rgba(0, 255, 255, 0.4)" : "rgba(138, 43, 226, 0.4)"}`,
              fontWeight: isCore ? 600 : 500,
            }}
          />
        );
      })}
    </Box>
  );
};