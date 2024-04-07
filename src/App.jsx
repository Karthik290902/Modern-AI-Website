import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/header";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lf:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
