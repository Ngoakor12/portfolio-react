import aboutImage from "../assets/doggo.jpg";

function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="about-container">
        <div className="about-image-container">
          <img className="about-image" src={aboutImage} alt="" />
        </div>
        <div className="about-details">
          <p>
            A detailed paragraph about myself and all that makes me great. If
            you want to be hired, impress the employer. If you want to partner,
            why should they partner with you. Otherwise you can really write
            whatever as long as it makes sense for the purpose of the site
          </p>
          <a className="about-cta" href="http://">
            Contact Ngoako
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
