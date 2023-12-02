import React from 'react'
import dil from '../img/dil.png'
import ratting from '../img/Rating.png'
import cartimage from '../img/addtocart.png'

const Card1 = ({data}) => {
    return (
        <>
            <div className='card-1-brands'>
                <div className="brand-card-image">
                    <div className='dil-brand'>
                        <button className='new-products' >New</button>
                        <img src={dil} alt="dil" />
                    </div>
                    <img className='top-brands-card-images' src={require(`../img/${data.imgs}`)} alt="brand_product_img" />
                </div>
                <div className="text-brand-swiper">
                    <div className='common-16-2 overflow-text ' style={{ paddingLeft: "20px", WebkitLineClamp: "1", paddingRight: "20px" }} >
                        {data.heading}
                    </div>
                    <div className='line-x' ></div>

                    <div className="brand-price">
                        <div className="brand-product-name">
                            <div className='brand-name' >
                                <p className='common-20-1' >I Phone Apple</p>
                                <img src={ratting} alt="ratting" />
                            </div>
                            <p className='common-24-1'>{data.price}</p>
                        </div>
                        <div className="custom-effect-parent">
                            <button className=' custom-effect-child1 btn-brand'><img style={{ border: "50px" }} src={cartimage} alt="cartimage" /></button>
                            <button className='custom-effect-child2 btn-common'>Add cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1