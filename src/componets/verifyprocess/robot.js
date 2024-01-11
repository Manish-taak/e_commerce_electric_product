import React from 'react'
import robot from '../img/robot.svg'
import icon from '../img/Icon.png'
import close from '../img/close.svg'
const Robot = () => {
    return (
        <>


            <div className=" outer-border otp">
                <div className="otp-headding">
                    <img src={icon} alt="icon" />
                    <p className='now-only' ><span className='buy-only' >Buy</span>now</p>
                    <img className='close-icon' src={close} alt="close" />
                </div>
                <div className=" scanqr enter-otp-process">
                    <p className='common-20-1'>Confirm to order</p>
                    <div className="optional">
                        <label htmlFor="">
                            <input className='checkbox-input' type="checkbox" name="" id="" />
                            <input className='optional-inpuit common-16-2' type="text" placeholder='Freerecharge ' />
                        </label>
                        <img src={robot} alt="robot" />
                    </div>
                    <p style={
                        {
                            textAlign: 'center'
                        }
                    } className='common-14-4' >Auctor at nunc lacinia sit. Posuere aenean donec ac sit in. Elementum ac eu purus elit. At velit, dictum neque purus accumsan.</p>
                </div>
            </div>

        </>
    )
}

export default Robot