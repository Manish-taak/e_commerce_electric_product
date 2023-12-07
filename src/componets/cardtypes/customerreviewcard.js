import React from 'react'
import star from '../img/StarFilled.png'
import userimg from '../img/Avatar.png'
const Customerreviewcard = ({data}) => {


  return (
    <>
      <div className="Customerreviewcard">
        <div className="card-images-text-btns-customer">
          <div className="customer-id">
            <div className="id-photo-address">
              <img src={userimg} alt="userimg" />
              <div>
                <p>{data?.name}</p>
                <p>{data?.date}</p>
              </div>
            </div>
            <div className="products-ratting">
              <img src={star} alt="er" />
              <img src={star} alt="er" />
              <img src={star} alt="er" />
              <img src={star} alt="er" />
              <img src={star} alt="er" />
            </div>
          </div>
          <div>
            <p className='common-14-2' >{data?.comment}</p>
          </div>
          <div className="line-x"></div>
          <div className=' btncardcustomer ' >
            <button className=' btn-customer'>
              Helpful
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customerreviewcard