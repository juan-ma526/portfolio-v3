import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";

import { AboutMe } from "./components/AboutMe";
import { HomeTitle } from "./components/HomeTitle";
import StepperJobs from "./components/StepperJobs";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";



function App() {
  return (
    <>
<Container
          component="main"
          maxWidth={false}
          disableGutters
          sx={{ bgcolor: 'background.default', minHeight: '100vh' }}
        >
        <Navbar />
        <HomeTitle />
        <AboutMe />
        <StepperJobs />
        <Skills />
        <Projects />
        <Footer />
      </Container>
    </>
  );
}

export default App;
