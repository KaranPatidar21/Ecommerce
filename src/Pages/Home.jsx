import React, { useEffect } from "react";
import style from "../Styles/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Features/ApiDataSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from '@mui/material/CardActions';
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.apiData.arr);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const viewDetails = (detailDataId) => {
    navigate(`/viewDetails/${detailDataId}`);
  };
  return (
    <>
      <section className={style.homeSection}>
        <div className="container">
          {/* banner */}
          <div className={style.bannerContent}>
            <span>SPRING / SUMMER COLLECTION 2017</span>
            <h1>
              Get up to 30% Off <br />
              New Arrivals
            </h1>
            <a className="btn btn-dark" href="/shop">
              {" "}
              Shop Now
            </a>
          </div>
        </div>
      </section>
      {/* Some Products */}
      <section>
        <div className="container">
          <h3 className={style.topHeading}>OUR PRODUCTS</h3>
          <div className={style.line}></div>
          <div className={`row ${style.totalItems}`}>
            {products.slice(0, 8).map((items, index) => {
              return (
                <div className="col-sm-4">
                  <Card key={index} className={style.cardbox}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      className={`img-fluid ${style.cardImage}`}
                      image={items.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {items.title.slice(0, 20)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                       {items.description.slice(1, 130)}
                      </Typography>
                    <div className={style.cardButtons}>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => viewDetails(items.id)}
                        >
                          View Details
                        </button>
                        <button className="btn btn-success btn-sm ">
                          Add to Cart
                        </button>
                      </div>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
            <a href="/shop" className={`col-sm-4 ${style.loadMoreCard}`}>
              View More Products
            </a>
          </div>
        </div>
      </section>
      {/* second banner */}
      <section>
        <div className={style.extraBigBox}>
          <div className={style.extraContent}>
            <h5>SUMMER COLLECTION</h5>
            <p>
              Fall - Winter <br /> Collections 2030
            </p>
            <span>
              A Specialist labour creating luxury essentials. Ethically Crafted{" "}
              <br /> with an unwavering commitment to exceptional quality.
            </span>
            <br />
            <br />
            <a className="btn btn-warning" href="/shop">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </section>
      {/* third boxes */}
      <section>
        <div className="container">
          <h3 className={style.topHeading}>WHY WORK WITH US!</h3>
          <div className={style.line}></div>
          <div className={`myrow ${style.homeBoxes}`}>
            <div className={` ${style.homeBox}`}>
              <div className={style.boxIcon}>
                <FaTruck />
              </div>
              <h3>Fast Delivery</h3>
              <p>variations of passages of Lorem Ipsum available</p>
            </div>
            <div className={` ${style.homeBox}`}>
              <div className={style.boxIcon}>
                <FaFreeCodeCamp />
              </div>
              <h3>Free Shiping</h3>
              <p>variations of passages of Lorem Ipsum available</p>
            </div>
            <div className={` ${style.homeBox}`}>
              <div className={style.boxIcon}>
                <MdVerified />
              </div>
              <h3>Best Quality</h3>
              <p>variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
      </section>
      {/* fourth banner */}
      <section className={style.boyGirl}>
        <div className="container">
          <div className={style.thirdBannerOneBg}>
            <div className={style.thirdBannerOneBgContent}>
              <h5>
                New Women's Clothing <br /> Summer Collection 2019
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className={style.thirdBnanerContent}>
                <h5>
                  New Men's Clothing Summer <br /> Collection 2019
                </h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${style.thirdBannerSecondBg}`}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
