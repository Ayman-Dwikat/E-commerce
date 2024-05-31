import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <section>
        <div className="image"></div>

        <div className="content">
          <h2>About Us</h2>
          <span></span>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            aspernatur voluptas inventore ab voluptates nostrum minus illo
            laborum harum laudantium earum ut, temporibus fugiat sequi explicabo
            facilis unde quos corporis!
          </p>

          <ul className="links">
            <li>
              <a href="#work">work</a>
            </li>
            <div className="vertical-line"></div>
            <li>
              <a href="#service">service</a>
            </li>
            <div className="vertical-line"></div>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
