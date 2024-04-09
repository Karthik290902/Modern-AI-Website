import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/header";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lf:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
