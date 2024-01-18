import React, { Fragment } from 'react'
import banner_img from '../img/banner-img.png'
import fire from '../img/Fire.png'
import cart_banner from '../img/ShoppingCartOutlined.png'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <Fragment>
      <div className="banner container ">
        <div className="banner-left-img">
          <img src={banner_img} alt="banner_img" />
        </div>
        <div className="banner-left-text">
          <div>
              <h1 style={{ textTransform: "unset" }} className='banner-shopping-start'>Products for your need start shopping now</h1>
          </div>
          <div className='border-X' ></div>
          <div className='banner-pruches common-p-20'>
            <p id='manish' className='common-20-1' >For first pruches </p>
            <img className='fire-img' src={fire} alt="eroro" />
            <span className='  color-yellow-text' >get 30% off</span>
          </div>
            <div className='banner-btn'>
              <Link to="/products" >
                <button className='btn-banner  btn-common ' >
                  <img src={cart_banner} alt="cart_banner " />
                  Shop Now
                </button>
              </Link>
            </div>
        </div>
      </div>
    </ Fragment >
  )
}

export default Banner