import React from 'react'
import cta_card from '../json/cta_card.json'
const Cta_banner = () => {
    return (
        <>
            <div className="cta_banner container">
                {
                    cta_card.map((index, value) => {
                        return (
                            <>
                                <div className="cta-cards" key={value} >
                                    <div className="cta-card-text">
                                        <div className="cta-card-product-details">
                                            <h2 className='common-h-34' >{index['price_less']}</h2>
                                            <p className='common-p-16' style={{color:"#1F292D"}}  >{index['cta_card_pruduct_name']}</p>
                                            <h3 className='common-p-20' >{index['pruduct_price']}</h3>
                                        </div>
                                        <div className='line-x'></div>
                                        <div className="cta-ellipse">
                                            <img src={require(`../img/${index['ellipes_img_1']}`)} alt="error_color" />
                                            <img src={require(`../img/${index['ellipes_img_2']}`)} alt="error_color" />
                                            <img src={require(`../img/${index['ellipes_img_3']}`)} alt="error_color" />
                                            <img src={require(`../img/${index['ellipes_img_4']}`)} alt="error_color" />
                                        </div>
                                    </div>
                                    <div className="cta-card-image">
                                        <img src={require(`../img/${index['cta_image']}`)} alt="cta_image" />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Cta_banner