import React from 'react'
import top4 from '../img/top4.png'
import ratting from '../img/Rating.png'
import rightarrow from '../img/Arrowlineright.png'
import top_product_json from '../json/top_product.json'

const Top_product = () => {
    return (
        <>
            <div className="top_product container  ">
                <div className="top_heading">
                    <h2 className='common-h-34' >
                        Best selling products
                    </h2>
                </div>
                <div className="top-product-cards">
                    {
                        top_product_json.map((index, value) => {
                            return (
                                <>
                                    <div className='top-card-1'>
                                        <div className="top-card-images">
                                            <img src={require(`../img/${index["img"]}`)} alt='top_image' />
                                        </div>
                                        <div className="top-card-text">
                                            <p className='common-p-20' >{index["text-h2"]}</p>
                                            <img src={ratting} alt="" />
                                            <h2 className='common-p-24' >{index["price"]}</h2>
                                            <button className='   buy-now-top-product' > BUY <img src={rightarrow} alt="" /> </button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="custom-card-top-product">
                        <img src={top4} alt="" />
                        <div className="overley">
                            <div className="image-text-top-product">
                                <div className="text-1-top">
                                    <h2>Product for you</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nulla nunc aenean ac donec lectus in vel.</p>
                                </div>
                                <div className="  text-2-top">
                                    <button className=' top-btn btn-common' > VIEW ALL </button>
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