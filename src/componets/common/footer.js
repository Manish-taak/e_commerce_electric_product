import React, { useEffect } from 'react'
import sub from '../img/newsletter (1) 2.png'
import ad from '../img/Adornment End.png'
import fo_img from '../img/footer.png'
import location from '../img/Map marker.png'
import apple from '../img/Apple logo.png'
import message from '../img/Message.png'
import google from '../img/Google Play logo.png'
import { Link } from 'react-router-dom'

const Footer = (props) => {

  return (
    <>

      <section className="  subscribe-section container">
        <div className="subscribe">
          <div className="subscribe-left">
            <img style={{ maxWidth: "60px", height: "60px" }} src={sub} alt="er" />
            <h2 style={{ color: "black" }} className='common-h-34' >Subscribe to our newsletter</h2>
            <p className='common-p-16-gray' >Get 10% discount</p>
          </div>
          <div className="subscribe-right">
            <input className='subscribe-input' type="text" placeholder='Enter your Email' />
            <img src={ad} alt="asa" />
          </div>
        </div>
      </section>
      <footer>
        <section className='footer_mini container ' >
          <div className="footer-left  ">
            <div className="footer-left-part-1">
              <h2 style={{ color: "#FFF" }} className='common-p-20' >About</h2>
              <img src={fo_img} alt="fo_img" />
            </div>
            <div className="footer-left-part-2">
              <p className='common-p-16-gray' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit sem tortor dui mattis vulputate fermentum. Turpis nisi, nulla interdum luctus.</p>
            </div>
            <div className="footer-left-part-3">
              <div className="part-3-footer-child-1">
                <img src={location} alt="location" />
                <p>debra.holt@example.com</p>
              </div>
              <div className="part-3-footer-child-2 line-x">

              </div>
              <div className="part-3-footer-child-3">
                <img src={message} alt="message" />
                <p>6391 Elgin St. Celina, Delaware 10299</p>
              </div>
            </div>
            <div className="footer-left-part-4">
              <p>Download the app</p>
              <div className='footer-btn-apple-google' >
                <button className='btn-apple'>
                  <img src={apple} alt="apple" />
                  <div className="inner-btn-work">
                    <p className='text-footer-btn' >Download On the</p>
                    <h2 className='btn-apple-message' >App Store</h2>
                  </div>
                </button>
                <button className='btn-apple'>
                  <img src={google} alt="apple" />
                  <div className="inner-btn-work">
                    <p className='text-footer-btn'>Get It ON</p>
                    <h2 className='btn-apple-message' >Google Play</h2>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-rigth-part-1">
              <div className="footer-right-part-1-child-1">
                <div className="footer-link-heading">
                  <h2 style={{ color: "#FFF" }} className='common-20-1' >Customer support</h2>
                </div>
                <div className="footer-link">
                  <ul >
                    <li className=' bootom-hover common-16-2' > <a href="#">Contact us</a> </li>
                    <li className=' bootom-hover common-16-2' > <a href="#">Help center</a> </li>
                    <li className=' bootom-hover common-16-2' > <a href="#">Exchanges</a> </li>
                    <li className=' bootom-hover common-16-2' > <a href="#">Credit cards</a> </li>
                    <li className=' bootom-hover  common-16-2' > <a href="#"> Debit cards</a>  </li>
                  </ul>
                </div>
              </div>
              <div className="footer-right-part-1-child-1">
                <div className="footer-link-heading">
                  <h2 style={{ color: "#FFF" }} className='common-20-1' >Contact with us</h2>
                </div>
                <div className="footer-link">
                  <ul >
                    <li className=' bootom-hover common-16-2' > <a href="#">Facebook</a> </li>
                    <li className=' bootom-hover common-16-2' > <a target="_blank" href="https://instagram.com/parkash_1535/">Instagram</a> </li>
                    <li className=' bootom-hover common-16-2' > <a href="#">Twitter</a> </li>
                    <li className=' bootom-hover common-16-2' > <a href="#">Linkedin</a> </li>
                    <li className=' bootom-hover common-16-2' > <a href="#">Debit cards</a>   </li>
                  </ul>
                </div>
              </div>
              <div className="footer-right-part-1-child-1-custom">
                <div className="footer-link-heading">
                  <h2 style={{ color: "#FFF" }} className='common-20-1' >About</h2>
                </div>
                <div className="footer-link-custom">
                  <ul >
                    <div className='custom-class-about-footer' >
                      <li className='  bootom-hover common-16-2 ' > <a href="#">Careers</a> </li>
                      <li className=' bootom-hover common-16-2' > <a href="#">About us</a> </li>
                    </div>
                    <div className='custom-class-about-footer' >
                      <li className=' bootom-hover common-16-2' > <a href="#">Blogs</a> </li>
                      <li className=' bootom-hover common-16-2' > <a href="#">News</a> </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-rigth-part-2"></div>
            <div className="footer-rigth-part-3">
              <p>© 2021. All rights reserved</p>
              <div className="help-center">
                <Link style={{ color: "#FFF" }} to="/helpcenter" >
                  <p>Help Center</p>
                </Link>
                <p> Terms of Service</p>
              </div>
            </div>
            <div className="footer-rigth-part-4  "></div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer