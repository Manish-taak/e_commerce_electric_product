import React from 'react'
import { Link } from 'react-router-dom'
import rightlinerright from '../img/Arrowlineright.png'
import Card4 from '../cardtypes/card4'
import Featured_products from '../home/featured_products'
import rigth from '../img/rightarrow.svg'
import left from '../img/ChevronLeft.svg'


const Wish = () => {
    const realteddata = [
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 300.00",
            imgs: "wish1.png"
        },
        {
            heading: "Samsung Galaxy M12 (Blue, 4GB RAM)",
            price: "$ 253.00",
            imgs: "wish2.png"
        },
        {
            heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
            price: "$ 320.00",
            imgs: "wish3.png"
        },
        {
            heading: "Apple iPhone SE (64 GB) - Midnight",
            price: "$ 400.00",
            imgs: "wish4.png"
        }, {
            heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
            price: "$ 300.00",
            imgs: "wish5.png"
        },
        {
            heading: "Bluetooth Wireless Ear Head phones (35Hrs Playtime)",
            price: "$ 253.00",
            imgs: "wish6.png"
        },
        {
            heading: "Apple iPhone 13 Pro Max (128GB)",
            price: "$ 320.00",
            imgs: "wish7.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish8.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish9.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish10.png"
        },  {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish10.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 300.00",
            imgs: "wish1.png"
        },
        {
            heading: "Samsung Galaxy M12 (Blue, 4GB RAM)",
            price: "$ 253.00",
            imgs: "wish2.png"
        },
        {
            heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
            price: "$ 320.00",
            imgs: "wish3.png"
        },
        {
            heading: "Apple iPhone SE (64 GB) - Midnight",
            price: "$ 400.00",
            imgs: "wish4.png"
        }, {
            heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
            price: "$ 300.00",
            imgs: "wish5.png"
        },
        {
            heading: "Bluetooth Wireless Ear Head phones (35Hrs Playtime)",
            price: "$ 253.00",
            imgs: "wish6.png"
        },
        {
            heading: "Apple iPhone 13 Pro Max (128GB)",
            price: "$ 320.00",
            imgs: "wish7.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish8.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish9.png"
        },
        {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish10.png"
        },  {
            heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
            price: "$ 400.00",
            imgs: "wish10.png"
        }
    ]
    return (
        <>
            <div className=" wish-section container">
                <div className="productsmainpage-heading wishlist ">
                    <h2 className="common-34-1" >My wishlist</h2>
                    <div className="btn-next-pages">
                        <Link className="common-16-2" to="/" >Home</Link>
                        <img src={rightlinerright} alt="er" />
                        <Link style={{ color: "#1F292D" }} className="common-16-2" to="/" >Products</Link>
                    </div>
                </div>

                <div className="products-card-4-use">
                    <p className='common-16-2' >{realteddata?.length} Items</p>
                    <div className="wishlist-products">
                        {
                            realteddata.map((item) => {
                                return (
                                    <>
                                        <Card4 card4={item} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="pagination-number-wish-list">
                        <img src={left} alt="left" />
                        <ul className='paginatino-list-wish' >
                            <li className='common-14-1' >1</li>
                            <li className='common-14-1' >2</li>
                            <li className='common-14-1' >4</li>
                            <li className='common-14-1' >3</li>
                            <li className='common-14-1' >5</li>
                        </ul>
                        <img src={rigth} alt="rigth" />
                    </div>
                </div>
                <Featured_products card2={2} />
            </div>
        </>
    )
}

export default Wish