/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, getProductDetailsById } from "../../actions";
// import Layout from "../../components/Layout";
import { NormalButton } from "../../components/MaterialUi";
import { generatePublicUrl } from "../../urlConfig";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  IoIosArrowForward,
  IoIosStar,
  // IoMdCart
} from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillHeart, AiFillShopping } from "react-icons/ai";
import "./style.css";
import NewArrival from '../../components/NewArrival/Carousel';
import NavBar from '../../components/NavBar';
import Button from 'react-bootstrap/Button';
import axios from "../../helpers/axios";

// import {addToCart} from '../../actions';
/**
 * @author
 * @function ProductDetailsPage
 **/

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [zipcode, setZipCode] = useState('');
  const [revealButton, setRevealButton] = useState(false);
  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  const { productId, productSlug } = props.match.params;
  const [error, setError] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [errorType, setErrorType] = useState('')
  useEffect(() => {
    setRevealButton(selectSize.length && selectColor.length);
  }, [selectSize, selectColor]);
  // useEffect(() => {
  //   setRevealButton(pincode.length);
  // }, [pincode]);

  useEffect(() => {
    const payload = {
      params: {
        productId,
      },
    };

    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  const size = product.productDetails.size;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (zipcode.length == 0) {
      setError(true);
      setErrorType('pattern');
    }
    else {

      const res = await axios.get('/pincode');
      const { Pincodes } = res.data;
      setSubmit(true);
      let codeExist = false;
      Pincodes.forEach(pin => {
        if (pin.pincode == zipcode)
          codeExist = true;
      });
      if (codeExist) {
        setError(false);
        setErrorType('');
      }
      else {
        setError(true);
        setErrorType('Not Eligible');
      }
    }
  }
  const changeHandler = (input) => {
    setZipCode(input);
    setSubmit(false);

    if (/^\d+$/.test(input)) {
      setError(false);
      setErrorType('');
    }
    else {
      setError(true);
      setErrorType('pattern');
    }
  }


  return (
    <>

      <div className="productDescriptionContainer">
        {/* home > category > subCategory > productName */}
        <div className="breed">
          <ul>
            <li>
              <a href="/">Home</a>
              <IoIosArrowForward />
            </li>
            <li>
              <a href="/men">Men</a>
              <IoIosArrowForward />
            </li>
            <li>
              <a href="/">{product.productDetails.name}</a>
            </li>
          </ul>
        </div>
        <br />

        <div className="productContainer">
          <div className="flexRowPr">
            <div className="col-md-12">
              <Carousel
                className="prnewCar"
                showArrows={true}
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showStatus={false}
                transitionTime={1000}
                swipeable={true}
                thumbWidth={50}
                showIndicators={false}
                dynamicHeight={500}>
                {product.productDetails.productPictures.map((pod, index) => (
                  <img
                    src={generatePublicUrl(pod
                    )}
                    alt={`${pod}`}
                  />
                ))}

                {/* <p className="legend">Legend 1</p> */}
              </Carousel>
            </div>
          </div>
          <div className="productDetAdj">
            <div className="col-md-12">
              {/* product description */}
              <div className="productDetails">
                <h3 className="productTitle" style={{ "font-weight": "bold", "text-transform": "uppercase" }}>{product.productDetails.name}</h3>
                <div>
                  <span className="ratingCount">
                    4.3 <IoIosStar />
                  </span>
                  <span className="ratingNumbersReviews">
                    72,234 Ratings & 8,140 Reviews
                  </span>
                </div>
                <div className="extraOffer">
                  Extra <BiRupee />
                  4500 off{" "}
                </div>
                <div className="flexRow priceContainer">
                  <span className="price">
                    <BiRupee />
                    {product.productDetails.price}
                  </span>
                  <span className="discount" style={{ margin: "0 10px" }}>
                    22% off
                  </span>
                  {/* <span>i</span> */}
                </div>
                <div>
                  <p>{product.productDetails.description}</p>
                  <div className="pSize flex-center">
                    <p>Color{" : "}</p>
                    <div className="btnGroup">
                      {/* <button className="sizeBtn" id="s">S</button>
                  <button className="sizeBtn" id="m">M</button>
                  <button className="sizeBtn" id="l">L</button>
                  <button className="sizeBtn" id="xl">XL</button>
                   <button className="sizeBtn" id="xxl">XXL</button> */}
                      {product.productDetails.color.map((color) => (
                        <div>
                          <input
                            style={{ display: "none" }}
                            type="radio"
                            name="color-radio"
                            className="radio-input"
                            value={color}
                            id={`radio-${color}`}
                          />
                          <label
                            className="color-radio"
                            for={`radio-${color}`}
                            onClick={() => {
                              setSelectColor(color);
                            }}>{`${color} `}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pSize flex-center">
                    <p >Size{" : "}</p>
                    <div className="btnGroup">
                      {/* <button className="sizeBtn" id="s">S</button>
                  <button className="sizeBtn" id="m">M</button>
                  <button className="sizeBtn" id="l">L</button>
                  <button className="sizeBtn" id="xl">XL</button>
                   <button className="sizeBtn" id="xxl">XXL</button> */}
                      {Object.keys(size).map((name) => {
                        return size[name] ? (
                          <div>
                            <input
                              style={{ display: "none" }}
                              type="radio"
                              name="size-radio"
                              className="radio-input"
                              value={name}
                              id={`radio-${name}`}
                            />
                            <label
                              className="size-radio"
                              for={`radio-${name}`}
                              onClick={() => {
                                setSelectSize(name.split("_")[0]);
                              }}>{`${name.split("_")[0]} `}</label>
                          </div>
                        ) : (
                          ""
                        );
                      })}
                    </div>
                  </div>

                  {/* <div className="zip">
 

              <input type="text" placeholder="zipcode" ></input>
              <div className="prButtonContainer">
              <Button 
              variant="info"
              >check
              </Button>
              </div>
      
              </div> */}

                  <form onSubmit={handleSubmit}>
                    {/* {object.keys(pincode).map(() => ())} */}
                    <div className="pSize flex-center">
                      <p>ZipCode{" : "}</p>
                      <div className="text">
                        <input
                          placeholder="Enter zipcode"
                          maxLength={6}
                          onChange={(e) => changeHandler(e.target.value)} style={{ "border": "1px solid black" }} />
                      </div>

                      <button className='btn-zip'>
                        Check eligibility
                      </button>
                    </div>

                    {error && errorType === 'Not Eligible' ?
                      <label style={{ color: "red" }}>Currently out of stock for this area.</label> : ""}
                    {error && errorType === 'pattern' ?
                      <label style={{ color: "red" }}>Please enter a valid zipcode.</label> : ""}

                    {submit && !error ?
                      <label style={{ color: "green" }}>We are delivering to this area.</label> : ""}
                  </form>


                  <br />
                  <br />
                  <div className="prButtonContainer">
                    <NormalButton
                      title="ADD TO CART"
                      bgColor="darkorange"
                      textColor="#ffffff"
                      font-weight="bolder"

                      icon={<AiFillShopping />}
                      style={revealButton ? {} : { pointerEvents: "none", opacity: "0.6" }}
                      onClick={() => {
                        const { _id, name, price } = product.productDetails;
                        const img = product.productDetails.productPictures[0];
                        const size = selectSize;
                        const color = selectColor;

                        dispatch(
                          addToCart({
                            _id,
                            name,
                            price,
                            img,
                            size,
                            color,
                          })
                        );
                        props.history.push(`/cart`);
                      }}
                    />

                    <NormalButton
                      title="Wishlist"
                      bgColor="orange"
                      textColor="#fff"
                      font-weight="bolder"
                      border="1px solid #cb8364"
                      icon={<AiFillHeart />}

                      onClick={() => {
                        const { _id, name, price } = product.productDetails;
                        const img = product.productDetails.productPictures[0];

                        dispatch(
                          addToWishlist({
                            _id,
                            name,
                            price,
                            img,
                            // size,
                            // color,
                          })
                        );
                        props.history.push(`/wishlist`);
                      }}
                    />
                  </div>
                  <h4>Delivery Option</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="headding-all" style={{marginTop:"-120px"}}>
        <h2>Similar Products</h2>
      </div>
      <br />
      <br />
      <br />

      <NewArrival />

    </>
  );
};


export default ProductDetailsPage;
