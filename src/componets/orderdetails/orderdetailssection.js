import React from 'react'
import cart from '../img/cart.png'
import boy from '../img/delivaryboy.svg'
import whitestar from '../img/whitestar.svg'
import silderthumb from '../img/Sliderthumb.svg'

const Orderdetailssection = () => {
    return (
        <div className="orderdetailssection">
            <div className="orderstaper">
                <div className="slider-y">
                    <div className="slider-track"></div>
                    <div className="slider-track-top"></div>
                    <img className='silder-thumb' src={silderthumb} alt="silderthumb" />
                </div>
                <div className="oprdered-conformed">
                    {/* 
                       stap1 : top=0 , height=15px
                       stap2 : top=135px , height=150px
                       stap3 : top=275px , height=290px
                       stap4 : top=415px , height=430px
                    */}
                    <ul className='order-list-track' >
                        <li className='order-tracking-options' ><p  className='conformed common-16-2' >Ordered conformed <span className='common-16-2'>(12/08/2022)</span> </p>  <p className='info-order-tr common-14-4 ' >Lorem ipsum dolor sit amet, consectetr adipiscing elit. Volutpat elementum malesuada vestibulum tristique maecenas.</p></li>
                        <li className='order-tracking-options' ><p  className='conformed common-16-2' >Ordered conformed <span className='common-16-2'>(12/08/2022)</span> </p>  <p className='info-order-tr common-14-4 ' >!oops &#128640;</p> </li>
                        <li className='order-tracking-options' ><p  className='conformed common-16-2' >Ordered conformed <span className='common-16-2'>(12/08/2022)</span> </p> <p className='info-order-tr common-14-4 ' >!oops &#128640;</p> </li>
                        <li className='order-tracking-options' ><p  className='conformed common-16-2' >Ordered conformed <span className='common-16-2'>(12/08/2022)</span> </p> </li>
                    </ul>
                </div>
            </div>
            <div className="orderprocessdetails">
                <div className="orderdetailssection-products">
                    <div className="shipping-address">
                        <div className="info-product">
                            <div className="brand-name-info">
                                <p className='common-20-1' >Apple watch SE </p>
                                <p className='common-16-2' >Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
                            </div>
                            <p style={{ color: '#1F292D' }} className='common-14-4' >Color <span className='common-14-4' > Black</span></p>
                            <p className='common-34-1' >$320.00</p>
                        </div>
                        <img className='order-images' src={cart} alt="cart" />
                    </div>
                </div>
                <div className="Shipping-Address">
                    <div className='Shipping-text' >
                        <p className='common-20-1' >Shipping Address</p>
                        <p className='common-14-2' >4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                    <img src={boy} alt="boy" />
                </div>
                <div className="return-order-btns">
                    <button className='return-btn'>Return  <span className='main-size'  >product</span></button>
                    <button className='whitestar-btn' > <img src={whitestar} alt="whitestar" />Rate <span className='main-size' >The product</span> </button>
                </div>
            </div>
        </div>
    )
}

export default Orderdetailssection