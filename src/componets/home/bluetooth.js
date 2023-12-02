import React from 'react'
import rightarrow from '../img/Arrowlineright.png'
import img1 from '../img/Img & BG.png'
const Bluetooth = () => {
    return (
        <>
            <section className='container' >
                <div className="bluetooth ">
                    <div className="bluetooth-text">
                        <div className="bluetooth-text-top">
                            <div className='own-line-text' >
                                <p style={{ color: "#FFF" }} className='common-p-16-gray' >$ 108.00</p>
                                <span>/</span>
                                <span style={{ color: "#FFB400" }} >60% off</span>
                            </div>
                            <h1 className='bluetooth-section-heading' >
                                Bluetooth Headphones
                                with Mic
                            </h1>
                        </div>
                        <div className="bluetooth-text-bottom" >
                            <button style={{ color: "#C4CFD4" }} className='bluetooth-btn' >Shop now <img src={rightarrow} alt="rightarrow" />
                            </button>
                        </div>
                    </div>
                    <div className="bluetooth-image">
                        <img src={img1} alt="img1" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bluetooth