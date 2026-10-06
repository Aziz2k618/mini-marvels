import "./App.css";

import {Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;