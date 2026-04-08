
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Metrics from "./components/Metrics";
import Areas from "./components/Areas";
import Projects from "./components/Projects";
import DataTransparency from "./components/DataTransparency";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Areas />
        <Projects />
        <DataTransparency />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
