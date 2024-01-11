import React, { useContext, useState } from 'react'
// import right from '../img/Arrowlineright.png'
import { Link } from 'react-router-dom'
import Swipercodecart from '../cardtypes/swipercodecart'
import shareicon from '../img/shareicon.svg'
import color1 from '../img/Color1.svg'
import color2 from '../img/color2.svg'
import color3 from '../img/color3.svg'
import star from '../img/StarFilled.png'
import SectionHeading from '../../snippets/sectionHeading.js'
import Contaxtpop from '../../contaxtpop.js'
const Cartdetails = () => {
  // const colors = ["#FFB400", "#DCE775", "#81C784", "#4FC3F7"]
  const colors = [
    {
      id : "1",
      color : "#FFB400"
    },    {
      id : "2",
      color : "#DCE775"
    },
    {
      id : "3",
      color : "#81C784"
    },
    {
      id : "4",
      color : "#4FC3F7"
    }
  ]
  // function colorsdata(e) {
  //   let colorselect = e.currentTarget;
  //   console.log(colorselect)
  //   if (!colorselect.getAttribute('style')) {
  //     colorselect.style.border = "1px solid black"
  //   } else {
  //   }
  // }

  // let alldatacolors = [
  //   {

  //   }
  // ]
  const [checkcolor,setcheckcolor] = useState() 
  console.log(checkcolor,"=============colorcode  ")

  // const {openPopup} = useContext(Contaxtpop)
  return (
    <>
      <div className="cartdetalis container ">
        <div className="cartdetalis-heading-cart">
          <SectionHeading head={"Apple watch"} link1={"Home"} link2={"Products"} link3={"Products details"} />
        </div>
        <div className="products-swiper-other-type">
          <div className="res-products-change-section">
            <div className="product-name">
              <p  className='product-price-and-name common-24-1 ' >Apple watch SE
                <img src={shareicon} alt="shareicon" />
              </p>
              <p className='common-16-2'> <span className='common-16-4' >Price: $600.00</span>  - Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
            </div>
          </div>
          <Swipercodecart checkcolor={checkcolor} />
          <div className="products-details-type">
            <div className="products-change-section">
              <div className="product-name">
                <p className='product-price-and-name common-24-1 ' >Apple watch SE
                  <img src={shareicon} alt="shareicon" />
                </p>
                <p className='common-16-2'   > <span className='common-16-4' >Price: $600.00</span>  - Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
              </div>
            </div>
            <div className="product-color">
              <p className='common-16-2' >Color</p>
              <div>
                <ul style={{ display: 'flex', gap: "20px"  }} >
                  {
                    colors.map((item) => {
                      return (
                        <>
                          <li onClick={()=>{setcheckcolor(item.color) }} style={{ background: item.color , cursor:"pointer" }} className='color-s'></li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="product-size">
              <p className='common-16-2' >Size</p>
              <div className='size-mm' >
                <div className="size-1">
                  <p className='common-20-1' >41mm</p>
                  <p className='common-14-2 ellipsis '>Fits 130-200mm wrists.</p>
                </div>
                <div className="size-1">
                  <p className='common-20-1' >41mm</p>
                  <p className='common-14-2 ellipsis '>Fits 130-200mm wrists.</p>
                </div>
              </div>
            </div>
            <div className="product-style">
              <p className='common-16-2' >Style name</p>
              <div >
                <form className=" slectsradio-gps " action="">
                  <div>
                    <input name='gps' className='gps-radio' id='gps' type="radio" />
                    <labe className='common-16-1' l htmlFor="gps">GPS</labe>
                  </div>
                  <div>
                    <input name='gps' className='gps-radio' id='Cellular' type="radio" />
                    <label className='common-16-1' htmlFor="Cellular">GPS + Cellular</label>
                  </div>
                </form>
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
              <Link className='cart-add-buy' to="/addtocart" >
                <button className='btn-customer-2 cart-btn btn-customer'>ADD TO CART </button>
              </Link>
              <Link className='cart-add-buy' to="/products" >
                <button className='btn-common-main'>BUY NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cartdetails