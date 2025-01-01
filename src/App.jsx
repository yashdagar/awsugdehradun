import "./App.css";
import Header from "./components/header/Header";
import About from "./screens/About";
import CodeOfConduct from "./screens/CodeOfConduct";
import Hero from "./screens/Hero";
import Speakers from "./screens/Speakers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
