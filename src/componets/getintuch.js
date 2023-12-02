import React from 'react'
import { Link } from 'react-router-dom'
import rightlinerright from './img/Arrowlineright.png'
import lication from './img/Rectangle 1050.png'
const Getintuch = () => {
    return (
        <>
            <div className="getintouch container ">
                <div className="productsmainpage-heading">
                    <h2 className="common-34-1" >Get In touch! </h2>
                    <div className="btn-next-pages">
                        <Link className="common-16-2" to="/" >Home</Link>
                        <img src={rightlinerright} alt="er" />
                        <Link style={{ color: "#1F292D" }} className="common-16-2" to="/" >Contact us</Link>
                    </div>
                </div>
                <div className="coutacts">
                    <div className="contacts-child-1">
                        <h2 className='common-20-1' > Contact us </h2>
                        <div className=" getin help-input">
                            <input className='input-help' type="text" placeholder='Name' />
                        </div>
                        <div className=" getin help-input">
                            <input className='input-help' type="text" placeholder='Email/Phone no.' />
                        </div>
                        <div className="  getin  help-input">
                            <input className='input-help' type="text" placeholder='Select an option...' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.70538 9.2947C7.09466 8.90543 7.72569 8.90509 8.11538 9.29393L11.2937 12.4653C11.684 12.8548 12.316 12.8548 12.7063 12.4653L15.8846 9.29393C16.2743 8.90509 16.9053 8.90543 17.2946 9.2947C17.6842 9.68428 17.6842 10.3159 17.2946 10.7055L12.7071 15.293C12.3166 15.6835 11.6834 15.6835 11.2929 15.293L6.70538 10.7055C6.31581 10.3159 6.31581 9.68428 6.70538 9.2947Z" fill="#574B9B" fillOpacity="0.54" />
                            </svg>
                        </div>
                        <textarea placeholder='Comment' className='textarea' name="" id="" cols="20" rows=" 6"></textarea>
                        <div className="chechbox">
                            <input  className='check-input' type="checkbox" />
                            <label className='common-16-1' for="vehicle1">By continuing, you agree to Buynow policy</label>
                        </div>
                        <button className=' contact-btn btn-common-main' >  SEND MESSAGE  </button>
                    </div>
                    <div className="contacts-child-2">
                        <img src={lication} alt="lication" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getintuch