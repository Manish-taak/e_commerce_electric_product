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
              <div className='customer-card-review-user-name-info' >
                <p className='common-16-4' >{data?.name}</p>
                <p className='common-16-2' >{data?.date}</p>
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
            <p className=' commentdata common-14-2' >{data?.comment}</p>
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