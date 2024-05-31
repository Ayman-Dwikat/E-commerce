import Slider from "./Slider";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faEarthAfrica,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Image1 from "../Images/features-01.jpg";
import Image2 from "../Images/features-02.jpg";
import Image3 from "../Images/features-03.jpg";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <Slider />

      <ProductsList />

      <div class="stats" id="stats">
        <h2>Our Awesome Stats</h2>
        <div class="container">
          <div class="box">
            <FontAwesomeIcon icon={faUser} className="fs-2" />
            <span class="number">300</span>
            <span class="text">Clients</span>
          </div>
          <div class="box">
            <FontAwesomeIcon icon={faCode} className="fs-2" />
            <span class="number">400</span>
            <span class="text">Products</span>
          </div>
          <div class="box">
            <FontAwesomeIcon icon={faEarthAfrica} className="fs-2" />
            <span class="number">12</span>
            <span class="text">Countries</span>
          </div>
          <div class="box">
            <FontAwesomeIcon icon={faDollarSign} className="fs-2" />
            <span class="number">500K</span>
            <span class="text">Money</span>
          </div>
        </div>
      </div>

      <div class="features" id="features">
        <h2>Our Features</h2>
        <div class="container">
          <div class="box quality">
            <div class="img-holder">
              <img decoding="async" src={Image1} alt="" />
            </div>
            <h2>Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
          </div>
          <div class="box time">
            <div class="img-holder">
              <img decoding="async" src={Image2} alt="" />
            </div>
            <h2>Time</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
          </div>
          <div class="box passion">
            <div class="img-holder">
              <img decoding="async" src={Image3} alt="" />
            </div>
            <h2>Passion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
