import React from 'react'
import banner_img from '../img/banner-img.png'
import fire from '../img/Fire.png'
import cart_banner from '../img/ShoppingCartOutlined.png'
const Banner = () => {
  return (
    <>
      <div className="banner container ">
        <div className="banner-left-img">
          <img src={banner_img} alt="banner_img" />
        </div>
        <div className="banner-left-text">
          <div>
            <h1 className='common-h-60' >Products for your need start shopping now</h1>
          </div>
          <div className='border-X' ></div>
          <div className='banner-pruches common-p-20 ' >
            <p>For first pruches </p>
            <img className='fire-img' src={fire} alt="eroro" />
            <span className='  color-yellow-text' >get 30% off</span>
          </div>
          <div>
            <button className='btn-banner  btn-common ' >
              <img src={cart_banner} alt="cart_banner " />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner