import React from 'react'
import right from '../img/Arrowlineright.png'
import { Link } from 'react-router-dom'
import Swipercodecart from '../cardtypes/swipercodecart'
import shareicon from '../img/shareicon.svg'
import color1 from '../img/Color1.svg'
import color2 from '../img/color2.svg'
import color3 from '../img/color3.svg'
import star from '../img/StarFilled.png'
const Cartdetails = () => {
  return (
    <>
      <div className="cartdetalis container ">
        <div className="cartdetalis-heading">
          <h2 className='common-34-1' >Apple watch </h2>
          <div className="cartlink">
            <li><Link className='common-16-2'  to="/" >Home</Link></li>
            <img src={right} alt="right" />
            <li> <Link className='common-16-2' to="/products" >Products</Link> </li>
            <img src={right} alt="right" />
            <li><Link  className='common-16-2' to="/" >Products details </Link> </li>
          </div>
        </div>
        <div className="products-swiper-other-type">
          <Swipercodecart/>
          <div className="products-details-type">
            <div className="product-name">
              <p className='product-price-and-name common-24-1 ' >Apple watch SE
                <img src={shareicon} alt="shareicon" />
              </p>
              <p className='common-16-2'   > <span className='common-16-4' >Price: $600.00</span>  - Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
            </div>
            <div className="product-color">
              <p className='common-16-2' >Color</p>
              <div className="colors-products">
                <img src={color1} alt="colors" />
                <img src={color2} alt="colors" />
                <img src={color3} alt="colors" />
                <img src={color1} alt="colors" />

              </div>
            </div>
            <div className="product-size">
              <p className='common-16-2' >Size</p>
              <div className='size-mm' >
                <div className="size-1">
                  <p className='common-20-1' >41mm</p>
                  <p className='common-14-2'>Fits 130-200mm wrists.</p>
                </div>
                <div className="size-2">
                  <p className='common-20-1' >41mm</p>
                  <p className='common-14-2'>Fits 130-200mm wrists.</p>
                </div>
              </div>
            </div>
            <div className="product-style">
              <p className='common-16-2' >Style name</p>
              <div className=" slectsradio-gps ">
                <div className='selects-radio' >
                  <input type="radio" />
                  <p className='common-16-1'>GPS</p>
                </div>
                <div className='selects-radio' >
                  <input type="radio" />
                  <p className='common-16-1' >GPS + Cellular</p>
                </div>
              </div>
            </div>
            <div className="product-size  product-div">
              <div className="product-price">
                <div className="price-text">
                  <h2 className='common-34-1' >$320.00</h2>
                  <p className='common-14-2' >Inclusive of all taxes</p>
                </div>
                <div className="ratting-number">
                  <p>4.5</p>
                  <div className="starratting">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
              </div>
              <div className="readmore">
              <p className='common-16-2' >10-day replacement only</p>
              <p className='common-16-3' >Read more</p>
              </div>
            </div>
            <div className="product-btns">
              <button className=' cart-btn btn-customer' > <Link className='btn-customer-2' to="/addtocart" >ADD TO CART</Link> </button>
              <button className='btn-common-main btn-buy-now-cart '  >BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cartdetails