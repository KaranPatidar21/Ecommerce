import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../Styles/view.module.css"
function ViewDetails() {
  const viewId = useParams();
  // console.log(viewId.viewID)
  const [viewDetailsData, setviewDetailsData] = useState([]);
  const getViewData = async () => {
    let viewData = await axios.get(
      `https://fakestoreapi.com/products/${viewId.viewID}`
    );
    setviewDetailsData(viewData.data);
  };
  useEffect(() => {
    getViewData();
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div className={`border border-5 mb-4 p-5 ${style.viewBOX}`}>
          <div>
            <img src={viewDetailsData.image} className={` img-fluid ${style.viewImg}`} alt="" />
          </div>
          <div className={style.viewContentBox}>
            <h1>{viewDetailsData.title}</h1>
            <h3>{viewDetailsData.category}</h3>
            <h6 className="text-success">Price : {viewDetailsData.price}$</h6>
            <p>{viewDetailsData.description}</p>
            <button className="btn btn-dark">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
