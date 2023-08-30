import About from "../components/About/About";
import Contect from "../components/Contect/Contect";
import Hero from "../components/Hero/Hero";
import Project from "../components/Projects/Project";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Project/>
      <section className="homeClasses">
        <Contect />
      </section>
    </>
  );
}

export default Home;