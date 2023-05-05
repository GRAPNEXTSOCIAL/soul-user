import React from "react";
// import item1 from '../../images/3.png';
// import item2 from '../../images/2.png';
// import item3 from '../../images/3.png';
// import item4 from '../../images/logo/bag2.jpg';
// import item5 from '../../images/2.png';
// import item6 from '../../images/3.png';
// import item7 from '../../images/logo/bag2.jpg';
// import item8 from '../../images/2.png';
// import item9 from '../../images/3.png';
// import item10 from '../../images/logo/bag2.jpg';
import { NormalButton } from "../../components/MaterialUi";
import { AiFillHeart, AiFillShopping } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";
import {addToWishlist, getProductDetailsById } from "../../actions";
import { useHistory } from "react-router-dom";

import HeartWishlist from "../AddToWishlist";

// const NewArrival = () => {

const NewArrival = (props) => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const randNumber = [];

  if (product.products.length) {
    while (randNumber.length != 10) {
      const number = Math.floor(Math.random() * 10);

      if (randNumber.indexOf(number) === -1) {
        randNumber.push(number);
      }
    }
  }

  console.log("number length");
  console.log(randNumber);

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");
  const [img7, setImg7] = useState("");
  const [img8, setImg8] = useState("");
  const [img9, setImg9] = useState("");
  const [img10, setImg10] = useState("");
  const [img11, setImg11] = useState("");

  useEffect(() => {
    setImg1(product.products[randNumber[0]]);
    setImg2(product.products[randNumber[1]]);
    setImg3(product.products[randNumber[2]]);
    setImg4(product.products[randNumber[3]]);
    setImg5(product.products[randNumber[4]]);
    setImg6(product.products[randNumber[5]]);
    setImg7(product.products[randNumber[6]]);
    setImg8(product.products[randNumber[7]]);
    setImg9(product.products[randNumber[8]]);
    setImg10(product.products[randNumber[9]]);
    setImg11(product.products[randNumber[10]]);
  }, [product.products[0]]);

  console.log("product slider");
  console.log(product);

  return (
    <>
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
        <div>
         
          <div className="fillheart"
          onClick={() => {
              const _id = img1._id;
              const  name = img1.name;
              const  price = img1.price;
              const img = img1.productPictures[0];
          
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
          </div> <Link
            className="caImgContainer"
            to={`/${img1 ? img1.slug : ""}/${img1 ? img1._id : ""}/p`}
          >
            <img
              src={img1 ? generatePublicUrl(img1.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img1 ? img1.name : ""}</h3>
            {/* <p className="price">under &#8377;399</p> */}
            <p>₹{img1 ? img1.price : ""}</p>
            <Link
              className="buybtn"
              to={`/${img1 ? img1.slug : ""}/${img1 ? img1._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>

        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img2._id;
              const  name = img2.name;
              const  price = img2.price;
              const img = img2.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img2 ? img2.slug : ""}/${img2 ? img2._id : ""}/p`}
          >
            <img
              src={img2 ? generatePublicUrl(img2.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img2 ? img2.name : ""}</h3>
            <p>₹{img2 ? img2.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img2 ? img2.slug : ""}/${img2 ? img2._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>

        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img3._id;
              const  name = img3.name;
              const  price = img3.price;
              const img = img3.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img3 ? img3.slug : ""}/${img3 ? img3._id : ""}/p`}
          >
            <img
              src={img3 ? generatePublicUrl(img3.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img3 ? img3.name : ""}</h3>
            <p>₹{img3 ? img3.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img3 ? img3.slug : ""}/${img3 ? img3._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img4._id;
              const  name = img4.name;
              const  price = img4.price;
              const img = img4.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img4 ? img4.slug : ""}/${img4 ? img4._id : ""}/p`}
          >
            <img
              src={img4 ? generatePublicUrl(img4.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img4 ? img4.name : ""}</h3>
            <p>₹{img4 ? img4.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img4 ? img4.slug : ""}/${img4 ? img4._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img5._id;
              const  name = img5.name;
              const  price = img5.price;
              const img = img5.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img5 ? img5.slug : ""}/${img5 ? img5._id : ""}/p`}
          >
            <img
              src={img5 ? generatePublicUrl(img5.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img5 ? img5.name : ""}</h3>
            <p>₹{img5 ? img5.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img5 ? img5.slug : ""}/${img5 ? img5._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img6._id;
              const  name = img6.name;
              const  price = img6.price;
              const img = img6.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img6 ? img6.slug : ""}/${img6 ? img6._id : ""}/p`}
          >
            <img
              src={img6 ? generatePublicUrl(img6.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img6 ? img6.name : ""}</h3>
            <p>₹{img6 ? img6.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img6 ? img6.slug : ""}/${img6 ? img6._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img7._id;
              const  name = img7.name;
              const  price = img7.price;
              const img = img7.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img7 ? img7.slug : ""}/${img7 ? img7._id : ""}/p`}
          >
            <img
              src={img7 ? generatePublicUrl(img7.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img7 ? img7.name : ""}</h3>
            <p>₹{img7 ? img7.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img7 ? img7.slug : ""}/${img7 ? img7._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img8._id;
              const  name = img8.name;
              const  price = img8.price;
              const img = img8.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img8 ? img8.slug : ""}/${img8 ? img8._id : ""}/p`}
          >
            <img
              src={img8 ? generatePublicUrl(img8.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img8 ? img8.name : ""}</h3>
            <p>₹{img8 ? img8.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img8 ? img8.slug : ""}/${img8 ? img8._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img9._id;
              const  name = img9.name;
              const  price = img9.price;
              const img = img9.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img9 ? img9.slug : ""}/${img9 ? img9._id : ""}/p`}
          >
            <img
              src={img9 ? generatePublicUrl(img9.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img9 ? img9.name : ""}</h3>
            <p>₹{img9 ? img9.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img9 ? img9.slug : ""}/${img9 ? img9._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div>
        <div className="fillheart"
          onClick={() => {
              const _id = img10._id;
              const  name = img10.name;
              const  price = img10.price;
              const img = img10.productPictures[0];
          
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
          <Link
            className="caImgContainer"
            to={`/${img10 ? img10.slug : ""}/${img10 ? img10._id : ""}/p`}
          >
            <img
              src={img10 ? generatePublicUrl(img10.productPictures[0]) : ""}
              alt="First slide"
            />
          </Link>
          <div className="carousel-img-content">
            <h3>{img10 ? img10.name : ""}</h3>
            <p>₹{img10 ? img10.price : ""}</p>

            <Link
              className="buybtn"
              to={`/${img10 ? img10.slug : ""}/${img10 ? img10._id : ""}/p`}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </Carousel>
    </>
  );
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slideToSlide: 2,
  },
};

export default NewArrival;
