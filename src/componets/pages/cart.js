import React, { useEffect, useState } from 'react'
import Cartdetails from '../cartpages/cartdetails'
import Cartinformation from '../cartpages/cartinformation'
import Cartproductedetails from '../cartpages/cartproductedetails'
import Customberreview from '../cartpages/customberreview'
import Cartquestionanswer from '../cartpages/cartquestionanswer'
import Featured_products from '../home/featured_products'
import { useLocation, useParams } from 'react-router-dom';
import * as api from '../axios/apis';


// import Customerreviewcard from '../cardtypes/customerreviewcard'

const Cart = () => {
  const location = useLocation()
  console.log(location.pathname);

  const [data, setdata] = useState();
  // get id useparams 
  const { id } = useParams();
  let singleproductdata = async () => {
    try {
      let response = await api.singleproductdata(id);
      if (response.status === 200) {
        setdata(response.data);
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    singleproductdata()
  }, [])

  return (
    <>
      <div className=" container prodetails-cart-section">
        <Cartdetails data={data} />
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