import Image1 from "../Images/shopping-apps.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <section>
        <div class="image"></div>

        <div class="content">
          <h2>About Us</h2>
          <span></span>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            aspernatur voluptas inventore ab voluptates nostrum minus illo
            laborum harum laudantium earum ut, temporibus fugiat sequi explicabo
            facilis unde quos corporis!
          </p>

          <ul class="links">
            <li>
              <a href="#">work</a>
            </li>
            <div class="vertical-line"></div>
            <li>
              <a href="#">service</a>
            </li>
            <div class="vertical-line"></div>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
