import React, { Fragment } from 'react'

import cartimg from '../img/Badge W.Icon.png'
import img1 from '../img/Rectangle 910.png'
import { Link } from 'react-router-dom'

const Cartdrop = () => {

    const cartdataselect = [
        {
            id: "1",
            name: "Asian prime-02 walking shoes",
            price: "$320.00"
        },
        {
            id: "2",
            name: "Asian prime-02 walking shoes",
            price: "$320.00"
        }
    ]

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
                                cartdataselect.map((item) => {
                                    return (
                                        <Fragment key={item.id} >
                                            <div className="cart-box-select">
                                                <img src={img1} alt="img1" />
                                                <div className="info-price-cart">
                                                    <p className='common-16-3' >{item.name}</p>
                                                    <p className='common-14-2 ' >{item.price}</p>
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