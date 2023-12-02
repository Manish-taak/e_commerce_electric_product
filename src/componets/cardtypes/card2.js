import React from 'react'
import img1 from '../img/Rating.png'
import img2 from '../img/Arrowlineright.png'
import arrowlinerright from '../img/Arrowlineright.png'



const Card2 = ({ data }) => {
  return (
    <>
      <div className='top-card-1 card2'>
        <div className="top-card-images">
          <img src={require(`../img/${data.img}`)} alt='top_image' />
        </div>
        <div className="top-card-text">
          <p className='common-20-1' >{data.price}</p>
          <img src={img1} alt="" />
          <h2 className='common-24-1' >{data.textH2}</h2>
          <button className='  simple-btn-buy-now' > BUY <img src={img2} alt="btn-buy" /> </button>
          <button className='with-out-respons' >Buy <img src={arrowlinerright} alt="er" /> </button>
        </div>
      </div>
    </>
  )
}

export default Card2