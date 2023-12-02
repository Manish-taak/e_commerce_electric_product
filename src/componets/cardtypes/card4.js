import React from 'react'
import dil from '../img/dil.png'
import rightarrow from '../img/Arrowlineright.png'
const Card4 = ({card4}) => {

  return (
    <>
      <div  className='card-1-related card4 '>
        <div className="card-image">
          <img className='dil' src={dil} alt="dil" />
          {
            <img style={{ width: "100%", }} src={require(`../img/${card4.imgs}`)} alt="card_product_img" />
          }
          
        </div>
        <div className="text-related-swiper">
          <div className="text-p-fea-related common-16-2 overflow-text ">
            {card4.heading}
          </div>
          <div className='line-x' ></div>
          <div className="related-price">
            <p className='common-20-1' >  {card4.price}</p>
            <button className=' related-btn  common-14-3'>Buy <img src={rightarrow} alt="rightarrow" /> </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card4