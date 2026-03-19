import { Routes, Route } from "react-router-dom";

import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Work } from "./components/sections/Work";
import { About } from "./components/sections/About";
import { LesCracks } from "./components/sections/LesCracks";
import { Stack } from "./components/sections/Stack";
import { BuildingInPublic } from "./components/sections/BuildingInPublic";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

import ProjectsPage from "./pages/Projects";
import ExperiencesPage from "./pages/Experiences";

const HomePage = () => (
  <>
    <ScrollProgress />
    <Header />
    <main className="max-w-content mx-auto px-6 md:px-12">
      <Hero />
      <Work />
      <About />
      <LesCracks />
      <Stack />
      <BuildingInPublic />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/experiences" element={<ExperiencesPage />} />
  </Routes>
);

export default App;
