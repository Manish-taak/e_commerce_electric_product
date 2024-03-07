import React, { Fragment, useState } from 'react'
import left from '../img/KeyboardBackspaceOutlined.png'
import option from '../img/options.png'
import cut from '../img/IconButton.png'
import { date } from 'yup'
const Searchbar = (props) => {
    const recentdata = [
        {
            id: "1",
            searchtext: "Apple watch series 8 45mm strap"
        },
        {
            id: "2",
            searchtext: "Camera stand for mobile video shooting"
        },
        {
            id: "3",
            searchtext: "Aliquam interdum nam rhoncus, in nunc imperdiet urna, purus vitae."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },

        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },

        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        }, {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },

        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        }, {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },

        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },
        {
            id: "4",
            searchtext: "Erat purus viverra porttitor eu vestibulum tempor est nulla."
        },


    ]
    const maimsearchbar = [
        {
            id: "1",
            name: "All Type"
        },
        {
            id: "2",
            name: "Mobiles"
        },
        {
            id: "3",
            name: "Laptops"
        },
        {
            id: "4",
            name: "Watches"
        },
        {
            id: "5",
            name: "Tablets"
        }, {
            id: "6",
            name: "Headphones"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },

        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
        {
            id: "7",
            name: "Printers"
        },
    ]
    const [changedata, setchangedata] = useState(false)
    return (
        <>
            <div className={props.search ? "headersearchbar activeheadersearchbar " : "headersearchbar"}>
                <div className="search-bar-main">
                    <img onClick={() => props.setsearch(false)} src={left} alt="" />
                    <div className="help-second-child">
                        <div className="help-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5445 11.0222C16.5445 14.0721 14.0721 16.5445 11.0222 16.5445C7.97238 16.5445 5.5 14.0721 5.5 11.0222C5.5 7.97238 7.97238 5.5 11.0222 5.5C14.0721 5.5 16.5445 7.97238 16.5445 11.0222ZM15.5848 17.0033C14.3192 17.9701 12.7378 18.5445 11.0222 18.5445C6.86782 18.5445 3.5 15.1766 3.5 11.0222C3.5 6.86782 6.86782 3.5 11.0222 3.5C15.1766 3.5 18.5445 6.86782 18.5445 11.0222C18.5445 12.7379 17.9701 14.3193 17.0032 15.5849L20.2083 18.79C20.5988 19.1805 20.5967 19.8158 20.2062 20.2063C19.8157 20.5968 19.1804 20.5989 18.7899 20.2084L15.5848 17.0033Z" fill="#574B9B" fillOpacity="0.54" />
                            </svg>
                            <input className='input-help' type="text" placeholder='Search' />
                        </div>
                    </div>
                    <img onClick={() => setchangedata(!changedata)} src={option} alt="option" />
                </div>
                {
                    changedata === true ? (<>
                        <div className="recent-list">
                            <p>Recent</p>
                            <div className="line-x"></div>
                            <div className="recents-search">
                                <ul className='list-search' >
                                    {
                                        maimsearchbar.map((item, index) => {
                                            return (
                                                <Fragment key={Date.now() + index} >
                                                    <li className=' searchbar-header  hotofferli  dropdowncategory' >{item.name}
                                                        <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                                            <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                                                        </svg>
                                                    </li>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </>) : (<>
                        <ul className='list-search' >
                            {
                                recentdata.map((item, index) => {
                                    return (
                                        <Fragment key={Date.now() + index} >
                                            <li className='search-list-recent list-sidebar-li   ' >
                                                <p className='maximum-line' >{item.searchtext}</p>
                                                <img className='cutimg' src={cut} alt="cut" />
                                            </li>
                                        </Fragment>
                                    )
                                })
                            }
                        </ul>

                    </>)
                }
            </div>
        </>
    )
}

export default Searchbar



