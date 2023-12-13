import React from 'react'
import addtocartimage from '../img/adddtocart2.png'
import plus from '../img/plus.png'
import minus from '../img/minus.png'
import gray from '../img/Ellipsegray.png'

const Cardaddtocart = (props) => {

    const ordersummary = [
        {
            image: "adddtocart2.png",
            name: "Apple Watch SE",
            brandname: "Silver Aluminium Case with Abyss Blue Sport Band - Regular",
            price : "$320.00"
        },
        {
            image: "adddtocart2.png",
            name: "Apple Watch SE",
            brandname: "Silver Aluminium Case with Abyss Blue Sport Band - Regular",
            price : "$320.00"
        }
    ]
    return (
        <>
            {
                props.cartcard === true &&
                <div className="add-top-cart-product-info">
                    <div className="ad-cart-product-info">
                        <div className="addtocartimage">
                            <img src={addtocartimage} alt=" addtocartimage" />
                        </div>
                        <div className="addcartproduct-quanity">
                            <div className="product-name-cart">
                                <p className='common-20-1' >Apple Watch SE </p>
                                <p className='common-16-2' >Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
                            </div>
                            <div className="line-x"></div>
                            <div className="size-gps-color-cart-products">
                                <div className="size-color-gps">
                                    <p className='common-20-1' >41mm</p>
                                    <p>Size</p>
                                </div>
                                <div className="line-x"></div>
                                <div className="size-color-gps">
                                    <p className='common-20-1' >GPS</p>
                                    <p>Style</p>
                                </div>
                                <div className="line-x"></div>
                                <div className="size-color-gps">
                                    <img src={gray} alt="" />
                                    <p>color</p>
                                </div>
                            </div>
                            <div className="line-x"></div>
                            <div className="btns-quanity">
                                <button className='count-products' >
                                    <img src={minus} alt="minus" />
                                    <span>1</span>
                                    <img src={plus} alt="plus" />
                                </button>
                                <p className='common-16-2' >Free shipping</p>
                            </div>
                        </div>
                    </div>
                    <div className="line-x"></div>
                    <div className="price-remove-option">
                        <h2 className='common-34-1' >$210.00</h2>
                        <p className='common-14-3' >Remove</p>
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
                                <>
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
                                                    <div className="line-x"></div>
                                                    <p className='common-20-1' >{item.price}</p>
                                                </div>
                                                remove
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            }
        </>
    )
}

export default Cardaddtocart