import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from "../Styles/home.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
function Categories() {
  const navigate = useNavigate()
  const categoryName = useParams();
  const [categoriesDataSet, setCategoriesDataSet] = useState([])
  const getCategoryData = async ()=>{
    let categoriesAll = await axios.get(`https://fakestoreapi.com/products/category/${categoryName.categoryName}`)
    setCategoriesDataSet(categoriesAll.data)
  }
  useEffect(()=>{
    getCategoryData()
  })
  const viewDetails = (detailDataId)=>{
    navigate(`/viewDetails/${detailDataId}`)
  }
  return (
    <div  style={{ marginTop: '100px' }}>
 <div className="container">
          <h3 className={style.topHeading}>{categoryName.categoryName.toUpperCase()}</h3>
          <div className={style.line}></div>
          <div className={`row ${style.totalItems}`}>
            {categoriesDataSet.map((items, index) => {
              return (
                <div className="col-sm-4" key={index}>
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
          </div>
        </div>
    </div>
  )
}

export default Categories
