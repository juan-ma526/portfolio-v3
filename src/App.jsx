import { Box, Container } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";

import { AboutMe } from "./components/AboutMe";
import { HomeTitle } from "./components/HomeTitle";
import StepperJobs from "./components/StepperJobs";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Container
        sx={{
          bgcolor: "#13151a",
        }}
        component="main"
        maxWidth={false}
        disableGutters
      >
        <Navbar />
        <HomeTitle />
        <AboutMe />
        <StepperJobs />
        <Skills />
        <Projects />
        <Box height="300px">ss</Box>
      </Container>
    </>
  );
}

export default App;
