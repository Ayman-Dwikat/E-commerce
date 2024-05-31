import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  const handleNavigationClick = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          E-commerce
        </Link>

        {/* Button For Responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Unorder List + Search Form */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Unorder List */}
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {/* List Item */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {/* List Item */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home Links
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => handleNavigationClick("products")}>
                    Products
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleNavigationClick("features")}>
                    Features
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleNavigationClick("stats")}>
                    Our Awesome Stats
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleNavigationClick("footer")}>
                    Footer
                  </button>
                </li>
              </ul>
            </li>

            {/* List Item */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            {/* List Item */}
            <li className="nav-item">
              <Link className="nav-link" to="/discount">
                Request A Discount
              </Link>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
