import React from 'react'
import thx from '../img/thx.png'
import icon from '../img/Icon.png'
import close from '../img/close.svg'

const Thankscard = (props) => {
    return (
        <>
            <div className=" outer-border otp center-popup ">
                <div className="otp-headding">
                    <img src={icon} alt="icon" />
                    <p className='now-only' ><span className='buy-only' >Buy</span>now</p>
                    <img className='close-icon' onClick={()=>{props?.setClick(false)}}  src={close} alt="close" />
                </div>
                <div className="thankscard">
                    <div className="thanksimgs">
                        <img className='thanks-img' src={thx} alt="thanks" />
                        <p style={
                            {
                                color: "#495F6A"
                            }
                        } className='common-20-1' >Thank you <br /> Your order is confirm</p>
                    </div>
                    <div className="btn-thx">
                        <button className=' btn-kepp-shopping btn-customer common-15-1 ' >Keep Shopping</button>
                        <button className='btn-common-main' >Track order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thankscard