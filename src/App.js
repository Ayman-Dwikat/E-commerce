import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Discount from "./components/Discount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import ProductDetails from "./components/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route
          path="discount"
          element={
            <>
              <Discount />
              <Footer />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="product/:productId"
          element={
            <>
              <ScrollToTop />
              <ProductDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
