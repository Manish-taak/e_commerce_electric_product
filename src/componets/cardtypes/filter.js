import React, { useEffect, useState } from 'react'
import { Fragment } from "react";
import { Link } from 'react-router-dom'
import upbtn from '../img/KeyboardArrowUpOutlined.png'
import * as  apis from '../axios/apis'
const Filter = (props) => {
    const [open1, setopen1] = useState(false)
    const [cate_data, setcate_data] = useState()
    const [color, setcolor] = useState()
    const [brands, setbrands] = useState()
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
    function sidebarAccordion(e) {
        let sibbling = e.currentTarget.nextSibling
        let getheight = sibbling.scrollHeight
        if (!sibbling.getAttribute('style')) {
            sibbling.style.height = `${getheight}px`
        }
        else {
            sibbling.removeAttribute('style')
        }
    }
    function rotate(e) {
        let currentvalue = e.currentTarget.lastChild;
        if (!currentvalue.getAttribute("style")) {
            currentvalue.style.transform = "rotate(180deg)";
        }
        else {
            currentvalue.removeAttribute('style')
        }
    }

    let categorydata = async () => {
        let data = await apis.getcategorydata().then((res) => {
            return res.data
        }).catch((err) => console.log(err))
        setcate_data(data)
    }
    let colorget = async () => {
        let colordata = await apis.getcolor().then(res => { return res.data }).catch(err => console.log(err))
        setcolor(colordata)
    }

    let brandsget = async () => {
        let data = await apis.getbrands().then((res) => { return res.data }).catch(err => console.log(err))
        setbrands(data)
    }

    useEffect(() => {
        categorydata()
        colorget()
        brandsget()
    }, [])


    function myFunction(e) {
        var elems = document.querySelector(".click-active");
        if (elems !== null) {
            elems.classList.remove("click-active");
        }
        e.target.className = "click-active";
    }

    const sidebarData = [
        {
            heading: "Category",
            categoryList: [
                "Watches", "Mobiles", "Laptops",
                "Tablets", "Headphones", "Speakers"
            ]
        },
        {
            heading: "Price",
        },
        {
            heading: "Color",
            colorList: [
                "#1F292D", "#1976D2", "#81C784",
                "#4DD0E1", "#4DB6AC", "#78909C", "#67517A",
                "#FF8A65", "#FFB74D", "#BA68C8", "#BE134D", "#F06292"
            ]
        },
        {
            heading: "Brands",
            brandsList: [
                "Watches", "Mobiles", "Laptops",
                "Tablets", "Headphones", "Speakers"
            ]
        },
        {
            heading: "Customer review",
            reviewList: [
                "Watches", "Mobiles", "Laptops",
                "Tablets", "Headphones", "Speakers"
            ]
        },
        {
            heading: "Discount",
            discountList: [
                "Watches", "Mobiles", "Laptops",
                "Tablets", "Headphones", "Speakers"
            ]
        },
    ]

    return (
        <>
            <div className={props.filter === true ? "filter-side active-side-filter" : "filter-side"}>
                <div className=' filter-top-section  filter-side-part-1'>
                    <p>Filter</p>
                    <button className="fliterclear" onClick={() => { props.getFilterRecord("clear", "") }}> CLEAR ALL</button>
                    <svg onClick={() => props.setfilter(false)} className='filtercut' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12.7071 9.88289C12.3166 10.2734 11.6834 10.2734 11.2929 9.88289L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L9.88289 11.2929C10.2734 11.6834 10.2734 12.3166 9.88289 12.7071L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L11.2929 14.1171C11.6834 13.7266 12.3166 13.7266 12.7071 14.1171L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L14.1171 12.7071C13.7266 12.3166 13.7266 11.6834 14.1171 11.2929L18.295 7.115Z" fill="#495F6A" />
                    </svg>
                </div>
                <div className="filter-data">
                    {
                        sidebarData.map((item, index) => {
                            return (
                                <Fragment key={Date.now() + index}>
                                    <div className='all-same-products' >
                                        <div className="category-btn-show-hide" onClick={(e) => { sidebarAccordion(e); rotate(e) }}>
                                            <p className="common-p-16" >{item.heading}</p>
                                            <img className="rotate-img" src={upbtn} />
                                        </div>
                                        {
                                            item?.heading === "Category" && (
                                                <ul className='filter_list all-option'>
                                                    {
                                                        cate_data?.data.map((item, index) => {
                                                            return (
                                                                <Fragment key={Date.now() + index}>
                                                                    <li key={item} className=' click-active filter-li hotofferli  dropdowncategory' onClick={(e) => { props.getFilterRecord("category", item.name); myFunction(e) }}>{item.name} </li>
                                                                </Fragment>
                                                            )
                                                        })
                                                    }
                                                    <div className='all-view-all-btn' >
                                                        <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }} > view all </Link>
                                                    </div>
                                                </ul>
                                            )
                                        }
                                        {
                                            item?.heading === "Price" && (
                                                <>
                                                    <div className="input-range all-option" >
                                                        <input
                                                            className='input-low-high'
                                                            type="range"
                                                            min={50}
                                                            max={500}
                                                            onChange={(e) => { props?.setprice(e.target.value) }}
                                                        />
                                                        <div className="low-high-price">
                                                            <p> low:  <span>50</span></p>
                                                            <p>  High:  <span>{props.price}</span></p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            item?.heading === "Color" && (
                                                <>
                                                    <div className="selete-color all-option ">
                                                        <div className="color-line-1">
                                                            {
                                                                color?.data.map((item, index) => {
                                                                    return (
                                                                        <Fragment key={Date.now() + index}>
                                                                            <li className='color-dot' onClick={() => { props.getFilterRecord("color", item.color) }} style={{ background: `${item.color}` }} ></li>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <Link className="more-color" style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }}  > view all </Link>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            item?.heading === "Brands" && (
                                                <>
                                                    <ul className='filter_list all-option '>
                                                        {
                                                            brands?.data.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <li key={Date.now() + index} onClick={() => { props.getFilterRecord("brand", item.brand_name) }} className=' active-options filter-li hotofferli  dropdowncategory' >{item.brand_name} </li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <div className='all-view-all-btn' >
                                                            <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }} > view all </Link>
                                                        </div>
                                                    </ul>
                                                </>
                                            )
                                        }
                                        {
                                            item?.heading === "Customer review" && (
                                                <>
                                                    <ul className='filter_list all-option '>
                                                        {
                                                            item?.reviewList?.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <li key={Date.now() + index} className=' active-options filter-li hotofferli  dropdowncategory' >{item} </li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <div className='all-view-all-btn' >
                                                            <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }} > view all </Link>
                                                        </div>
                                                    </ul>
                                                </>
                                            )
                                        }
                                        {
                                            item?.heading === "Discount" && (
                                                <>
                                                    <ul className='filter_list all-option '>
                                                        {
                                                            item?.discountList?.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <li key={Date.now() + index} className=' active-options filter-li hotofferli  dropdowncategory' >{item} </li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <div className='all-view-all-btn' >
                                                            <Link style={{ color: "#422659", background: "transparent", padding: "6px 8px", border: "none" }} > view all </Link>
                                                        </div>
                                                    </ul>
                                                </>
                                            )
                                        }
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
                <div className="clear-all-apply-btn">
                    <button className=' cancel-btn common-15-1-btn ' >Clear all</button>
                    <button className='btn-common-main'>Apply</button>
                </div>
            </div>
        </>
    )
}

export default Filter






