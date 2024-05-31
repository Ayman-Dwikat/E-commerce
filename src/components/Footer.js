import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAnglesRight, faLocationDot, faClock, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


import "../styles/Footer.css";
import Image1 from "../Images/gallery-01.png";
import Image2 from "../Images/gallery-02.png";
import Image3 from "../Images/gallery-03.jpg";
import Image4 from "../Images/gallery-04.png";
import Image5 from "../Images/gallery-05.jpg";
import Image6 from "../Images/gallery-06.png";

function Footer() {
  return (
    <div class="footer" id="footer">
      <div class="container">
        {/* Box */}
        <div class="box">
          <h3>E-commerce</h3>
          <ul class="social">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100087475462339"
                class="facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ayman-dwikat-911a2b305/"
                class="linkedin"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ayman-Dwikat"
                class="github"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <p class="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>

        {/* Box */}
        <div class="box">
          <ul class="links">
            <li>
              <FontAwesomeIcon className="icon" icon={faAnglesRight} />
              <a href="#">Important Link 1</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faAnglesRight} />
              <a href="#">Important Link 2</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faAnglesRight} />
              <a href="#">Important Link 3</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faAnglesRight} />
              <a href="#">Important Link 4</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faAnglesRight} />
              <a href="#">Important Link 5</a>
            </li>
          </ul>
        </div>

        {/* Box */}
        <div class="box">
          <div class="line">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <div class="info">
            Palestine, Nablus, Inside The Sphinx, Room Number 220
            </div>
          </div>
          <div class="line">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <div class="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div class="line">
            <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
            <div class="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>

        {/* Box */}
        <div class="box footer-gallery">
          <img decoding="async" src={Image1} alt="" />
          <img decoding="async" src={Image2} alt="" />{" "}
          <img decoding="async" src={Image3} alt="" />{" "}
          <img decoding="async" src={Image4} alt="" />{" "}
          <img decoding="async" src={Image5} alt="" />{" "}
          <img decoding="async" src={Image6} alt="" />
        </div>
      </div>

      {/* Out Of Container */}
      <p class="copyright">Made With &lt;3 By Ayman</p>
    </div>
  );
}

export default Footer;
