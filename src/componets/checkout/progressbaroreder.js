import React from 'react'
import imgredio from '../img/radioProgress.svg'
import mainreadio from '../img/mainradio.svg'

const Progressbaroreder = () => {
    return (
        <>
            <div className="progressbar">
                <ul className="progress-name common-16-2 " >
                    <li>Sign In</li>
                    <li>Delivery Address</li>
                    <li>Payment Option</li>
                    <li>Complete Order</li>
                </ul>
                <div className="progress-points">
                    <div className="main-pointer-progress-bar">
                        <img src={mainreadio} alt="mainreadio" />
                    </div>
                    <div className="setredio">
                        <img className='radio-progress' src={imgredio} alt="imgredio" />
                        <img className='radio-progress' src={imgredio} alt="imgredio" />
                        <img className='radio-progress' src={imgredio} alt="imgredio" />
                        <img className='radio-progress' src={imgredio} alt="imgredio" />
                    </div>
                    <div className="track-progress">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progressbaroreder