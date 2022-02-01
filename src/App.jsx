import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Finn from "./pages/Finn";
import Bestilling from "./pages/Bestilling";
import Frakt from "./pages/Frakt";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Router> 
      <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product/:id" element={<ProductPage/>}/>
          <Route path="/products/:category" element={<ProductsPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route exact path="/signin"  element={<SignInPage/>} />
          <Route exact path="/signup"  element={<SignUpPage/>} />
          <Route exact path="/findus"  element={<Finn/>} />
          <Route exact path="/bestilling"  element={<Bestilling/>} />
          <Route exact path="/frakt"  element={<Frakt/>} />
          <Route exact path="/aboutUs"  element={<AboutUs/>} />
        </Routes>
    </Router>
  );
}

export default App;