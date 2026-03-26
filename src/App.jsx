import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Feedbacks, Hero, Navbar } from "./components";
import { LandingPage, Institutional, Sobre, Termos, Contato } from "./pages";

const HomePage = () => {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/site-institucional" element={<Institutional />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
