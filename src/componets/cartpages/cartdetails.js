import React, { Fragment, useContext, useEffect, useState } from 'react'
// import right from '../img/Arrowlineright.png'
import { Link, Navigate } from 'react-router-dom'
import Swipercodecart from '../cardtypes/swipercodecart'
import shareicon from '../img/shareicon.svg'
import star from '../img/StarFilled.png'
import SectionHeading from '../../snippets/sectionHeading.js'
import { useForm } from "react-hook-form"
import * as api from "../axios/apis.js"
import Usercontext from '../popupscontaxt/usercontext.js'

// toster import propertiessss
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cartdetails = (props) => {
  const [checkcolor, setcheckcolor] = useState();
  const [price, setPrice] = useState(props?.data?.data[0].price);
  const [sizedata, setsize] = useState([]);
  const [selectedsize, setselectedsize] = useState()
  const [sendsizedata, setsendsizedata] = useState()
  const [hover, sethover] = useState('')
  const [selectedValue, setSelectedValue] = useState('');
  const { tokenuser, settokenuser } = useContext(Usercontext)
  console.log(tokenuser, "=======================")
  function hovereffact(e, size) {
    sethover(e)
    setselectedsize(size)
  }
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  function size() {
    setSelectedValue()
  }
  const senddata = async () => {
    const raw = {};
    raw.style = selectedValue
    raw.color = checkcolor;
    raw.productId = props?.data?.data[0].id
    raw.size = selectedsize
    raw.quantity = 1
    if (raw.sendsizedata === '') {
      return window.alert("select size")
    }
    if (raw.style === '') {
      return window.alert("select style")
    }
    if (tokenuser !== null) {
      let res = await api.cartpostdata(raw, tokenuser).then((res) => { return res }).catch(err => console.log(err, "===============api error cart details page "))
      if (res.status === undefined || res.status === null || res.status === 500) {
        return console.log("backend responce error undefined null status 500")
      }
      if (res.status === 200) {
        toast.success(`${res.data.message}`)
      }
      // if (res.status === 200) {
      //   Navigate('/addtocart')
      // }
    } else {
      let array = JSON.parse(localStorage.getItem("datacart")) ?? [];
      console.log(array, "==================get data");
      if (array.length > 0) {
        let existingItemIndex = array.findIndex((item) => {
          return (
            item.style === selectedValue &&
            item.color === checkcolor &&
            item.size === selectedsize
          );
        });

        if (existingItemIndex !== -1) {
          array[existingItemIndex].quantity += 1;
        } else {
          array.push({
            style: selectedValue,
            color: checkcolor,
            size: selectedsize,
            quantity: 1,
          });
        }
      } else {
        array.push({
          style: selectedValue,
          color: checkcolor,
          size: selectedsize,
          quantity: 1,
        });
      }
      localStorage.setItem("datacart", JSON.stringify(array));
    }
  }
  useEffect(() => {
    try {
      if (props?.data?.data[0]?.colors !== undefined) {
        let color = JSON.parse(props.data.data[0].colors);
        setcheckcolor(color[0].color_code);
      }
    } catch (error) {
      console.log(error, "=== pagecartdetails=====colors======error")
    }
    try {
      if (props?.data?.data[0]?.sizeproducts !== undefined) {
        let stringdatasize = JSON.parse(props?.data?.data[0].sizeproducts[0].size)
        setsize(stringdatasize)
        setselectedsize(stringdatasize[0].size)
      }
    } catch (error) {
      console.log(error, "=====pagecartdetails=========size")
    }
    size()
  }, [props.data]);




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
                      <p className='product-price-and-name common-24-1 ' >{item?.description}
                        <img src={shareicon} alt="shareicon" />
                      </p>
                      <p className='common-16-2'> <span className='common-16-4' >Price: $ {price}</span>{item?.description}</p>
                    </div>
                  </div>
                  <Swipercodecart product={props.data?.data[0]} checkcolor={checkcolor} setPrice={setPrice} />
                  <div className="products-details-type">
                    <div className="products-change-section">
                      <div className="product-name">
                        <p className='product-price-and-name common-24-1 ' >{item?.name}
                          <img src={shareicon} alt="shareicon" />
                        </p>
                        <p className='common-16-2'> <span className='common-16-4' >Price: $ {price}</span>  -{item.description}</p>
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
                        {
                          sizedata?.map((item, index) => {
                            return (
                              <Fragment key={item.size}>
                                <div style={{
                                  cursor: "pointer",
                                  backgroundColor: hover === index ? "#f8fafc" : "transparent"
                                }} className="size-1" onClick={() => { hovereffact(index, item.size) }}   >
                                  <p className='common-20-1' > {item.size}mm</p>
                                  <p className='common-14-2 ellipsis '> static data Fits 130-200mm wrists.</p>
                                </div>
                              </Fragment>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div className="product-style">
                      <p className='common-16-2' >Style name</p>
                      <div >
                        <form className="slectsradio-gps" action="">
                          <div>
                            <input
                              name='gps'
                              className='gps-radio'
                              id='gps'
                              type="radio"
                              value='GPS'
                              checked={selectedValue === 'GPS'}
                              onChange={handleRadioChange}
                            />
                            <label className='common-16-1' l htmlFor="gps">GPS</label>
                          </div>
                          <div>
                            <input
                              name='gps'
                              className='gps-radio'
                              id='Cellular'
                              type="radio"
                              value='GPS + Cellular'
                              checked={selectedValue === 'GPS + Cellular'}
                              onChange={handleRadioChange}
                            />
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
                      <Link onClick={() => senddata()} className='cart-add-buy'>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default Cartdetails






// You've changed 'Nescafe Classic CoffeePowder, 100% Pure Instant Coffee' QUANTITY to '3'


// <ToastContainer
// position="top-center"
// autoClose={false}
// newestOnTop={false}
// closeOnClick={false}
// rtl={false}
// pauseOnFocusLoss
// draggable={false}
// theme="dark"
// transition: Bounce,
// />
// title

/*
toast.success('Wow so easy!', {
position: "top-center",
autoClose: false,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: false,
draggable: false,
progress: undefined,
theme: "dark",
transition: Bounce,
});

*/


/*


*/