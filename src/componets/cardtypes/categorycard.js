import React, { Fragment } from 'react'
import btnright from '../img/Arrowlineright.png'
const Categorycard = (props) => {
    return (
        <>
            {
                props.data?.map((item, index) => {
                    return (
                        <Fragment key={index} >
                            <div className="category-cards cardcategory ">
                                <div className='category-card-headding' >
                                    <h2 className='common-20-1 media-categort-text-card  ' >{item['h2_text']}</h2>
                                </div>
                                <div className="category-cards-images">
                                    <img src={require(`../img/${item['img1']}`)} alt="r1" />
                                    <img src={require(`../img/${item['img2']}`)} alt="rr" />
                                    <img src={require(`../img/${item['img3']}`)} alt="r3" />
                                    <img src={require(`../img/${item['img4']}`)} alt="r4" />
                                </div>
                                <div className='category-btn-view' >
                                    <button className='view-all-btn common-14-3'>View all <img src={btnright} alt="btnright" /></button>
                                </div>
                            </div>
                        </ Fragment>
                    )
                })
            }

        </>
    )
}

export default Categorycard