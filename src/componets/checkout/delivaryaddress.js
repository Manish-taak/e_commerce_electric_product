import React from 'react'
import arrowdowndrop from '../img/ArrowDropDownOutlined.png'
import location from '../img/Location.svg'
const Delivaryaddress = (props) => {
    return (
        <>
            <div className="delivaryaddress">
                <h2 className='common-16-3' >Delivery Address</h2>
                <div className="justify-20">
                    <input className='simple-inpuit common-16-2 ' type="text" placeholder='First name' />
                    <input className='simple-inpuit common-16-2 ' type="text" placeholder='Mobile number' />
                </div>
                <div className="justify-20">
                    <input className='simple-inpuit common-16-2 ' type="text" placeholder='Email address' />
                    <input className='simple-inpuit common-16-2 ' type="text" placeholder='PIN code' />
                </div>
                <div className="justify-20">
                    <div className="optional">
                        <input className='optional-inpuit common-16-2' type="text" placeholder='City,state' />
                        <img src={arrowdowndrop} alt="arrowdowndrop" />
                    </div>
                    <div className="optional">
                        <input className='optional-inpuit common-16-2' type="text" placeholder='Country' />
                        <img src={arrowdowndrop} alt="arrowdowndrop" />
                    </div>
                </div>
                <div className="optional">
                    <input className='optional-inpuit common-16-2' type="text" placeholder='Address 1' />
                    <img src={location} alt="location" />
                </div>
                <input className='simple-inpuit common-16-2 ' type="text" placeholder='Address 2' />
                <div className='checkboxBusiness' >
                    <div className="Business-checkbox">
                        <input type="checkbox" name="" id="" />
                    </div>
                    <p className='common-16-4' >Business address</p>
                </div>
                <div className="line-x"></div>
                <div className="saveaddress-cancel">
                    <button className=' saveaddress btn-customer' > SAVE ADDRESS </button>
                    {
                        props.open === true &&
                        <button onClick={() => props.cancel(false)} className=' cancel-btn common-15-1-btn ' >CANCEL</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Delivaryaddress