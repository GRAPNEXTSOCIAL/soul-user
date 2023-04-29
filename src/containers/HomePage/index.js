import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getProducts } from "../../actions";
// import Layout from '../../components/Layout';
// import NavBar from '../../components/NavBar';
// import Headers from '../../components/Headers';
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/272020405_464812595296041_7295958903263722819_n.jpg";
import banner2 from "../../images/259160982_1585068151841372_3646147803564310890_n.webp";
import banner3 from "../../images/259701936_580766106539358_619099137585829604_n.webp";
import b1 from "../../images/logo/women-banner.jpg";
import b2 from "../../images/logo/banner-3.jpg";
import b3 from "../../images/DSC07619.JPG";
import b4 from "../../images/2.png";

import c0 from "../../images/banner-3.jpg";
import c1 from "../../images/banner-3.jpg";
import c2 from "../../images/banner-3.jpg";
import c3 from "../../images/banner-3.jpg";

import feature1 from "../../images/feature-1.png";
import feature2 from "../../images/feature-2.png";
import feature3 from "../../images/feature-3.png";
import feature4 from "../../images/feature-4.png";

import wimg1 from "../../images/wimg1.jpeg"
import wimg2 from "../../images/wimg2.jpeg"
import wimg3 from "../../images/wimg3_2.jpeg"
import models from "../../images/models.jpeg"

// import midBanner from '../../images/DSC07615.jpg';
import { generatePublicUrl } from "../../urlConfig";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

import tshirt from "../../images/242562540_592468095440901_5600156168981203813_n.jpg";
import sunglass from "../../images/239463368_135792245388282_7647288448685897450_n.jpg";
import bag from "../../images/234749943_509222953498055_5116095933961909045_n.jpg";

// import pant from '../../assets/dress image/pant.jpg';
// import top from '../../assets/dress image/t shirt.jpg';
// import shirt from '../../assets/dress image/formal blue shirt.jpeg';
// import shoe from '../../assets/dress image/mens-denim-shirt.jpg';
// import item17 from '../../assets/dress image/gray sweater.jpg';
// import Slider from '../../components/Slider';
// import Slider1 from '../../components/Slider/Slider1';
// import Slider2 from '../../components/Slider/Slider2';

import NewArrival from "../../components/NewArrival/Carousel";
import { Link } from "react-router-dom";
import NewArrivalCarousel from "./Carousel";
import ArrivalCarousel from "./New Carousel";
import Pagi from "../pagination/pagination";
// import CategoryS from '../../components/CategorySection';
// import NewArrivals from '../../components/Slider/newarrivals';
import NewArrivalCarousel1 from "../ProductListPage/ClothingAndAccessories/Carousel";
/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);

  console.log(category, ">>cate");
  const dispatch = useDispatch();
  console.log(product, ">>product");

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name}{" "}
              <img
                style={{ width: "80px", height: "80px" }}
                src={category.categoryImage}
                alt="alt"
              />
            </a>
          ) : (
            <span>{category.name} </span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

  return (
    <>
      <Carousel variant="dark" style={{ marginTop: "-120px" }}>
        <Carousel.Item>
          <img
            style={{ position: "center", display: "cover" }}
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*<div className="headding-all">
<h2>Top <span style={{"color" : "#660066"}}>Category</span></h2>
</div>
<br/>
<br/>
<div className='container'>
  <CategoryS />
</div>*/}



      <div className="headding-all">
        <h2>
          Top <span style={{ color: "#660066" }}>Catelogs</span>
        </h2>
      </div>
      {/* <div className="homeCategoryMain">

  {
    category.categories.map(cat => 
      
   
        <div className="homeCategory">
         <div>
                <Link to={`/${cat.name}`}>
                  <img src={cat.categoryImage} alt={cat.categoryImage} />
                </Link>
                <h5>{cat.name}</h5>
              
         </div>
      </div>
  
      
      )
  }
</div> */}

      <section class="about_area">
        <div class="container">
          <div class="row">
            <div class="col-md-6 fstcol">
              <br />
              <a href="#">
                <img src={wimg1}  alt=""/>
              </a>
            </div>
            <div class="col-md-6 sndcol">
              <a href="#">
                <img src={wimg2} />
                <h2> - Our Top Lehenga Models</h2>
              </a>
              <br/><br/><br/>
              <a href="#">
              <h2 >Top Models - </h2>
                <img src={models} href="#" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="headding-all">
        <h2>
          New <span style={{ color: "#660066" }}>Arrivals1st</span>
        </h2>
        <br />
        <br />
        <NewArrival />
      </div>
      <br />
      <br />

      <section>
      <div className="mid-banner">
        <div className="midText">
          <h3>50% OFF</h3>
          <p
            className="midText-p"
            style={{
              color: "#f00",
              "font-size": "20px",
              "font-weight": "bold",
            }}
          >
            All Men, Women, Kids Collection
          </p>
          <br />
          <br />
          <button style={{ backgroundColor: "#660066" }}>Shop Now</button>
        </div>
      </div>
    </section>

      <div className="headding-all">
        <h2>
          New{" "}
          <span style={{ color: "#660066" }}>Arrrivals</span>
        </h2>
        <br />
        <br />
        <NewArrival />
      </div>
      <br />
      <br />

      {/*<div className="headding-all">
<h2>Best <span style={{"color" : "#660066"}}>Gardening</span></h2>
<br/><br/>
<Slider />
</div>
<br/><br/>


<div className="headding-all">
<h2>Gardening<span style={{"color" : "#660066"}}>Accessories</span></h2>
</div>
<br/><br/>
 <Slider2 />
 <br/><br/>

 <div className="headding-all">
<h2>New <span style={{"color" : "#660066"}}>Slider</span></h2>
<br/><br/>
<Slider1 />
</div>
<br/><br/>
*/}

      <section>
        <div className="mid-banner">
          <div className="midText">
            <h3>50% OFF</h3>
            <p className="midText-p">All Men, Women, Kids Collection</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>

      {/*<div className="headding-all">
<h2>New <span style={{"color" : "#660066"}}>Arrivals</span></h2>

</div>
<br/><br /> 
<NewArrivals />*/}


      <div className="headding-all">
        <h2>
          New <span style={{ color: "#660066" }}>Arrivals</span>
        </h2>
        <br />
        <br />
        <NewArrival />
      </div>
      <br />
      <br />

      {/* <Footer /> */}
      <div className="headding-all">
        <h2>
          New <span style={{ color: "#660066" }}>Arrivals</span>
        </h2>
        <br />
        <br />
        <ArrivalCarousel />
      </div>
      <br />
      <br />

      
<section className="about_us" id="aboutussection">
<div className="row w-100">
  <div className="col-lg-6">
    <div className="heading-all">
      <h2>About<span style={{color:"#660066"}}>&nbsp;&nbsp;Us!</span></h2>
    </div>
    <div className="row">
      <p>Soul By Indian caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</p>
    </div>
  </div>
  <div className="img_section col-lg-6 justify-content-center">
    <img src={wimg3}/>
  </div>
</div>
</section>

    {/*  <section class="service_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="box ">
                <center>
                  <div class="img-box" style={{ width: "80px" }}>
                    <img src={feature1} alt="" />
                  </div>
                </center>
                <div class="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box ">
                <center>
                  <div class="img-box" style={{ width: "80px" }}>
                    <img src={feature2} alt="" />
                  </div>
                </center>
                <div class="detail-box">
                  <h5>Free Shiping</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box ">
                <center>
                  <div
                    class="img-box"
                    style={{ width: "80px", alignItems: "center" }}
                  >
                    <img src={feature3} alt="" />
                  </div>
                </center>
                <div class="detail-box">
                  <h5>Best Quality</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box ">
                <center>
                  <div
                    class="img-box"
                    style={{ width: "80px", alignItems: "center" }}
                  >
                    <img src={feature4} alt="" />
                  </div>
                </center>
                <div class="detail-box">
                  <h5>24x7 Customer support</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </>
  );
};

export default HomePage;
