import React from 'react'
import { Link } from 'react-router-dom'
import right from '../img/Arrowlineright.png'
// import addtocartimage from '../img/adddtocart2.png'
// import plus from '../img/plus.png'
// import minus from '../img/minus.png'
// import gray from '../img/Ellipsegray.png'
import Cardaddtocart from '../cardtypes/cardaddtocart'
const Addtocart = () => {
  return (
    <>
      <div className=" container addtocart">
        <div className="cartdetalis-heading">
          <h2 className='common-34-1' >Cart Products </h2>
          <div className="cartlink">
            <li><Link className='common-16-2' to="/" >Home</Link></li>
            <img src={right} alt="right" />
            <li> <Link className='common-16-2' to="/products" >Cart</Link> </li>
          </div>
        </div>
        <Cardaddtocart cartcard={true} />
        <div className="line-x"></div>
        <div className="card-option">
          <div className="emicard">
            <div className='EMIAvailable'>
              <p className='common-20-1' >EMI Available</p>
              <p className='common-16-2' >No Cost EMI offers. Id aliquam felis a egestas mi diam <span className='common-16-3' >Learn more</span></p>
            </div>
            <div className="line-x"></div>
            <div className="btn-caedit-debit">
              <button className='common-14-3 Credit-btn bnt-Credit-debit ' >Credit card</button>
              <button className='common-14-3 debit-btn bnt-Credit-debit' >debit card</button>
            </div>
          </div>

          <div className="checkout-add-to-cart">
            <div className="total-price">
              <ul className='price-list-add-to-cart' >
                <li>
                  <p className='common-16-4' >Subtotal</p>
                  <p className='common-16-2' >$320.00</p>
                </li>
                <li  >
                  <p className='common-16-4' >Item</p>
                  <p className='common-16-2' >2</p>
                </li>
                <li>
                  <p className='common-16-4' >Shipping</p>
                  <p className='common-16-2' >Free</p>
                </li>
              </ul>
            </div>
            <div className="line-x"></div>
            <div className="last-price">
              <ul className='price-list-add-to-cart' >
                <li>
                  <p className='common-16-4' >Total</p>
                  <p className='common-16-2' >$530.00</p>
                </li>
              </ul>
            </div>
            <div className="btn-chech-out-add-tocart">
              <Link style={{ color: "#FFF" }} to="/checkout" >
                <button style={{ cursor: "pointer" }} className=' btn-check-out btn-common-main'> Check out </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addtocart