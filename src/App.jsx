import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";

import { AboutMe } from "./components/AboutMe";
import { HomeTitle } from "./components/HomeTitle";
import StepperJobs from "./components/StepperJobs";

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
        {/*  <Box height="300px">ss</Box> */}
      </Container>
    </>
  );
}

export default App;
