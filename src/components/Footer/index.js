import React from 'react'
import './footer.css';
import { Instagram, Mail, Facebook, Twitter, YouTube } from '@material-ui/icons';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/logo/logo2.png'
/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return(
        // <div className="main-footer">
        //     <div className="instaBtn">
        //         <button><Instagram className="instaIcon" /> <span>shop from instagram</span> </button>
        //     </div>
        //      <div className="subscription">
        //         <form action="" className="newsletter col-12">
        //             <h2>Subscribe Our Newsletter &amp; Join US</h2>
        //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        //             <div className="newsletter-box">
        //                 <span className="mailIcon"><Mail /></span>
        //                 <input className="emailbox" type="email" placeholder="Enter your email id" />
        //                 <button type="button" name="button">Subscribe</button>
        //             </div>
        //         </form>
        //     </div>
             
    
<div className="footer-container">
  
<footer className="footer">

  
  <ul className="footer__nav">
    <li className="nav__item">
      <img src={logo} />

      <ul className="nav__ul">
        <li>
          <a href="#">Contact Us</a>
        </li>

        <li>
          <a href="aboutussection">About Us</a>
        </li>
        <li>
          <a href="#">Privecy Policy</a>
        </li>
        <li>
          <a href="#">Shipping and Refund Policy</a>
        </li>
 
      </ul>
    </li>
  
  </ul>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Women's Wear</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Gown</a>
        </li>

        <li>
          <a href="#">Salwar Kameeze</a>
        </li>
            
        <li>
          <a href="#">Suit</a>
        </li>
     
      </ul>
    </li>
  
  </ul>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Men's Wear</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Gown</a>
        </li>

        <li>
          <a href="#">Kurti</a>
        </li>

      </ul>
    </li>
  
  </ul>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Most Popular</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Gown</a>
        </li>

        <li>
          <a href="#">Salwar Kameeze</a>
        </li>
            
        <li>
          <a href="#">Kurti</a>
        </li>
        <li>
          <a href="#">Suit</a>
        </li>
       
      </ul>
    </li>
  
  </ul>
  
  <div className="col-12" style={{textAlign: "center"}}>
                    <p className="foot">
                        &copy;{new Date().getFullYear()} <span style={{color:"green"}}>Grapsnextsocial Pvt. Ltd.</span> All rights reserved.
                    </p>
                </div>
</footer>
           </div>

            
    
        // </div>
    )
 }

export default Footer