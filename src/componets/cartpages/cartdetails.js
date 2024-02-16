import React, { Fragment, useContext, useEffect, useState } from 'react'
// import right from '../img/Arrowlineright.png'
import { Link } from 'react-router-dom'
import Swipercodecart from '../cardtypes/swipercodecart'
import shareicon from '../img/shareicon.svg'
import star from '../img/StarFilled.png'
import SectionHeading from '../../snippets/sectionHeading.js'
const Cartdetails = (props) => {

  const [checkcolor, setcheckcolor] = useState("");

  const [price, setPrice] = useState(props?.data?.data[0].price);

  useEffect(() => {
    if (props?.data?.data[0]?.colors !== undefined) {
      let color = JSON.parse(props?.data?.data[0]?.colors)[0];
      setcheckcolor(color?.color_code);
    }

  }, [props.data])

  return (
    <>
      <div className="cartdetalis container">
        {
          props.data?.data.map((item, index) => {
            return (
              <Fragment key={Date.now() + index}>
                <div className="cartdetalis-heading-cart">
                  <SectionHeading head={item.subcategory.subcategory_name} link1={"Home"} link2={"Products"} link3={"Products details"} />
                </div>
                <div className="products-swiper-other-type">
                  <div className="res-products-change-section">
                    <div className="product-name">
                      <p className='product-price-and-name common-24-1 ' >{item.description}
                        <img src={shareicon} alt="shareicon" />
                      </p>
                      <p className='common-16-2'> <span className='common-16-4' >Price: $ {price}</span>{item.description}</p>
                    </div>
                  </div>
                  <Swipercodecart product={props.data?.data[0]} checkcolor={checkcolor} setPrice={setPrice} />
                  {
                    console.log(props.data?.data[0], "_________________________")
                  }
                  <div className="products-details-type">
                    <div className="products-change-section">
                      <div className="product-name">
                        <p className='product-price-and-name common-24-1 ' >{item.name}
                          <img src={shareicon} alt="shareicon" />
                        </p>
                        <p className='common-16-2'> <span className='common-16-4' >Price: ${price}</span>  -{item.description}</p>
                      </div>
                    </div>
                    <div className="product-color">
                      <p className='common-16-2' >Color</p>
                      <div>
                        <ul style={{ display: 'flex', gap: "20px" }} >
                          {
                            JSON.parse(item.colors).map((item, index) => {
                              return (
                                <Fragment key={Date.now() + index} >
                                  <li onClick={() => { setcheckcolor(item.color_code) }} style={{ background: "#" + item.color_code, cursor: "pointer" }} className='color-s'></li>
                                </Fragment>
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
                            <label className='common-16-1' l htmlFor="gps">GPS</label>
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
                          <h2 className='common-34-1' >${price}.00</h2>
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

              </Fragment>
            )
          })
        }

      </div>
    </>
  )
}

export default Cartdetails