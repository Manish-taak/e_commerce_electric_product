import React, { Fragment, useEffect, useState } from 'react'

import cartimg from '../img/Badge W.Icon.png'
import { Link } from 'react-router-dom'

const Cartdrop = (props) => {




    return (
        <>
            <div className="dropdown">
                <div className="dropbtn common-16-1 nav-item ">
                    <img className='contact' src={cartimg} alt="logoimg3sdsdsd" />
                </div>
                <div className="dropdown-content cartdropset">
                    <div className="cartdropdown">
                        <div className="carttop">
                            {
                                props.data?.data?.map((item, index) => {
                                    console.log(item, "=========================drop cart item")
                                    return (
                                        <Fragment key={Date.now() + index} >
                                            <div className="cart-box-select">
                                                <img src={`http://localhost:8000/${item?.product?.image}`} alt="img1" />
                                                <div className="info-price-cart">
                                                    <p className='common-16-3' >{item?.product?.name}</p>
                                                    <p className='common-14-2 ' >{item?.product?.price}</p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="line-x"></div>
                        <Link className='btn-cart-header-hover' to="/addtocart" >
                            <button className='btn-common-main'>
                                VIEW CART
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cartdrop