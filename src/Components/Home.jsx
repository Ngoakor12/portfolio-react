import About from "./About";
import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";

function Home() {
  return (
    <section className="container">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </section>
  );
}

export default Home;
