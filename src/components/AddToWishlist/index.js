import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToWishlist, getProductDetailsById } from "../../actions";
import { AiOutlineHeart } from "react-icons/ai";
import { NormalButton } from "../../components/MaterialUi";
import { getAllProduct } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";




const HeartWishlist =(props) => {
    const dispatch = useDispatch();
    const [selectSize ] = useState("");
    const [selectColor ] = useState("");
    const [ setRevealButton] = useState(false);
    const product = useSelector((state) => state.product);
    // const auth = useSelector((state) => state.auth);
    const { productId } = props.match.params;
    // const [error,setError]= useState(false)
    // const [submit,setSubmit]= useState(false)
    // const [errorType,setErrorType]= useState('')
    useEffect(() => {
      setRevealButton(selectSize.length && selectColor.length);
      dispatch(getAllProduct());
    }, [selectSize, selectColor]);

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



    return(
        <div className="fillheart"
            onClick={() => {
                const { _id, name, price } = product.productDetails;
                const img = product.productDetails.productPictures[0];
            
                dispatch(
                addToWishlist({
                    _id,
                    name,
                    price,
                    img,
                })
                );
                props.history.push(`/wishlist`);
            }}>
            </div>
    )

}

export default HeartWishlist