import React from 'react'
import Cartdetails from '../cartpages/cartdetails'
import Cartinformation from '../cartpages/cartinformation'
import Cartproductedetails from '../cartpages/cartproductedetails'
import Customberreview from '../cartpages/customberreview'
import Cartquestionanswer from '../cartpages/cartquestionanswer'
import Featured_products from '../home/featured_products'
// import Customerreviewcard from '../cardtypes/customerreviewcard'

const Cart = () => {
  return (
    <>
        <Cartdetails/>
        <Cartinformation/>
        <Cartproductedetails/>
        <Customberreview/>
        <Cartquestionanswer/>
        <Featured_products card2={3} />
        
        
    </>
  )
}

export default Cart