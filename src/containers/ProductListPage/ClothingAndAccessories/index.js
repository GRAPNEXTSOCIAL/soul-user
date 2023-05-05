

/** @format */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategory, getProducts } from '../../actions';
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug, getAllProduct } from "../../../actions";
// import Card from "../../../components/UI/Card";
// import { BiRupee } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { Carousel, Container, Row, Col, Pagination } from "react-bootstrap";
// import banner1 from "../../../images/logo/banner-3.jpg";
// import banner2 from "../../../images/logo/women-banner.jpg";
// import banner3 from "../../../images/kidBanner.jpeg";
// import item1 from "../../../images/3.png";
// import kid1 from "../../../assets/dress image/blazer.jpg";
// import kid2 from "../../../assets/dress image/boy shirt.jfif";
// import kid3 from "../../../assets/dress image/black jeans.jpg";
// import kid4 from "../../../assets/dress image/belt.jpeg";
// import kid5 from "../../../assets/dress image/bag2.jpg";
// import kid6 from "../../../assets/dress image/bottle.jpg";
// import midBanner from "../../../images/1.png";
import "../../../components/filter/filter.css";
import Filter from "../../../components/filter/Filter";
import FilterSortingBar from "../../../components/filter/FilterSortingBar";
import FilterComp from "../../../components/filter/FilterComp";
import FilterBar from "../../../components/filter/FilterBar";
import FilterMobileUi from "../../../components/filter/FilterMobileUi";
import useStateDimensions from "../../../components/utility/useWindowDimensions";

import "./style.css";

import SortingMobile from '../../../components/filter/SortingMobile';


// import Pagination from '../pagination/Pagination';
import NewArrivalCarousel from './Carousel';

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const { width, height } = useStateDimensions();

  const dispatch = useDispatch();

  useEffect(() => {
    const { slug } = props.match.params;

    dispatch(getProductsBySlug(slug));
  }, []);

  console.log("this slug");
  console.log(props.match.params.slug);

  const filter = ["price"];
  const [filterState, setFilter] = useState("");
  const [filterRevealState, setFilterReveal] = useState(false);

  const filter1 = ["size"];
  const [filterState1, setFilter1] = useState("");
  const [filterRevealState1, setFilterReveal1] = useState(false);

  const filter0 = ["color"];
  const [filterState0, setFilter0] = useState("");
  const [filterRevealState0, setFilterReveal0] = useState(false);

  let filterReveal = "";
  if (!filterRevealState) {
    filterReveal = "none";
  }

  let filterReveal1 = "";
  if (!filterRevealState1) {
    filterReveal1 = "none";
  }
  let filterReveal0 = "";
  if (!filterRevealState0) {
    filterReveal0 = "none";
  }
  return (
    <div  style={{marginTop:"-50px"}}>
      {/* <Carousel className="carousel slide carousel-inner">
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Second slide" />
        </Carousel.Item>
      </Carousel> */}
      <FilterSortingBar
        setFilterReveal={setFilterReveal}    
        setFilterReveal1={setFilterReveal1}
        setFilterReveal0={setFilterReveal0}
    
        filterRevealState={filterRevealState}
        filterRevealState1={filterRevealState1}
        filterRevealState0={filterRevealState0}
      />
      <div className="ProductsContainer relative rr1">
        {width < 800 && (
      
            <FilterMobileUi>
              products={product}
              filter={filter}
              filter={filter1}
              filter={filter0}
              filterState={filterState}
              filterState={filterState1}
              filterState={filterState0}
              setFilter={setFilter}
              setFilter={setFilter1}
              setFilter={setFilter0}
            </FilterMobileUi>
         
        )}
        <div className="overflow-hidden relative">
          <div
            className={
              width < 800
                ? "filterSection relative flex-column"
                : "filterSection relative"
            }>
            {width > 800 && (
                <div style={{width: "25%"}}>
                <FilterBar
                  filter={filter}
                  filterState={filterState}
                  setFilter={setFilter}
                />
                <Filter
                  products={product}
                  filter={filter}
                  filterState={filterState}
                  setFilter={setFilter}
                />

                <FilterBar
                  filter={filter1}
                  filterState={filterState1}
                  setFilter={setFilter1}
                />
                <Filter
                  products={product}
                  filter={filter1}
                  filterState={filterState1}
                  setFilter={setFilter1}
                />

                <FilterBar
                  filter={filter0}
                  filterState={filterState0}
                  setFilter={setFilter0}
                />
                <Filter
                  products={product}
                  filter={filter0}
                  filterState={filterState0}
                  setFilter={setFilter0}
                />
              </div>
            )}
            <div
              className={
                width > 800
                  ? "productSection my-0"
                  : "productSection my-0 w-full"
              }>
              <div
                className={
                  width > 800
                    ? "undefinedFlex1 overflow-y-auto"
                    : width > 600
                    ? "undefinedFlex1 overflow-y-auto grid gap-3 grid-cols-3 justify-items-center items-center"
                    : "undefinedFlex1 overflow-y-auto grid gap-3 grid-cols-2 justify-items-center items-center"
                }>
                  {/* product */}
                <FilterComp product={product} />
              </div>
            </div>
          </div>
        </div>

        {/* <SortingMobile /> */}
      </div>
    
    </div>
  );
};

export default ClothingAndAccessories;
