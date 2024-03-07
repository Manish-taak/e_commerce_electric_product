import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import right from '../img/Arrowlineright.png'
// import addtocartimage from '../img/adddtocart2.png'
// import plus from '../img/plus.png'
// import minus from '../img/minus.png'
// import gray from '../img/Ellipsegray.png'
import Cardaddtocart from '../cardtypes/cardaddtocart'
import SectionHeading from '../../snippets/sectionHeading'
import debitcard from '../img/debitcard.svg'
import * as api from "../axios/apis"
import Empty from "../img/emptycart.png"
const Addtocart = () => {
  // color btn change 
  const [color, setcolor] = useState(true)

  // const cartdata = [
  //   {
  //     id: "1",
  //     brandname: " Apple Watch SE ",
  //     brandinfo: "Silver Aluminium Case with Abyss Blue Sport Band - Regular",
  //     size: "41mm",
  //     style: "GPS",
  //     color: "yellow",
  //     shipping: "Free shipping",
  //     price: "$320.00",
  //     img: "watchs.png"
  //   }, {
  //     id: "2",
  //     brandname: " Apple Watch SE ",
  //     brandinfo: "Silver Aluminium Case with Abyss Blue Sport Band - Regular",
  //     size: "41mm",
  //     style: "GPS",
  //     color: "yellow",
  //     shipping: "Free shipping",
  //     price: "$320.00",
  //     img: "mi.png"
  //   }
  // ]

  const [cartdata, setcartdata] = useState([])

  let getcartallitem = async () => {
    let data = await api.mulitipalscartitem().then((res) => {
      return res.data
    }).catch((err) => console.log(err, "=====+=+++++++mulitipals cart item axios error"))
    setcartdata(data)
  }

  useEffect(() => {
    getcartallitem()
  }, [])



  function handleScroll() {
    window.scroll({
      bottom: document.body.offsetHeight,
      behavior: 'smooth',
      top : 0
    });
  }

  



  return (
    <>
      <div className=" container addtocart">
        <SectionHeading head={"Cart Products"} link1={"Home"} link2={"Cart"} />
        {
          cartdata?.data?.map((item, index) => {
            return (
              <React.Fragment key={Date.now() + index}  >
                <Cardaddtocart data={item} cartcard={true} />
              </React.Fragment>
            )
          })
        }
        <div className="line-x"></div>
        <div className="card-option">
          <div className="emicard">
            <div className='EMIAvailable'>
              <p className='common-20-1' >EMI Available</p>
              <p className='common-16-2' >No Cost EMI offers. Id aliquam felis a egestas mi diam <span className='common-16-3'  >Learn more  </span></p>
            </div>
            <div className="addto-line line-x"></div>
            <div className="res-addto-line"></div>
            <div className="btn-caedit-debit">
              <div className='res-btn-caedit-debit-change' >
                <button className={` ${color === true && "change-color"} common-14-3 Credit-btn bnt-Credit-debit `} onClick={() => setcolor(true)}  >Credit card</button>
                <button className={` ${color === false && "change-color"} common-14-3 debit-btn bnt-Credit-debit `} onClick={() => setcolor(false)}  >debit card</button>
              </div>
              <img className='res-emi-img-show-hide' src={debitcard} alt="debitcard" />
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
              <Link className='btn-check-out' style={{ color: "#FFF" }} to="/Checkoutmain/userlogin" >
                <button style={{ cursor: "pointer" }} className=' btn-check-out btn-common-main'> Check out </button>
              </Link>
              <button onClick={handleScroll} >btn </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addtocart


//   <div className='emptycard' >
// <h1>You Can Add Your Content Here </h1>
// <Link to="/products" >
//   <button className='btn-check-out' >
//     shop now
//   </button>
// </Link>
// </div>