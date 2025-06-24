import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CodeOfConduct from "./screens/CodeOfConduct";
// import Schedule from "./components/sections/Schedule";
import Speakers from "./components/sections/Speakers";
import Hero from "./components/sections/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Venue from "./components/sections/Venue";
import Gallery from "./components/sections/Gallery";
import Sponsors from "./components/sections/Sponsors";
import Team from "./components/sections/Team";
import FAQ from "./components/sections/FAQ";
import About from "./components/sections/About";
import CommunityVoices from "./components/sections/CommunityVoices";
import EmailWriteUp from "./screens/EmailWriteUp";
import WelcomeEmail from "./screens/Welcome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Speakers />
                <CommunityVoices />
                {/* <Schedule /> */}
                <Gallery />
                <Venue />
                <Sponsors />
                <Team />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/email/general-write-up" element={<EmailWriteUp />} />
          <Route path="/email/welcome" element={<WelcomeEmail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
