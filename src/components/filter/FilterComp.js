/** @format */

import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { generatePublicUrl } from "../../urlConfig";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import useStateDimensions from "../utility/useWindowDimensions";

const FilterComp = () => {
  const { width, height } = useStateDimensions();
  const product = useSelector((state) => state.product);

  return product.filteredItems.map((e) => {
    const size = e.size;
    return (
      <div className="caContainer" style={{ width: width < 800 && "175px" }}>
        <div>
          <Link className="caImgContainer" to={`/${e.slug}/${e._id}/p`}>
            <img
              variant="top"
              src={generatePublicUrl(e.productPictures[0])}
              alt={e.slug}
            />
          </Link>
        </div>
        <div className={width > 800 ? "caProductText" : "caProductText h-15"}>
          <div>
            <Card.Title className="caProductTitle">{e.name}</Card.Title>
          </div>
          <div>
            <div className="" style={{display:"flex",justifyContent:"space-around",gap:"20px"}}>
            <span style={{display:"flex",justifyContent:"space-between"}}>
            <BiRupee />MRP
            <span className="mrpclass" >{e.mprice}</span>
            </span>
              <span style={{display:"flex",justifyContent:"space-between"}}>
              <BiRupee />
              <span style={{fontSize:"18px",marginTop:"-5px",fontWeight:"500"}}>{e.price}</span>
              </span>
            </div>
          {/*  <div className="caProductColor">
              {e.color.map((color) => {
                return (
                  <div
                    className="caProductColorContent"
                    style={{
                      background: color,
                    }}></div>
                );
              })}
            </div>
            <hr />
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-around" }}>
              {Object.keys(size).map((name) => {
                return size[name] ? <div>{name.split("_")[0]}</div> : "";
              })}
            </div>*/}
          </div>
        </div>
      </div>
    );
  });
};

export default FilterComp;
