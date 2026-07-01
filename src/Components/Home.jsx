import About from "./About";
import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default Home;
