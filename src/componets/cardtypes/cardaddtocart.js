import React, { Fragment, useEffect, useState } from 'react'
import plus from '../img/plus.png'
import minus from '../img/minus.png'
// import gray from '../img/Ellipsegray.png'
import * as api from "../axios/apis"
import { Link } from 'react-router-dom'

const Cardaddtocart = (props) => {
    const [quantity, setquantity] = useState(1)
    const [cartData, setcartdata] = useState(props?.data);

    const ordersummary = [
        {
            image: "adddtocart2.png",
            name: "Apple Watch SE",
            brandname: "Silver Aluminium Case with Abyss Blue Sport Band - Regular",
            price: "$320.00"
        },
        {
            image: "adddtocart2.png",
            name: "Apple Watch SE",
            brandname: "Silver Aluminium Case with Abyss Blue Sport Band - Regular",
            price: "$320.00"
        }
    ]

    function increment() {
        if (quantity > 20) {
            setquantity(quantity + 0)
        } else if (quantity < 20) {
            setquantity(quantity + 1)
        }
    }

    function decerment() {
        if (quantity < 2) {
            setquantity(quantity)
        }
        else {
            setquantity(quantity - 1)
        }
    }
    const updatequan = async (cartid, quantity) => {
        let obj = {}
        obj.quantity = quantity;
        let postquantitydata = await api.cartquantityupdate(cartid, obj).then((res) => console.log(res)).catch((err) => console.log(err));
        let data = await api.mulitipalscartitem().then((res) => {
            return res.data
        }).catch((err) => console.log(err, "api error page cartaddtocart"));
        let filterData = data.data.filter((item) => {
            return item.id === cartid
        })
        setcartdata(filterData[0]);
    }

    const deleteitem = async (id) => {
        let res = await api.deletecartitem(id).then((res) => { return res.data }).catch((err) => console.log(err))
        alert(res.message)
        setcartdata(null);
    }

    return (
        <>
            {
                props.cartcard === true && cartData !== null &&
                <div className="add-top-cart-product-info">
                    <div className="ad-cart-product-info">
                        <div className="addtocartimage">
                            <img src={`http://localhost:8000/${cartData?.product?.image}`} alt=" addtocartimage" />
                        </div>
                        <div className="addcartproduct-quanity">
                            <div className="product-name-cart">
                                <p className='common-20-1' >{cartData?.product?.name} </p>
                                <p className=' main-size common-16-2' >{cartData?.product?.description}</p>
                            </div>
                            <div className="line-x"></div>
                            <div className="size-gps-color-cart-products">
                                <div className="size-color-gps">
                                    <p className='common-20-1' >{cartData?.size}</p>
                                    <p>Size</p>
                                </div>
                                <div className=" main-size line-x"></div>
                                <div className=" main-size size-color-gps">
                                    <p className='common-20-1' >{cartData?.style}</p>
                                    <p>Style</p>
                                </div>
                                <div className="line-x main-size "></div>
                                <div className=" main-size size-color-gps">
                                    <span style={{
                                        background: `#${cartData?.color}`,
                                        width: "23px",
                                        height: "23px",
                                        borderRadius: "50%"
                                    }} ></span>
                                    <p>color</p>
                                </div>
                            </div>
                            <div className=" main-size line-x"></div>
                            <div className="btns-quanity">
                                <button className='count-products' >
                                    <img onClick={() => decerment()} src={minus} alt="minus" />
                                    <span>{cartData?.quantity}</span>
                                    <img onClick={() => {
                                        increment()
                                        updatequan(cartData?.id, cartData?.quantity + 1)
                                    }} src={plus} alt="plus" />
                                </button>
                                <p className=' main-size common-16-2' >{cartData?.shipping}</p>
                            </div>
                        </div>
                    </div>
                    <div className="priceoption">
                        <div className="line-x"></div>
                        <div className='price-remove-option' >
                            <h2 className='common-34-1' >{cartData?.product?.price}</h2>
                            <p style={{
                                cursor: "pointer"
                            }} onClick={() => deleteitem(cartData?.id)} className='  common-14-3' >Remove</p>
                        </div>
                    </div>
                </div>
            }
            {
                props.ordersummary === true &&
                <div className="ordersummmary">
                    <h2 className='common-16-3' >Order Summary</h2>
                    {
                        ordersummary.map((item, index) => {
                            return (
                                <Fragment key={Date.now() + index}>
                                    <div className="ordersummary-card">
                                        <div className="addtocartimage">
                                            <img src={require(`../img/${item.image}`)} alt=" addtocartimage" />
                                        </div>
                                        <div className="ordersummary-produts-card">
                                            <div className="ordersummary-product-name">
                                                <p className='common-20-1' >{item.name}</p>
                                                <p className='common-14-4' >{item.brandname}</p>
                                            </div>
                                            <div className="line-x"></div>
                                            <div className="btn-price-remove">
                                                <div className="quantity-price">
                                                    <button className='count-products' >
                                                        <img src={minus} alt="minus" />
                                                        <span>1</span>
                                                        <img src={plus} alt="plus" />
                                                    </button>
                                                    <div className="   line-x"></div>
                                                    <p className='common-20-1' >{item.price}</p>
                                                </div>
                                                remove
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default Cardaddtocart