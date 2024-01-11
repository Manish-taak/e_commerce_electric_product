import React, { Fragment, useState } from "react";
import rightlinerright from '../img/Arrowlineright.png'
import { Link } from 'react-router-dom'
import starimage from '../img/Rating.png'
// import mi from '../img/mi.png'
import dil from '../img/dil.png'
import upbtn from '../img/KeyboardArrowUpOutlined.png'
import down from '../img/downarrayimage.png'
import cartimage from '../img/addtocart.png'
// import btnleft from '../img/Arrowlineright.png'
import Cta_banner from '../home/cta_banner'
import Productscard from "../cardtypes/productscard";
import Featured_products from "../home/featured_products";
import Shortby from "../headerdropdown/shortby";
import Filter from "../cardtypes/filter";

const Section_1_products = (props) => {

    const data = [
        {
            image: "product17.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product18.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product19.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product20.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product21.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product22.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product23.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product24.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        },
        {
            image: "product25.png",
            productsname: "Apple Watch Series 7",
            price: "$ 158.00",
            in_of_stok: "In stock"
        }
    ]
    // const category = [
    //     {
    //         categoryname: "Watches"
    //     },
    //     {
    //         categoryname: "Mobiles"
    //     },
    //     {
    //         categoryname: "Laptops"
    //     },
    //     {
    //         categoryname: "Tablets"
    //     },
    //     {
    //         categoryname: "Headphones"
    //     },
    //     {
    //         categoryname: "Speakers"
    //     },

    // ]
    // const brands = [
    //     {
    //         brands: "Watches"
    //     },
    //     {
    //         brands: "Mobiles"
    //     },
    //     {
    //         brands: "Laptops"
    //     },
    //     {
    //         brands: "Tablets"
    //     },
    //     {
    //         brands: "Headphones"
    //     },
    //     {
    //         brands: "Speakers"
    //     },

    // ]
    // const customer = [
    //     {
    //         customer: "Watches"
    //     },
    //     {
    //         customer: "Mobiles"
    //     },
    //     {
    //         customer: "Laptops"
    //     },
    //     {
    //         customer: "Tablets"
    //     },
    //     {
    //         customer: "Headphones"
    //     },
    //     {
    //         customer: "Speakers"
    //     },

    // ]

    // const discount = [
    //     {
    //         discount: "Watches"
    //     },
    //     {
    //         discount: "Mobiles"
    //     },
    //     {
    //         discount: "Laptops"
    //     },
    //     {
    //         discount: "Tablets"
    //     },
    //     {
    //         discount: "Headphones"
    //     },
    //     {
    //         discount: "Speakers"
    //     },

    // ]
    const [color, setcolor] = useState(false)
    const [filter,setfilter]=useState(false)
    const [short,setshort] = useState(false)
    return (
        <>
            <section className='container  productsmainpage'>
                <div className="productsmainpage-heading">
                    <h2 className="common-34-1" >{props?.deals ? props.deals : "Apple watches"}  </h2>
                    <div className="btn-next-pages">
                        <Link className="common-16-2" to="/" >Home</Link>
                        <img src={rightlinerright} alt="er" />
                        <Link style={{ color: "#1F292D" }} className="common-16-2" to="/" >Products</Link>
                    </div>
                </div>
                <div className="filter-and-card">
                  {  console.log(filter,"setfilter==")}
                    <Filter filter={filter} setfilter={setfilter} />
                    <div className="products-card-side">
                        <div className="products-card-side-heading">
                            <div className="media-products">
                                <p className="common-16-2" >Showing 1–9 of 200 results </p>
                                <div className="filter-and-sort" >
                                    <button onClick={()=>setfilter(!filter)}  className="btn-tr common-14-3 " >Filter <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M8.33333 15H11.6667V13.3333H8.33333V15ZM2.5 5V6.66667H17.5V5H2.5ZM5 10.8333H15V9.16667H5V10.8333Z" fill="#422659" />
                                    </svg></button>
                                    <button className="btn-tr common-14-3 " >SORT BY <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5.58782 7.74563C5.91221 7.42123 6.43807 7.42095 6.76282 7.74499L9.29366 10.2703C9.68401 10.6598 10.316 10.6598 10.7063 10.2703L13.2372 7.74499C13.5619 7.42095 14.0878 7.42123 14.4122 7.74563C14.7368 8.07027 14.7368 8.59662 14.4122 8.92127L10.7071 12.6263C10.3166 13.0169 9.68342 13.0169 9.29289 12.6263L5.58782 8.92127C5.26318 8.59662 5.26318 8.07027 5.58782 7.74563Z" fill="#422659" />
                                    </svg></button>
                                </div>
                            </div>
                            <div className="sortby">
                                <p className="common-16-2" >Showing 1–9 of 200 results </p>
                                <Shortby short={short} setshort={setshort} />
                                <button  onClick={()=>setshort(!short)}  className="btn-tr common-14-3 " >SORT BY <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.58782 7.74563C5.91221 7.42123 6.43807 7.42095 6.76282 7.74499L9.29366 10.2703C9.68401 10.6598 10.316 10.6598 10.7063 10.2703L13.2372 7.74499C13.5619 7.42095 14.0878 7.42123 14.4122 7.74563C14.7368 8.07027 14.7368 8.59662 14.4122 8.92127L10.7071 12.6263C10.3166 13.0169 9.68342 13.0169 9.29289 12.6263L5.58782 8.92127C5.26318 8.59662 5.26318 8.07027 5.58782 7.74563Z" fill="#422659" />
                                </svg></button>
                            </div>
                        </div>
                        {
                            props?.addsection === true ? (<Cta_banner />) : ("")
                        }
                        <div className="products-cards-group">
                            {
                                data.map((item, index) => {
                                    return (
                                        <Fragment key={index} >
                                            <Productscard productscard={item} />
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="next_previces">
                            <svg className="paginations" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.8415 6.175L11.6665 5L6.6665 10L11.6665 15L12.8415 13.825L9.02484 10L12.8415 6.175Z" fill="#1F292D" />
                            </svg>
                            <div className="pagination">
                                <h1 className="paginations pagination-1" >1</h1>
                                <h1 className=" paginations pagination-1" >2</h1>
                                <h1 className="paginations pagination-1" >...</h1>
                                <h1 className=" paginations pagination-1" >4</h1>
                            </div>
                            <svg className="paginations" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.67542 5.58782C8.35077 5.26318 7.82442 5.26318 7.49978 5.58782C7.17538 5.91221 7.1751 6.43807 7.49914 6.76282L10.0245 9.29366C10.414 9.68401 10.414 10.316 10.0245 10.7063L7.49914 13.2372C7.1751 13.5619 7.17538 14.0878 7.49978 14.4122C7.82442 14.7368 8.35077 14.7368 8.67542 14.4122L12.3805 10.7071C12.771 10.3166 12.771 9.68342 12.3805 9.29289L8.67542 5.58782Z" fill="#1F292D" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <Featured_products card2={2} />
        </>
    )
}

export default Section_1_products

