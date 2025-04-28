import "./App.css";
import Header from "./components/header/Header";
// import About from "./screens/About";
import CodeOfConduct from "./screens/CodeOfConduct";
import Schedule from "./screens/Schedule";
import Speakers from "./screens/Speakers";
import Hero from "./screens/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Venue from "./screens/Venue";
import Gallery from "./screens/Gallery";
import Sponsors from "./screens/Sponsors";
import Team from "./screens/Team";
import FAQ from "./screens/FAQ";
// import Contact from "./screens/Contact";
import Footer from "./components/footer/Footer";

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
                {/* <About /> */}
                <Speakers />
                {/* <Schedule /> */}
                <Gallery />
                <Venue />
                <Sponsors />
                <Team />
                <FAQ />
                {/* <Contact /> */}
                <Footer />
              </>
            }
          />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
