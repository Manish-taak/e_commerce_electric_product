
import React, { Fragment, useState } from 'react'
import Customerreviewcard from '../cardtypes/customerreviewcard'
import cartimg1 from '../img/cart.png'
import star from '../img/StarFilled.png'
import Progressbar from './progressbar'

const Customberreview = (props) => {
  // const reviewdata = [
  //   {
  //     name: "Craig Septimus",
  //     date: "6 July 2021",
  //     comment: "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed."
  //   },
  //   {
  //     name: "Gretchen Vaccaro",
  //     date: "7 July 2021",
  //     comment: "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed."
  //   },
  //   {
  //     name: "Justin Kenter",
  //     date: "8 July 2021",
  //     comment: "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed."
  //   },
  // ]



  const reviews = props?.data?.data[0]?.Produsts_Review || [];


  return (
    <section className='container  Customberreview-main ' >
      <h2 className='common-20-1' >Customer reviews</h2>
      <div className="  Customberreview">
        <div className="product-star-ratting">
          <div className="star-ratting">
            <div className="ratting-customer">
              <p className='common-16-3 ' >Rating</p>
              <div className="counting-star">
                <p className='common-16-3 ' >4.8 Out of 5</p>
                <img src={star} alt="star" />
              </div>
            </div>
            <div className="line-x"></div>
            <div className="star-counting-with-persent">
              <Progressbar />
            </div>
          </div>
          <div className="product-ratting">
            <img src={cartimg1} alt="cartimg1" />
          </div>
        </div>
        <div className="line-x"></div>
        <div className="reviewcard-btn">
          <div className='reviewcard' >
            {
              props?.data?.data[0].Produsts_Review.map((item, index) => {
                // console.log(index > 0)
                return (
                  <Fragment key={Date.now() + index} >
                    <Customerreviewcard data={item} />
                  </Fragment>
                )
              })
            }
          </div>
          <div className="btn-review-card">
            {
              reviews.length > 2 === true && (
                <button className=' btn-see-all-reviews btn-common-main' >See all reviews</button>
              )
              // console.log("Number of reviews:", reviews.length)
            }
          </div>
        </div>
      </div>
    </section>

  )
}

export default Customberreview



// const reviews = props?.data?.data[0]?.Produsts_Review || [];

// console.log("Number of reviews:", reviews.length);

// return (
//   <div>
//     {reviews.map((item, index) => (
//       <Fragment key={Date.now() + index}>
//         <Customerreviewcard data={item} />
//       </Fragment>
//     ))}
//   </div>
// );