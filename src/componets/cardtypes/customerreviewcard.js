import React from 'react'
import star from '../img/StarFilled.png'
import userimg from '../img/userboyimage.png'
import whitestar from "../img/trancestar.png"
import manish from "../img/manish.jpg"

const Customerreviewcard = ({ data }) => {

  return (
    <>
      <div className="Customerreviewcard">
        <div className="card-images-text-btns-customer">
          <div className="customer-id">
            <div className="id-photo-address">
              <img style={{
                width: "40px",
                borderRadius: "50%",
                height: "40px"
              }} src={manish} alt="userimg" />
              <div className='customer-card-review-user-name-info' >
                <p className='common-16-4' >{data?.user.name}</p>
                <p className='common-16-2' >{data?.createdAt}</p>
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