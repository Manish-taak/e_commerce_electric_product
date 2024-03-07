import React from 'react'
// import dil from '../img/dil.png'
import arrowlinerright from '../img/Arrowlineright.png'
import cartimage from '../img/addtocart.png'
const Card3 = ({ data }) => {
  return (
    <>

      <div className='card-1-fertured card3'>
        <div className="card-image">
          {/* <img className='dil' src={require(`../img/${data.imgs}`)} alt="dil" /> */}
          <img className='featured-card-image' src={`http://localhost:8000/${data?.image}`} alt="card_product_img" />
          {/* <img className='featured-card-image' src={require(`../img/${data.imgs}`)} alt="card_product_img" /> */}
        </div>
        <div className="text-fertured-swiper">
          <div className="text-p-fea">
            <p className='featured-product-detalis common-14-2  '>{data?.name}</p>
          </div>
          <div className='line-x' ></div>
          <div className="fertured-price">
            <p className='common-20-1'>{data?.price}</p>
            <div className="show-hide-card-3">
              <div className="custom-effect-parent">
                <button className=' custom-effect-child1 btn-brand'><img style={{ border: "50px" }} src={cartimage} alt="cartimage" /></button>
                <button className='custom-effect-child2 btn-common'>Add cart</button>
              </div>
            </div>
            <div className="hide-show-card-3">
              <button className='simple-btn-buy-now' > <p className='buy-now-btn' >Buy <img src={arrowlinerright} alt="er" /></p>  </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card3    