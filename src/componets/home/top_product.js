import React, { Fragment, useEffect, useState } from 'react'
import top4 from '../img/top4.png'
// import ratting from '../img/Rating.png'
// import rightarrow from '../img/Arrowlineright.png'
// import top_product_json from '../json/top_product.json'
import Card2 from '../cardtypes/card2'
import * as api from "../axios/apis"
import { Link } from 'react-router-dom'

const Top_product = (props) => {


    const [topProduct, settopProduct] = useState([])

    const productsdata = async () => {
        let getProducts = await api.getdata().then((res) => {
            return res.data
        }).catch((err) => console.log(err))
        let filtertopproducts = getProducts?.data.filter((item) => {
            return item.sellingproducts === true
        })
        settopProduct(filtertopproducts)
    }


    useEffect(() => {
        productsdata()
    }, [])

    const testData = [
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        },
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        },
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        },
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        }
        ,
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        },
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        },
        {
            img: "Rectangle 770.png",
            textH2: "Bluetooth watchs",
            star: "Rating.png",
            price: "$ 150.00"
        }
    ]


    return (
        <>
            <div className="top_product container  ">
                <div className="top_heading">
                    <h2 className='common-34-1' >
                        Best selling products
                    </h2>
                </div>
                <div className="top-product-cards">
                    {
                        topProduct?.map((item, index) => {
                            return (
                                <Fragment key={Date.now() + index} >
                                    <Link to={`cart/${item.id}`} >
                                        <Card2 data={item} />
                                    </Link>
                                </Fragment>
                            )
                        })
                    }
                    <div className="custom-card-top-product">
                        <img src={top4} alt="" />
                        <div className="overley">
                            <div className="image-text-top-product">
                                <div className="text-1-top">
                                    <h2 className='text-white-best-products' >Product for you</h2>
                                    <p style={{ color: "#fff" }} className='common-14-1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nulla nunc aenean ac donec lectus in vel.</p>
                                </div>
                                <div className="  text-2-top">
                                    <button className=' top-btn btn-common-main' > VIEW ALL </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top_product