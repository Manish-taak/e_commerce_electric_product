import React from 'react'
import starimage from '../img/Rating.png'
import dil from '../img/dil.png'
import cartimage from '../img/addtocart.png'

const Productscard = ({productscard}) => {
    return (
        <>
            <div className="card-products-groups">
                <img className='products-real-image' src={require(`../img/${productscard.image}`)} alt="er" />
                <img className='dil-image' src={dil} alt="heart" />
                <div className="products-all-details">
                    <div className="products-price-name">
                        <p className='common-16-2' >{productscard.productsname}</p>
                        <div className="price-star-ratting">
                            <h3>{productscard.price}</h3>
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