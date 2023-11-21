import React, { useState } from 'react'
import logoimg2 from '../img/Buynow.png'
import logoimg5 from '../img/Group.png'
import logoimg1 from '../img/Icon.png'
import logoimg4 from '../img/LocalMallOutlined.png'
import logoimg3 from '../img/SearchFilled.png'
import man from '../img/man.png'
import dropdown from '../json/dropdown.json'
import bike from '../img/bike.png'
const Header = () => {
    const [conntrylist, setcountrylist] = useState(dropdown)
    const [code, setcode] = useState("IN")
    let change = (e) => {
        console.log(e, "input value");
        let clickme = dropdown.filter((item => item?.name.toLowerCase().includes(e.target.value)))
        setcountrylist(clickme)
    }

    return (
        <>
               <div className="header_top">
                <div className="header_top_text container ">
                    <div className="top-header">
                        <img src={bike} alt="bike" />
                        <p>Free delivery on $100.00</p>
                    </div>
                    <div className="right-top-header">
                        <a className='anchor-header-top' href="#">Help center</a>
                        <div className="policy-support">
                            <a className='anchor-header-top' href="#">
                            Returns policy
                            </a>
                            <span style={{ color: '#C4CFD4' }} >Support : <a className='anchor-header-top' href="#">(+00) 0123456789</a></span>
                        </div>
                    </div>
                </div>
               </div>

            <header className='container'  >
                <nav className='media-header' >
                    <div className="res-logo">
                        <img src={logoimg1} alt="logoimg1" />
                        <img src={logoimg2} alt="logoimg2" />
                    </div>
                    <div className="icons">
                        <img src={logoimg3} alt="logoimg3" />
                        <img src={logoimg4} alt="logoimg4" />
                        <img src={logoimg5} alt="logoimg5" />
                    </div>
                </nav>
                <div className="main_nav">
                    <nav className='simple-nav'>
                        <div className="logo">
                            <img src={logoimg1} alt="logoimg1" />
                            <div className='logo-custom' ><span style={{ color: ' gray' }} >Buy</span>  <span>now</span> </div>
                            {/* <img src={logoimg2} alt="logoimg2" /> */}
                        </div>
                        <div className="link">
                            <ul>
                                <li>Home</li>
                                <li>Top deals</li>
                                <li>Hot offers</li>
                                <li>Pages</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="icon-search">
                        <div className="serch-bar">
                            <img src={logoimg3} alt="" />
                            <input onChange={(e) => change(e)} className='input-header' type="text" />
                            <div >
                                <select className="option-search" >
                                    {
                                        conntrylist.map((value, index) => {
                                            return (
                                                <>
                                                    <option key={index}
                                                        onClick={() =>{
                                                            setcode(value?.dial_code)
                                                            }}>{value["name"]}
                                                    </option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="country-options">
                            <div  >
                                <span>{code}</span>
                            </div>
                            <div className='border-only' ></div>
                            <div>
                                <img src={logoimg4} alt="logoimg3sdsdsd" />
                            </div>
                            <div className='border-only' ></div>
                            <div>
                                <img src={man} alt="logoimg3sdsdsd" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header