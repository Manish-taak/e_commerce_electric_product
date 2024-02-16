import React, { useEffect, useState } from 'react'
import starimage from '../img/Rating.png'
import dil from '../img/dil.png'
import cartimage from '../img/addtocart.png'

const Productscard = ({ productscard }) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        filterProductImages()
    }, [productscard]);

    const filterProductImages = () => {
        let color = JSON.parse(productscard.colors)[0];
        let colorProductImage = productscard?.product_color_image.filter((item) => {
            return item?.color?.color_code === color?.color_code
        })
        setPrice(colorProductImage[0]?.price);
    }

    return (
        <>
            <div className="card-products-groups">
                <div className="cardimagebox">
                    <img className='products-real-image' src={`http://localhost:8000/${productscard.image}`} alt="imageError" />
                </div>
                <img className='dil-image' src={dil} alt="heart" />
                <div className="products-all-details">
                    <div className="products-price-name">
                        <p className='common-16-2' >{productscard.name}</p>
                        <div className="price-star-ratting">
                            <h3 className='common-24-1' >${price}</h3>
                            <img src={starimage} alt="starimage" />
                        </div>
                    </div>
                    <div className="line-x"></div>
                    <div className="in-stock-and-addto-cart">
                        <p>{productscard.in_of_stok}</p>
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

export default Productscard