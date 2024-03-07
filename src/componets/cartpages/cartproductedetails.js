import React, { Fragment } from 'react'

const Cartproductedetails = (props) => {
  return (
    <>
      <div className=" container products-details">
        <h2 className='common-20-1'>Product Details</h2>
        {
          props.data?.data[0]?.ProductDetails.map((item, index) => {
            return (
              <Fragment key={Date.now() + index} >
                <p className='common-16-2' >
                  {item.details}
                </p>
              </Fragment>
            )
          })
        }
      </div>
    </>
  )
}

export default Cartproductedetails