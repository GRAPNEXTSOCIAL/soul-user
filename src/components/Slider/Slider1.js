/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";
import { Link } from "react-router-dom";
import {addToWishlist } from "../../actions";
import { useHistory } from "react-router-dom";
const Slider1 = () => {
  const product = useSelector((state) => state.product);
  const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  product.filteredItems.map((item) =>{
    console.log(item.category);

  })
  console.log("product slider322222222222");
  
  return (
    <Carousel
    swipeable={true}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true}
    infinite={false}
    containerClass="carousel-container2"
    itemClass="carousel2-item"
  >

        {
          product.products.map((item) =>
          item.category == "628f103935dd2e0c90950718" ?

          <div>
          <div className="fillheart"
          onClick={() => {
              const _id = item._id;
              const  name = item.name;
              const  price = item.price;
              const img = item.productPictures[0];
          
              dispatch(
              addToWishlist({
                  _id,
                  name,
                  price,
                  img,
              })
              );
              history.push(`/wishlist`);
          }}>
          </div> 
          <Link className="caImgContainer" to={`/${item ? item.slug:""}/${item ? item._id:""}/p`}> <img
            
            src={item ? generatePublicUrl(item.productPictures[0]) : ""}
            alt="First slide"
            /></Link>
          <div className="carousel-img-content">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
        </div>
            :null
            )
        }
      </Carousel>
    )

}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024},
    items: 4, 
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464},
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0},
    items: 2,
    slideToSlide: 2
  },
};

export default Slider1;
