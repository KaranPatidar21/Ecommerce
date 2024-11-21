import React from "react";
import style from "../Styles/Footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
<FaLinkedin />;
function Footer() {
  return (
    <section className={style.footerSection}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>K-SHOP</h3>
            <div className={style.smallLine}></div>
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <div className={style.socialIcon}>
              <div className="iconIcon">
                <FaInstagramSquare />
              </div>
              <div className="iconIcon">
                <FaFacebookSquare />
              </div>
              <div className="iconIcon">
                <FaTwitterSquare />
              </div>
              <div className="iconIcon">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className={`col-sm-2 ${style.portionFoot}`}>
            <h4>QUICK LINKS</h4>
            <div className={style.smallLine}></div>
            <div className={style.footerOptions}>
              <h6>
                <a href="">Home</a>
              </h6>
              <h6>
                <a href="">Shop</a>
              </h6>
              <h6>
                <a href="">Cart</a>
              </h6>
              <h6>
                <a href="">Contact</a>
              </h6>
            </div>
          </div>
          <div className={`col-sm-2 ${style.portionFoot}`}>
            <h4>SHOPING</h4>
            <div className={style.smallLine}></div>
            <div className={style.footerOptions}>
              <h6>
                <a href="">Jwellery</a>
              </h6>
              <h6>
                <a href="">Male cloths</a>
              </h6>
              <h6>
                <a href="">Electronics</a>
              </h6>
              <h6>
                <a href="">Women Cloths</a>
              </h6>
            </div>
          </div>
          <div className={`col-sm-4 ${style.portionFoot}`}>
            <h4>NEWLETTER</h4>
            <div className={style.smallLine}></div>
            <p>
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <input
              type="text"
              placeholder="your email..."
              className={`form-control ${style.footerInputField}`}
            />
            {/* <div className={style.mailIcon}>
              <IoIosMail />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
