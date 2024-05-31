import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt as solidStarHalf,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon key={i} icon={solidStar} />
          ))}
        {hasHalfStar && <FontAwesomeIcon icon={solidStarHalf} />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon key={fullStars + i + 1} icon={regularStar} />
          ))}
      </>
    );
  };

  if (!product || !product.rating) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div class="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="details">
      <div className="container">
        <section className="py-5">
          <div className="row gx-5">
            {/* Product Image */}
            <aside className="col-lg-6">
              <div className="border rounded-4 p-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href={product.image}
                >
                  <img
                    style={{
                      width: "50vh",
                      height: "60vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={product.image}
                    alt="Product"
                  />
                </a>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp"
                    alt="Product thumbnail"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp"
                    alt="Product thumbnail"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp"
                    alt="Product thumbnail"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp"
                    alt="Product thumbnail"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
                    alt="Product thumbnail"
                  />
                </a>
              </div>
            </aside>

            {/* Product Details */}
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{product.title}</h4>

                {/* orders In stock */}
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    {renderStars(product.rating.rate)}
                    <span className="ms-1">{product.rating.rate}</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                    {`${product.rating.count} `}
                    orders
                  </span>
                  <span className="text-success ms-2"> In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">${product.price}</span>
                  <span className="text-muted"> /per box</span>
                </div>

                <p>{product.description}</p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{product.category}</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-2"
                      style={{ width: "170px" }}
                    >
                      <input
                        type="number"
                        min="1"
                        className="form-control text-center border border-secondary"
                        placeholder="1"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0 me-2">
                  Buy now
                </a>
                <a href="#" className="btn btn-primary shadow-0 me-2">
                  <FontAwesomeIcon icon={faCartShopping} /> Add to cart
                </a>
                <a
                  href="#"
                  className="btn btn-light border-secondary icon-hover px-3"
                >
                  <FontAwesomeIcon icon={faHeart} /> Save
                </a>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
