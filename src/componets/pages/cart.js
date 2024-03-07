import React, { useContext, useEffect, useState } from 'react'
import Cartdetails from '../cartpages/cartdetails'
import Cartinformation from '../cartpages/cartinformation'
import Cartproductedetails from '../cartpages/cartproductedetails'
import Customberreview from '../cartpages/customberreview'
import Cartquestionanswer from '../cartpages/cartquestionanswer'
import Featured_products from '../home/featured_products'
import { useLocation, useParams } from 'react-router-dom';
import * as api from '../axios/apis';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usercontext from '../popupscontaxt/usercontext'

// import Customerreviewcard from '../cardtypes/customerreviewcard'

const Cart = () => {
  const location = useLocation()

  const {tokenuser} = useContext(usercontext)
  console.log(tokenuser,"===token user");

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

  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });;


  return (
    <>
      <div className=" container prodetails-cart-section">
        <Cartdetails data={data} />
        <Cartinformation data={data} />
        <div className="pading-40">
          <div className="  line-x"></div>
        </div>
        <Cartproductedetails data={data} />
        <div className="pading-40">
          <div className="  line-x"></div>
        </div>
        <Customberreview data={data} />
        <div className="pading-40">
          <div className="  line-x"></div>
        </div>
        <Cartquestionanswer data={data} />
        <Featured_products card2={3} />
        <button onClick={notify}>Notify!</button>
        <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          transition={Bounce}
        />
      </div>
    </>
  )
}

export default Cart


