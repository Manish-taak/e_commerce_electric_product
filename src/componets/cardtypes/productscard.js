import React, { useEffect, useState } from 'react'
import starimage from '../img/Rating.png'
import dil from '../img/dil.png'
import cartimage from '../img/addtocart.png'

const Productscard = ({ productscard }) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        try {
            const filterProductImages = () => {
                let color = JSON.parse(productscard.colors)[0];
                let colorProductImage = productscard?.product_color_image.filter((item) => {
                    return item?.color?.color_code === color?.color_code
                })
                setPrice(colorProductImage[0]?.price);
            }
        } catch (error) {
            console.log(error, "====================filterProductImage ")
        }
    }, [productscard]);



    return (
        <>
            <div className="card-products-groups">
                <div className="cardimagebox">
                    <img className='products-real-image' src={`http://localhost:8000/${productscard?.image}`} alt="imageError" />
                </div>
                {/* <img className='dil-image' src={dil} alt="heart" /> */}
                <svg className='dil-image' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.929 4.04888C14.929 3.54893 12.929 7.04881 11.929 7.04881C10.929 7.0488 9.59575 3.64158 5.92902 4.04885C2.26229 4.45613 0.929029 8.20934 2.929 12.2094C4.92898 16.2094 8.92901 20.0489 11.929 20.0489C14.929 20.0489 18.929 16.2094 20.929 12.2094C22.929 8.20934 20.929 4.54883 17.929 4.04888Z" stroke="#495F6A" stroke-width="2" />
                </svg>
                <div className="products-all-details">
                    <div className="products-price-name">
                        <p className='common-16-2' >{productscard?.name}</p>
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