import "../styles/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">$ {product.price}</p>
        <Link className="btn btn-primary" to={`/product/${product.id}`}>
          More Details
        </Link>
      </div>
      <FontAwesomeIcon className="icon" icon={faComment} />
      <FontAwesomeIcon className="icon" icon={faHeart} />
      <FontAwesomeIcon className="icon" icon={faCartShopping} />
    </div>
  );
}

export default Product;
