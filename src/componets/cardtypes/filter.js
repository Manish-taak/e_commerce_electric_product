import React from 'react'
import { Fragment } from "react";
import { Link } from 'react-router-dom'
import upbtn from '../img/KeyboardArrowUpOutlined.png'
const Filter = (props) => {
    const data = [
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "mi.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        }
    ]
    const category = [
        {
            categoryname: "Watches"
        },
        {
            categoryname: "Mobiles"
        },
        {
            categoryname: "Laptops"
        },
        {
            categoryname: "Tablets"
        },
        {
            categoryname: "Headphones"
        },
        {
            categoryname: "Speakers"
        },

    ]
    const brands = [
        {
            brands: "Watches"
        },
        {
            brands: "Mobiles"
        },
        {
            brands: "Laptops"
        },
        {
            brands: "Tablets"
        },
        {
            brands: "Headphones"
        },
        {
            brands: "Speakers"
        },

    ]
    const customer = [
        {
            customer: "Watches"
        },
        {
            customer: "Mobiles"
        },
        {
            customer: "Laptops"
        },
        {
            customer: "Tablets"
        },
        {
            customer: "Headphones"
        },
        {
            customer: "Speakers"
        },

    ]
    const discount = [
        {
            discount: "Watches"
        },
        {
            discount: "Mobiles"
        },
        {
            discount: "Laptops"
        },
        {
            discount: "Tablets"
        },
        {
            discount: "Headphones"
        },
        {
            discount: "Speakers"
        },

    ]
    function open(e) {
        e.currentTarget.classList.toggle("setopen")
    }
    return (
        <>
            <div className={props.filter === true ? "filter-side active-side-filter" : "filter-side"}>
                <div className='filter-side-part-1'>
                    <p>Filter</p>
                    <button className="   fliterclear  "> CLEAR ALL</button>
                    <svg onClick={() => props.setfilter(false)} className='filtercut' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12.7071 9.88289C12.3166 10.2734 11.6834 10.2734 11.2929 9.88289L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L9.88289 11.2929C10.2734 11.6834 10.2734 12.3166 9.88289 12.7071L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L11.2929 14.1171C11.6834 13.7266 12.3166 13.7266 12.7071 14.1171L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L14.1171 12.7071C13.7266 12.3166 13.7266 11.6834 14.1171 11.2929L18.295 7.115Z" fill="#495F6A" />
                    </svg>
                </div>
                <div className='line-x' ></div>
                <div className='filter-side-part-2'>
                    <div className='all-same-products' >
                        <div  className="category-btn-show-hide">
                            <p className="common-p-16" >Category</p>
                            <img className="rotate-img" src={upbtn} />
                        </div>
                        <>
                            <div>
                                <div onClick={(e) => open(e)}>
                                    <div className="all-option">
                                        <ul>
                                            {
                                                category.map((item, index) => {
                                                    return (
                                                        <>
                                                            <li key={index} className=' active-options filter-li hotofferli  dropdowncategory' >{item.categoryname} </li>
                                                        </>
                                                    )
                                                })
                                            }
                                            <div className='all-view-all-btn' >
                                                <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }} > view all </Link>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
                <div className='line-x' ></div>
                <div className='filter-side-part-3' >
                    <div className="filter-price-range category-btn-show-hide ">
                        <p>Price</p>
                        <img className="rotate-img" src={upbtn} alt="up_down" />
                    </div>
                    <div className="input-range">
                        <>
                            <input className='input-low-high' type="range" />
                            <div className="low-high-price">
                                <p> low:  <span>$50.00</span></p>
                                <p>  High:  <span>$500.00</span></p>
                            </div>
                        </>
                    </div>
                </div>
                <div className='line-x' ></div>
                <div className='filter-side-part-4' >
                    <div className="color-filter category-btn-show-hide ">
                        <p>color</p>
                        <img className="rotate-img" src={upbtn} alt="upbtn" />
                    </div>
                    <div className="selete-color">
                        <>
                            <div className="color-line-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#1F292D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#4DB6AC" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#78909C" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#1976D2" />
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="white" fillOpacity="0.3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#81C784" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#4DD0E1" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#67517A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#FF8A65" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#FFB74D" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#BA68C8" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#BE134D" />
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="white" fillOpacity="0.3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#F06292" />
                                </svg>
                            </div>
                            <Link className="more-color" style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }}  > view all </Link>
                        </>

                    </div>
                </div>
                <div className='line-x' ></div>
                <div className='filter-side-part-5' >
                    <div className='all-same-products ' >
                        <div className="category-btn-show-hide">
                            <p>Brands</p>
                            <img className="rotate-img" src={upbtn} alt="error" />
                        </div>
                        <>
                            <div className="all-option">
                                <ul>
                                    {
                                        brands.map((item, index) => {
                                            return (
                                                <Fragment key={index} >
                                                    <li key={index} className=' hotofferli filter-li dropdowncategory' >{item.brands}
                                                    </li>
                                                </Fragment>
                                            )
                                        })
                                    }
                                    <div className='all-view-all-btn' >
                                        <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }}> view all </Link>
                                    </div>
                                </ul>
                            </div>

                        </>
                    </div>
                </div>
                <div className='line-x' ></div>
                <div className='filter-side-part-6' >
                    <div className='all-same-products ' >
                        <div className="category-btn-show-hide">
                            <p>Customer review</p>
                            <img className="rotate-img" src={upbtn} alt="error" />
                        </div>
                        <>
                            <div className="all-option">
                                <ul>
                                    {
                                        customer.map((item, index) => {
                                            return (
                                                <Fragment key={index} >
                                                    <li key={index} className=' hotofferli filter-li dropdowncategory' >{item.customer}
                                                    </li>
                                                </Fragment>
                                            )
                                        })
                                    }
                                    <div className='all-view-all-btn' >
                                        <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }}  > view all </Link>
                                    </div>
                                </ul>
                            </div>

                        </>
                    </div>
                </div>
                <div className='line-x' ></div>

                <div className="filter-side-part-7">
                    <div className='all-same-products ' >
                        <div className="category-btn-show-hide">
                            <p>Discount</p>
                            <img className="rotate-img" src={upbtn} alt="error" />
                        </div>
                        <>
                            <div className="all-option">
                                <ul>
                                    {
                                        discount.map((item) => {
                                            return (
                                                <>
                                                    <Fragment>
                                                        <li className=' hotofferli filter-li dropdowncategory' >{item.discount}
                                                        </li>
                                                    </Fragment>
                                                </>
                                            )
                                        })
                                    }
                                    <div className='all-view-all-btn' >
                                        <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }}  > view all </Link>
                                    </div>
                                </ul>
                            </div>

                            <div className="filter-last-btns">
                                <div className="btn-filter">
                                    <button className="filter-btn-clearall"> CLEAR ALL</button>
                                    <button className='btn-common-main' >APPLY</button>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter