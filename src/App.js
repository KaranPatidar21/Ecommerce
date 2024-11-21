import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Categories from "./Pages/Categories";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Store";
import ViewDetails from "./Pages/ViewDetails";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories/:categoryName" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/viewDetails/:viewID" element={<ViewDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
