import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Residents from "./components/Residents";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#F7F8FA", color: "#10182B", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Pricing />
      <Features />
      <Residents />
      <Footer />
    </div>
  );
}
