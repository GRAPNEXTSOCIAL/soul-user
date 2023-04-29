import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../actions";

import { MaterialButton, MaterialInput } from "../../components/MaterialUi";

/**
 * @author
 * @function AddressForm
 **/

 const AddressForm = (props) => {
  const { initialData } = props;
  const [addressObj, setAddressObj] = useState({
    name:initialData ? initialData.name : "",
    pinCode: initialData ? initialData.pinCode : "",
    mobileNumber: initialData ? initialData.mobileNumber : "",
    locality: initialData ? initialData.locality : "",
    address: initialData ? initialData.address : "",
    cityDistrictTown: initialData ? initialData.cityDistrictTown : "",
    state: initialData ? initialData.state : "",
    landmark: initialData ? initialData.landmark : "",
    alternatePhone: initialData ? initialData.alternatePhone : "",
    addressType: initialData ? initialData.addressType : ""
  })
  // const [name, setName] = useState(initialData ? initialData.name : "");
  // const [mobileNumber, setMobileNumber] = useState(
    
  // );
  // const [pinCode, setPinCode] = useState(
  //   initialData ? initialData.pinCode : ""
  // );
  // const [locality, setLocality] = useState(
  //   initialData ? initialData.locality : ""
  // );
  // const [address, setAddress] = useState(
  //   initialData ? initialData.address : ""
  // );
  // const [cityDistrictTown, setCityDistrictTown] = useState(
  //   initialData ? initialData.cityDistrictTown : ""
  // );
  // const [state, setState] = useState(initialData ? initialData.state : "");
  // const [landmark, setLandmark] = useState(
  //   initialData ? initialData.landmark : ""
  // );
  // const [alternatePhone, setAlternatePhone] = useState(
  //   initialData ? initialData.alternatePhone : ""
  // );
  // const [addressType, setAddressType] = useState(
  //   initialData ? initialData.addressType : ""
  // );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [showError, setShowError] = useState(false);
  const [id, setId] = useState(initialData ? initialData._id : "");

  const inputContainer = {
    width: "100%",
    marginRight: 10,
  };
  const changeHandler = (e) => {
    setShowError(false);
    setAddressObj((prev)=>({...prev, [e.target.name]: e.target.value }))
  }

  const onAddressSubmit = (e) => {
    let valid = true;
    const keys = Object.keys(addressObj);
      for(let index=0; index<keys.length; index++){
      const key = keys[index];
      if(key!='landmark' && key!='alternatePhone')
      {
        if(!addressObj[key].length)
        {
          valid=false;
          setShowError(true);
          break;
        }
      }
    }
    if(valid)
    {
          setShowError(false);
      
      console.log(addressObj);
  
      const payload = {
        address: {
          ...addressObj
        }
      }
      
      if(id){
        payload.address._id = id;
      }
      console.log(payload);
  
      dispatch(addAddress(payload));
      setSubmitFlag(true);
    }
};


useEffect(() => {
  console.log("addressCount", user.address);
  if (submitFlag) {
    console.log("where are we", user);
    let _address = {};
    if (id) {
      _address = {
        _id: id,
        ...addressObj
      };
    } else {
      _address = user.address.slice(user.address.length - 1)[0];
    }

    props.onSubmitForm(_address);
  }
}, [user.address]);


const renderAddressForm = () =>
{
  return (
    <>
        {showError && <div style={{ backgroundColor: 'red', color: 'white', width:'70%', borderRadius:'5px' }}>Please fill out all the fields which are not marked optional</div>}
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Name"
              name="name"
              value={addressObj.name}
              onChange={(e) => {setAddressObj({ ...addressObj, name: e.target.value }); setShowError(false)}}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="10-digit mobile number"
              name="mobileNumber"
              value={addressObj.mobileNumber}
              onChange={(e) => {setAddressObj({ ...addressObj, mobileNumber: e.target.value }); setShowError(false)}}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              name="pinCode"
              label="Pincode"
              value={addressObj.pinCode}
              onChange={(e) => {setAddressObj({ ...addressObj, pinCode: e.target.value }); setShowError(false)}}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              name="mobileNumber"
              label="locality"
              value={addressObj.locality}
              onChange={(e) => {setAddressObj({ ...addressObj, locality: e.target.value }); setShowError(false)}}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Address"
              name="address"
              value={addressObj.address}
              onChange={(e) => {setAddressObj({ ...addressObj, address: e.target.value }); setShowError(false)}}
            />
          </div>
        </div>

        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="City/District/Town"
              name="cityDistrictTown"
              value={addressObj.cityDistrictTown}
              onChange={(e) => {setAddressObj({ ...addressObj, cityDistrictTown: e.target.value }); setShowError(false)}}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="State"
              name="state"
              value={addressObj.state}
              onChange={(e) =>{setAddressObj({ ...addressObj, state: e.target.value }); setShowError(false)}}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Landmark (Optional)"
              name="landmark"
              value={addressObj.landmark}
              onChange={(e) => {setAddressObj({ ...addressObj, landmark: e.target.value }); setShowError(false)}}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="Alternate Phone (Optional)"
              name="alternatePhone"
              value={addressObj.alternatePhone}
              onChange={(e) => {setAddressObj({ ...addressObj, alternatePhone: e.target.value }); setShowError(false)}}
            />
          </div>
        </div>
        <div>
          <label>Address Type</label>
          <div className="flexRow">
            <div>
              <input
                type="radio"
                onClick={() => setAddressObj({ ...addressObj, addressType: "home" })}
                name="addressType"
                value="home"
              />
              <span>Home</span>
            </div>
            <div>
              <input
                type="radio"
                onClick={() => setAddressObj({ ...addressObj, addressType: "work" })}
                name="addressType"
                value="work"
              />
              <span>Work</span>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <MaterialButton
            title="SAVE AND DELIVER HERE"
            onClick={onAddressSubmit}
            style={{
              width: "250px",
              margin: "20px 0",
            }}
          />
        </div>
    </>
  );
}



 if(props.witoutLayout){
   return <div>{renderAddressForm()}</div>
 }

  return (
    <div className="checkoutStep" style={{ background: "#f5faff" }}>
      <div className={`checkoutHeader`}>
        <div>
          <span className="stepNumber">+</span>
          <span className="stepTitle">{"ADD NEW ADDRESS"}</span>
        </div>
      </div>
      <div
        style={{
          padding: "0 60px",
          paddingBottom: "20px",
          boxSizing: "border-box",
        }}
      >
        {renderAddressForm()}

      </div>
    </div>
  );
}
export default AddressForm;