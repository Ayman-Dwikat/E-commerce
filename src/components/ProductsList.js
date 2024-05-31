import { useState, useEffect } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="products" id="products">
      <h2> Our Products </h2>
      <div className="container">
        <div
          className="btn-group mb-4 d-flex flex-column flex-md-row w-50"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-primary me-md-2 mb-2"
            onClick={() => getProducts()}
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                type="button"
                key={cat}
                className="btn btn-outline-primary me-md-2 mb-2"
                onClick={() => getProductInCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-xl-3  col-lg-4 col-sm-6" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
