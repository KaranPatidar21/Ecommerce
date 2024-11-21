import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import { fetchData } from '../Features/ApiDataSlice';
import style from "../Styles/home.module.css"
import { useNavigate } from 'react-router-dom';
function Shop() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.apiData.arr);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const viewDetails = (detailDataId)=>{
    navigate(`/viewDetails/${detailDataId}`)
  }
  return (
    <div>
      <section className={style.topMargin}>
        <div className="container">
          <h3 className={style.topHeading}>OUR PRODUCTS</h3>
          <div className={style.line}></div>
          <div className={`row ${style.totalItems}`}>
            {products.map((items, index) => {
              return (
                <div className="col-sm-4">
                  <Card className={style.cardbox} key={index}>
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
      </section>
    </div>
  )
}

export default Shop
