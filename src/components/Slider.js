import Image1 from "../Images/image-2.jpeg";
import Image2 from "../Images/image-3.jpg";
import Image3 from "../Images/image-1.jpg";
import "../styles/Slider.css";

function Slider() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      {/* Buttons  */}
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Images */}
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Image1} class="d-block w-100 height-300" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Our Most Popular Product</h5>
            <p>Discover the features and benefits of our best-selling item.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Image2} class="d-block w-100 height-300" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Special Offer: 50% Off</h5>
            <p>Don't miss out on our limited-time offer on selected items.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Image3} class="d-block w-100 height-300" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Experience Seamless Shopping</h5>
            <p>Enjoy a smooth and user-friendly shopping experience with us.</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
