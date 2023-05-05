/** @format */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import logo from "../../images/logo/logo2.png";
import Login from "../Login";
// import GoogleLogin from "react-google-login";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  // DropdownMenu,
} from "../MaterialUi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getCartItems,
  getWishlistItems,
  login,
  signout,
  signup as _signup,
} from "../../actions";
// import { red } from "@material-ui/core/colors";
// import { generatePublicUrl } from "../../urlConfig";
// import zIndex from "@material-ui/core/styles/zIndex";
// import MenuHeader from "../MenuHeader";
// import Cart from "../UI/Cart";

// import { BiUserCircle } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.6,
    backgroundColor: "white",
    height: "100px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  // search: {
  //   position: "relative",
  //   borderRadius: "5px",
  //   backgroundColor: "#f5f5f6",
  //   paddingLeft: "60px",
  //   borderRadius: "5px",
  //   border: "3px solid #f5f5f6",
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100px",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(4),
  //     width: "500px",
  //   },
  // },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  search: {
    display: "none",
    border: "2px solid #696e79",
    marginLeft: "520px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      color: "crimson",
    },
  },

  sectionMobile: {
    marginTop: "53px",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const [loginModal, setLoginModal] = useState(false);
  const [profileC, setProfileC] = useState(true);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const category = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const auth = useSelector((state) => state.auth);
  const wish = useSelector((state) => state.wishlist);
  const product = useSelector((state) => state.product);


  // zxsxs
  // const searchBox = document.querySelector(".search-box");
  //     const searchBtn = document.querySelector(".search-icon");
  //     const cancelBtn = document.querySelector(".cancel-icon");
  //     const searchInput = document.querySelector("input");
  //     const searchData = document.querySelector(".search-data");
  // searchBtn.onclick =()=>{
  //   searchBox.classList.add("active");
  //   searchBtn.classList.add("active");
  //   searchInput.classList.add("active");
  //   cancelBtn.classList.add("active");
  //   searchInput.focus();
  //   if(searchInput.value != ""){
  //     var values = searchInput.value;
  //     searchData.classList.remove("active");
  //     searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  //   }else{
  //     searchData.textContent = "";
  //   }
  // }
  // cancelBtn.onClick =()=>{
  //   searchBox.classList.remove("active");
  //   searchBtn.classList.remove("active");
  //   searchInput.classList.remove("active");
  //   cancelBtn.classList.remove("active");
  //   searchData.classList.toggle("active");
  //   searchInput.value = "";
  // }
  // lmkomm

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
      setAnchorEl(null);
    } else {
      dispatch(login({ email, password }));
      setAnchorEl(null);
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
      dispatch(getWishlistItems());

      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

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
              // style={{fontFamily:"serif",fontSize:"30px",fontWeight:"bold"}}
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}{" "}
            </a>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    console.log(myCategories);
    return myCategories;
  };

  // console.log();
  // alert(myCategories);

  const MobileRenderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <MenuItem onClick={handleMenuClose} key={category.name}>
          {category.parentId ? (
            <Link
              to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}{" "}
            </Link>
          ) : (
            <span style={{ fontFamily: "serif", fontSize: "18px", fontWeight: "bold" }}>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </MenuItem>
      );
    }
    return myCategories;
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = "primary-search-account-menu";
  const renderLoggedMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <div className="loggiedinProfile" style={{ "height": "80px", "width": "100px", display: "flex", marginBottom: "20px", flexDirection: "column" }}>
        <h5>Hello</h5>
        <div>
          <p style={{ fontFamily: "serif", fontWeight: "bold", display: "flex" }}>{auth.user.fullName} </p>
          <p style={{ fontFamily: "serif", fontWeight: "bold" }}>{auth.user.email} </p>
        </div>
      </div>
      <hr />

      <ul className="mobileViewMenu">
        {category.categories.length > 0
          ? MobileRenderCategories(category.categories)
          : null}
      </ul>

      <MenuItem onClick={handleMenuClose}>
        <Link style={{ fontFamily: "serif", fontSize: "18px", color: "gray", fontWeight: "700" }} to="/account/orders">Orders</Link>{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ fontFamily: "serif", fontSize: "18px", color: "gray", fontWeight: "700" }} to="/cart">Cart</Link>{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ fontFamily: "serif", fontSize: "18px", color: "gray", fontWeight: "700" }} to="/wishlist">Wishlist</Link>{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ fontFamily: "serif", fontSize: "18px", color: "gray", fontWeight: "700" }} to="/contact">Contact Us</Link>{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link style={{ fontFamily: "serif", fontSize: "18px", color: "gray", fontWeight: "700" }} to="/portfolio">About Us</Link>{" "}
      </MenuItem>

      {/* <MenuItem onClick={handleMenuClose}><Link  to="/portfolio">Portfolio</Link> </MenuItem> */}
      <button className="logoutButton" onClick={() => logout()}>
        logout
      </button>
    </Menu>
  );
  const renderNonLoggedMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <div className="loggiedinProfile">
        <h5>Welcome</h5>
        <p>To access account and manage orders</p>
        <button
          id="login-modal"
          onClick={() => {
            setSignup(false);
            setLoginModal(true);
            setAnchorEl(false);
          }}>
          Login
        </button>
      </div>
      <hr />
      <MenuItem onClick={handleMenuClose}>
        {/* New Customer ?{" "} */}
        <span>
          <p
            onClick={() => {
              setLoginModal(true);
              setSignup(true);
              setAnchorEl(false);
            }}>
            New Customer ? Signup
          </p>
        </span>
      </MenuItem>
      <ul className="mobileViewMenu">
        {category.categories.length > 0
          ? MobileRenderCategories(category.categories)
          : null}
        <li style={{ lineHeight: "48px" }}>Portfolio</li>
      </ul>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteBorderOutlined />
          </Badge>
        </IconButton>
        {/* <p>Profile</p> */}
      </MenuItem>
      <MenuItem>
        <p>Add To Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <FaRegUser />
        </IconButton>
        <p>FavoriteIcon</p>
      </MenuItem>
    </Menu>
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [searchReveal, setSearchReveal] = useState(true);

  return (

    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black", zIndex: "30", marginTop: "30px", height: "100px" }}>
        <Toolbar>

          {/* Mobile view and nav button */}
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleProfileMenuOpen}>
              <MenuIcon />
            </IconButton>
          </div>

          <div className="logosection col-md-12 place-content-center">
            <Link to="/">
              <div className="headding-all">
                <img src={logo} />
              </div>
            </Link>
          </div>



          <div className="renderCat ms-auto" style={{ position: "absolute", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
            <div className="menuHeader1" >
              <ul>
                <Link to="/">HOME</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/contactus" >ContactUs</Link>
                {category.categories.length > 0
                  ? renderCategories(category.categories)
                  : null}

              </ul>
            </div>
          </div>



          {/* //////////////////////////////////////////////////////////////////////////// */}

          <>
            <div id="sectionDesktop" className={classes.sectionDesktop}>
              <div className={classes.search}>
                {/* <div className="mx-3"> */}
                <div className={classes.searchIcon}>
                  {/* <SearchIcon /> */}
                </div>
                {/* </div> */}
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => {
                    setSearchReveal(true);
                  }}
                  onBlur={() => {
                    setSearchReveal(true);
                  }}
                />
                {searchReveal && (
                  <div
                    style={{
                      position: "absolute",
                      top: "90%",
                      left: "10px",
                      width: "100%",
                      backgroundColor: "#f1f2f6",
                      display: {},
                    }}>
                    <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                      {product.products
                        .filter((val) => {
                          if (searchTerm === "") {
                            return null;
                          } else if (
                            val.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return val.name;
                          }
                        })
                        .map((e) => (
                          <li key={e.id} className="hover:bg-gray-200"
                          ><a
                            className="pl-3 py-1"
                            href={`/${e.slug}/${e._id}/p`}
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}>
                              {e.name}
                            </a>
                            <div>
                              {/* <Link className="caImgContainer" 
                            to = {`/${img1.slug}/${img1._id}/p`}>
                              {img1.name}
                              </Link> */}
                            </div>
                          </li>
                        ))}
                    </ul>


                  </div>
                )}
              </div>
            </div>
          </>
          <div className={classes.grow} />

          <div className={classes.sectionMobile} style={{ border: "1px solid gray", marginLeft: "-80px" }}>

            {/*<div className={classes.searchIcon}>
                <SearchIcon />
                            </div>*/}
            <InputBase
              placeholder="Search…"
              classes={{

                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                setSearchReveal(true);
              }}
              onBlur={() => {
                setSearchReveal(true);
              }}
            />
            {searchReveal && (
              <div
                style={{

                  position: "absolute",
                  top: "90%",
                  left: "10px",
                  width: "100%",
                  backgroundColor: "#f1f2f6",
                  display: {},
                }}>
                <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                  {product.products
                    .filter((val) => {
                      if (searchTerm === "") {
                        return null;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val.name;
                      }
                    })
                    .map((e) => (
                      <li key={e.id} className="hover:bg-gray-200"
                      ><a
                        className="pl-3 py-1"
                        href={`/${e.slug}/${e._id}/p`}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                        }}>
                          {e.name}
                        </a>
                        <div>
                          {/* <Link className="caImgContainer" 
                            to = {`/${img1.slug}/${img1._id}/p`}>
                              {img1.name}
                              </Link> */}
                        </div>
                      </li>
                    ))}
                </ul>


              </div>
            )}
            {/* </div> */}
          </div>
          {/* search ex */}
          {/* <div className="search-box">
          <input type="text" placeholder="Type to search.." />
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="cancel-icon">
                    <i className="fas fa-times"></i>
            </div>
            <div className="search-data">
            </div>
          </div> */}

          <div className="col-md-4 iconBar">
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <FaRegUser />
              </IconButton>

              <IconButton aria-label="show 3 added items" color="inherit">
                <Link to="/cart">
                  {/* <Cart count= /> */}
                  <Badge
                    badgeContent={Object.keys(cart.cartItems).length}
                    color="secondary"
                    showZero>
                    <ShoppingCartOutlined style={{ color: "black" }} />
                  </Badge>
                </Link>
              </IconButton>

              <IconButton aria-label="show 2 favorite items" color="inherit">
                <NavLink to="/wishlist">
                  <Badge
                    badgeContent={Object.keys(wish.wishlistItems).length}
                    color="secondary"
                    showZero>
                    <FavoriteBorderOutlined style={{ color: "black" }} />
                  </Badge>
                </NavLink>
              </IconButton>
            </div>
          </div>




        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {auth.authenticate ? renderLoggedMenu : renderNonLoggedMenu}
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row" style={{ "backgroundColor": "#cb8364" }}>
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <div className="rightspace">
              <span className="loginProfileDesign">
                <img src={logo} alt={``} />
              </span>

              <h1>Welcome to Soul By <span style={{ color: "greens" }}>Indian</span></h1>
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 18 }}>{auth.error}</div>
                )}
                {signup && (
                  <>
                    <MaterialInput
                      type="text"
                      label="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <MaterialInput
                      type="text"
                      label="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </>
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  style={{
                    display: "flex",
                    margin: "1rem 0 0 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <MaterialButton
                    title={signup ? "Register" : "Login"}
                    textColor="#ffffff"
                    style={{
                      width: "180px",
                    }}
                    onClick={signup ? userSignup : userLogin}
                  />
                  <p style={{ textAlign: "center", margin: "0" }}>OR</p>
                  <Login
                    style={{
                      width: "180px",
                    }}
                    buttonText={
                      signup ? "Register with Google" : "Google Login"
                    }
                  />
                </div>
                {!signup && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "1rem 0 0 0",
                    }}>
                    <a
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        color: "#cb8364",
                      }}
                      href="/forgot-password">
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
