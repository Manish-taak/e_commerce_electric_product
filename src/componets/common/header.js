import React, { useState } from 'react'
import logoimg2 from '../img/Buynow.png'
import logoimg5 from '../img/Group.png'
import logoimg1 from '../img/Icon.png'
import logoimg3 from '../img/SearchFilled.png'
import bike from '../img/bike.png'
import { Link } from 'react-router-dom'
import mainlogo from '../img/Buynow.png'
import user from '../img/User.png'
import india from '../img/india.png'
import Cartdrop from '../headerdropdown/cartdrop'
import Countraydrop from '../headerdropdown/countraydrop'
import Account from '../headerdropdown/account'
import Alldrop from '../headerdropdown/alldrop'
import Pagesssdrop from '../headerdropdown/pagesssdrop'
import Hotoffersdrop from '../headerdropdown/hotoffersdrop'
import Topdealdrop from '../headerdropdown/topdealdrop'
import Homedrop from '../headerdropdown/homedrop'
const Header = () => {
    const [dropdown, setdropdown] = useState(false)
    const [country, setcountry] = useState(false)
    return (
        <>
            <section className='head' >
                <div className="header_top">
                    <div className="header_top_text container ">
                        <div className="top-header">
                            <img src={bike} alt="bike" />
                            <p className='common-14-1' >Free delivery on $100.00</p>
                        </div>
                        <div className="right-top-header">
                            <Link className='anchor-header-top  common-14-1 ' to="/helpcenter" >Help center</Link>
                            <div className="policy-support">
                                <Link className='anchor-header-top  common-14-1 ' to="/getintuch" >Returns policy</Link>
                                <span className='common-14-1'>Support<a className='anchor-header-top' href="#">(+00) 0123456789</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <header id='myheader' >
                    <div className='container' >
                        <nav className='media-header' >
                            <div className="res-logo">
                                <img src={logoimg1} alt="logoimg1" />
                                <img src={logoimg2} alt="logoimg2" />
                            </div>
                            <div className="icons">
                                <img src={logoimg3} alt="logoimg3" />
                                <img src={user} alt="logoimg4" />
                                <img src={logoimg5} alt="logoimg5" />
                            </div>
                        </nav>
                        <div className="main_nav">
                            <nav className='simple-nav'>
                                <div className="logo">
                                    <img className='logofirst' src={logoimg1} alt="logoimg1" />
                                    <Link to='/' ><img src={mainlogo} alt="mainlogo" /></Link>
                                </div>
                                <div className="link">
                                   <Homedrop/>
                                    <Topdealdrop/>
                                    <Hotoffersdrop />
                                    <Pagesssdrop />
                                </div>
                            </nav>
                            <div className="icon-search">
                                <div className="serch-bar">
                                    <img src={logoimg3} alt="logo" />
                                    <input placeholder='Search' style={{ color: '#ABB5BA', width: "100%" }} className='input-header common-16-2 ' type="text" />
                                    <div onClick={() => { setdropdown(!dropdown) }} className="dropdown">
                                        <button className='dropdown-btn'>
                                            All
                                            <svg className={dropdown ? "rotate-img roate-180  " : "rotate-img "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path opacity="0.9" d="M14.4122 7.49978C14.0878 7.17538 13.5619 7.1751 13.2372 7.49914L10.7063 10.0245C10.316 10.414 9.68401 10.414 9.29366 10.0245L6.76282 7.49914C6.43807 7.1751 5.91221 7.17538 5.58782 7.49978C5.26318 7.82442 5.26318 8.35077 5.58782 8.67542L9.29289 12.3805C9.68342 12.771 10.3166 12.771 10.7071 12.3805L14.4122 8.67542C14.7368 8.35077 14.7368 7.82442 14.4122 7.49978Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                    <Alldrop dropdown={dropdown} />
                                </div>
                                <div className="country-options">
                                    <div onClick={() => setcountry(!country)} className='languages dropdown ' >
                                        <img src={india} alt="india" />
                                        <svg className={country ? "rotate-img roate-180  " : "rotate-img "} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.9" d="M9.41421 9.5C8.52331 9.5 8.07714 10.5771 8.70711 11.2071L11.2929 13.7929C11.6834 14.1834 12.3166 14.1834 12.7071 13.7929L15.2929 11.2071C15.9229 10.5771 15.4767 9.5 14.5858 9.5H9.41421Z" fill="#495F6A" />
                                        </svg>
                                    </div>
                                        <Countraydrop country={country} />
                                    <div className='border-only' ></div>
                                    <div>
                                        <Cartdrop />
                                    </div>
                                    <div className='border-only' ></div>
                                    <div>
                                        <Account />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}

export default Header