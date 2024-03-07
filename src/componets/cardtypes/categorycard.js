import React, { Fragment } from 'react'
import btnright from '../img/Arrowlineright.png'
const Categorycard = ({ cardsdata }) => {
    return (
        <>
            <div className="category-cards cardcategory">
                <div className='category-card-headding' >
                    <h2 className='common-20-1 media-categort-text-card'>{cardsdata.subcategory_name}</h2>
                </div>
                <div className="category-cards-images">
                    {
                        cardsdata.image.map((item, index) => {
                            return (
                                <Fragment key={Date.now() + index} >
                                    <img src={`http://localhost:8000/${item}`} alt="r3" />
                                </Fragment>
                            )
                        })
                    }
                </div>
                <div className='category-btn-view' >
                    <button className='view-all-btn common-14-3'>View all <img src={btnright} alt="btnright" /></button>
                </div>
            </div>
        </>
    )
}

export default Categorycard

