import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  {
    label: "Desarrollador Front End",
    description: `Simulación laboral. MVP realizado por 5 desarrolladores. El objetivo de la practica es crear una web de informacion y divulgacion de proveedores de triple impacto y publicaciones relacionadas al tema.`,
    date: "06/2024 - 09/2024",
    Place: "Semillero Latam",
    Link: "https://www.linkedin.com/company/semillero-latam/",
  },
  {
    label: "Desarrollador Front End",
    description:
      "Concurso de Programacion dado por la comunidad de DevTalles. El objetivo de la aplicación es crear una web de sorteos para poder crear,borrar y actualizar los mismos usando la API de Discord. Solicitar estar en el servidor de discord para participar y poder elegir un ganador aleatoriamente.",
    date: "03/2024 - 04/2024",
    Place: "DevTalles",
    Link: "https://www.linkedin.com/school/devtalles/",
  },
  {
    label: "Desarrollador FullStack",
    description:
      "Proyecto Freelance para la creacion de una web para realizar sorteos, con un manejo de los mismos desde un panel Admin",
    date: "01/2024 - 02/2024",
    Place: "Freelance",
    Link: "*",
  },
  {
    label: "Desarrollador FullStack",
    description:
      "Práctica profesional desarrollada para la empresa CRUCE. Proyecto donde se desarrolló una aplicación de turnos para poder crear un administrador, operador y un cliente capaz de reservar, crear sucursales, modificar y operar cada sucursal y turnos, en grupo de 4 personas, utilizando la metodología ágil Scrum.",
    date: "10/2022 - 12/2022",
    Place: "Cruce",
    Link: "https://www.linkedin.com/company/cruce/",
  },
];

export default function StepperJobs() {
  return (
    <>
      <Typography variant="h2" sx={{ ml: { xs: "20px", md: "400px" }, fontWeight: 700 }}>
        Experiencia
      </Typography>
      <Box
        sx={{
          borderBottom: 4,
          borderColor: "#00FFFF",
          width: "100px",
          ml: { xs: "20px", md: "400px" },
          mb: { xs: "32px" },
        }}
      ></Box>
      <Box margin={"auto"} maxWidth={500}>
        <Stepper activeStep={-1} orientation="vertical" nonLinear>
          {steps.map((step, index) => (
            <Step key={index} expanded>
              <StepLabel
                sx={{
                  "& > * > svg": {
                    fill: "#FF007F",
                    height: "2.5rem",
                    width: "2.5rem",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    display: "inline-block",
                    color: "white",
                    fontWeight: "600",
                    borderBottom: 1,
                    borderColor: "#00FFFF",
                  }}
                >
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" sx={{ fontSize: "18px", mb: 2 }}>
                  {step.description}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ color: "#00FFFF", fontWeight: 700 }}>
                    {step.date}
                  </Typography>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    disabled={step.Place === "Freelance"}
                    href={step.Link}
                    target="_blanck"
                    variant="contained"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 1,
                      mr: 1,
                      "&.Mui-disabled": {
                        backgroundColor: "gray",
                        color: "white",
                      },
                    }}
                  >
                    {step.Place}
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}
