import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../Styles/Navigation.module.css";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
function Navigation() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  const getCategoriesName = async () => {
    let catNames = await axios.get("https://fakestoreapi.com/products/categories");
    setCategories(catNames.data);
  };
  useEffect(() => {
    getCategoriesName();
  }, []);
  const categoriesData = (Cname)=>{
    navigate(`/categories/${Cname}`);
  }
  return (
    <div className={style.bgNav}>
      <nav className={` navbar navbar-expand-sm pt-3 fixed-top pb-3 navbar-dark ${style.navBar}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            K-SHOP
          </a>
          <Link to="/cart" className={style.backgroundCartLeftIcon}>
            <FaCartPlus className={style.cartIconLeft} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className={` navbar-nav ${style.myNavItems}`}>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" 
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="categoriesDropdown"
                >
                  {categories.map((items, index) => {
                    return (
                      <li key={index}>
                        <a className="dropdown-item" href="#" onClick={()=>categoriesData(items)}>
                          {items.toUpperCase()}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a className="dropdown-item" href="/shop">
                      ALL PRODUCTS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/cart"
                  className={`nav-link ${style.backgroundCartIcon}`}
                >
                  <FaCartPlus className={style.cartIconright} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
