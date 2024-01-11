import React from 'react'
import SectionHeading from '../snippets/sectionHeading'
import warning from '../componets/img/warning.svg'
import down from '../componets/img/download.svg'
import { Link } from 'react-router-dom'

const Returnorder = () => {
    return (
        <>
            <div className="returnorder container ">
                <div className="order-heading">
                    <SectionHeading head={"Return Order"} link1={"Home"} link2={"Return"} />
                    <div className="return-order-btn-need">
                        <button className=' return-btn-need-help  btn-common-main'>
                            Need Help
                        </button>
                    </div>
                    {/* <div className="help-second-child">
                        <div className="help-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5445 11.0222C16.5445 14.0721 14.0721 16.5445 11.0222 16.5445C7.97238 16.5445 5.5 14.0721 5.5 11.0222C5.5 7.97238 7.97238 5.5 11.0222 5.5C14.0721 5.5 16.5445 7.97238 16.5445 11.0222ZM15.5848 17.0033C14.3192 17.9701 12.7378 18.5445 11.0222 18.5445C6.86782 18.5445 3.5 15.1766 3.5 11.0222C3.5 6.86782 6.86782 3.5 11.0222 3.5C15.1766 3.5 18.5445 6.86782 18.5445 11.0222C18.5445 12.7379 17.9701 14.3193 17.0032 15.5849L20.2083 18.79C20.5988 19.1805 20.5967 19.8158 20.2062 20.2063C19.8157 20.5968 19.1804 20.5989 18.7899 20.2084L15.5848 17.0033Z" fill="#574B9B" fillOpacity="0.54" />
                            </svg>
                            <input className='input-help' type="text" placeholder='Search' />
                        </div>
                    </div> */}
                </div>
                {/* <div className="return-top-sec">
                    <SectionHeading head={"Return Order"} link1={"Home"} link2={"Return"} />
                    <button className='btn-common-main'>
                        Need Help
                    </button>
                </div> */}
                <div className="warning">
                    <img src={warning} alt="warning" />
                    <div>
                        <p className='war-p' >are you sure your order will be return</p>
                        <p className='war-p2' >Montes, sit euismod commodo id aliquam facilisis lorem quam. Tortor aliquam commodo id non, pellentesque nulla. Semper quis sapien eu nulla ipsum duis eget quis. Lectus amet, nibh ultricies purus in pellentesque eu amet.</p>
                    </div>
                </div>
                <div className="Return-info">
                    <p className='common-20-1'>Return Information</p>
                    <div>
                        <form className="checkboxs-returns" action="" method="get">
                            <label htmlFor="">
                                <input className='check-box-returns' type="checkbox" name="returninfo" id="" />
                                Wrong Product Delivered
                            </label>
                            <label htmlFor="">
                                <input className='check-box-returns' type="checkbox" name="returninfo" id="" />
                                Wrong Product Delivered
                            </label>
                            <label htmlFor="">
                                <input className='check-box-returns' type="checkbox" name="returninfo" id="" />
                                Wrong Product Delivered
                            </label>
                            <label htmlFor="">
                                <input className='check-box-returns' type="checkbox" name="returninfo" id="" />
                                Wrong Product Delivered
                            </label>
                            <label htmlFor="">
                                <input className='check-box-returns' type="checkbox" name="returninfo" id="" />
                                Wrong Product Delivered
                            </label>
                        </form>
                    </div>
                </div>
                <div className="review-textera">
                    <textarea placeholder='Product return reason Explain' className='textarea-return' name="" id="" ></textarea>
                </div>
                <div className="products-photo-video">
                    <h3 className='common-20-1' >Product Photo/Video</h3>
                    <div className="dotted">
                        <div className="uploade-review">
                            <img src={down} alt="down" />
                            <div className="res-text-returnorder">
                                <p style={{ color: "#000" }} className='common-14-4' >Drop your files here. JPG or  MP4 max 100mb. </p>
                                <Link to="#" >Browses</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btns-return-review">
                    <Link to="#" className='common-15-1-btn'>Go back</Link>
                    <button className='btn-common-main' >Return order</button>
                </div>
            </div>
        </>
    )
}

export default Returnorder