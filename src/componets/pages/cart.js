import React from 'react'
import Cartdetails from '../cartpages/cartdetails'
import Cartinformation from '../cartpages/cartinformation'
import Cartproductedetails from '../cartpages/cartproductedetails'
import Customberreview from '../cartpages/customberreview'
import Cartquestionanswer from '../cartpages/cartquestionanswer'
import Featured_products from '../home/featured_products'
import { useLocation } from 'react-router-dom';

// import Customerreviewcard from '../cardtypes/customerreviewcard'

const Cart = () => {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <>
      <div className=" container prodetails-cart-section">
        <Cartdetails />
        <Cartinformation />
        <div className="pading-40">
          <div className="  line-x"></div>
        </div>
        <Cartproductedetails />
        <div className="pading-40">
          <div className="  line-x"></div>
        </div>
        <Customberreview />
        <div className="pading-40">
          <div className="  line-x"></div>
        </div>
        <Cartquestionanswer />
        <Featured_products card2={3} />
      </div>
    </>
  )
}

export default Cart