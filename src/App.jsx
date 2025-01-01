import "./App.css";
import Header from "./components/header/Header";
import About from "./screens/About";
import Hero from "./screens/Hero";
import Speakers from "./screens/Speakers";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Speakers />
    </>
  );
}

export default App;
