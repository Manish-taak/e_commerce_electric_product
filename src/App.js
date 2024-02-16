import './App.css';
import Footer from './componets/common/footer';
import Header from './componets/common/header';
import Index from './componets/pages/index.js';
import Products from './componets/pages/products.js';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import TopDeals from './componets/pages/topdeals.js';
import Cart from './componets/pages/cart.js';
import Helpcenter from './componets/helpcenter/help.js';
import Getintuch from './componets/getintuch.js';
import { useContext, useEffect, useState } from 'react';
import Addtocart from './componets/cartpages/addtocart.js';
import Checktout from './componets/pages/checktout.js';
import Orderdetail from './componets/pages/orderdetail.js';
import Wish from './componets/wishlist/wish.js';
import Myaccount from './user/myaccount.js';
import Profile from './user/profile.js';
import Order from './user/order.js';
import Payment from './componets/payment/payment.js';
import Returnorder from './componets/returnorder.js';
import Customercare from './componets/helpcenter/customercare.js';
import Loginmain from './componets/loginRegister/loginmain.js';
import UserOtp from './componets/loginRegister/userOtp.js';
import Mainuseraccount from './componets/loginRegister/mainuseraccount.js';
import Checkoutmain from './componets/checkout/checkoutmain.js';
import Contaxtpop from './contaxtpop.js';
import Error from './componets/error/error.js';
function App() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  return (
    <>
      <Contaxtpop.Provider value={{ setClick, click }}>
        {
          !location.pathname.includes('mainuseraccount') && <Header />
        }
        {/* <Header /> */}
        <Routes>
          <Route element={<Index />} path='/' ></Route>
          <Route element={<Products />} path='/products' ></Route>
          <Route element={<TopDeals />} path='/topDeals' ></Route>
          <Route element={<Helpcenter />} path='/helpcenter' ></Route>
          <Route element={<Getintuch />} path='/getintuch' ></Route>
          <Route element={<Cart />} path='/cart/:id' ></Route>
          <Route element={<Addtocart />} path='/addtocart' ></Route>
          {/* <Route element={<Checktout />} path='/checkout' ></Route> */}
          <Route element={<Checkoutmain />} path='/Checkoutmain/:check' ></Route>
          <Route element={<Orderdetail />} path='/orderdetail' ></Route>
          <Route element={<Wish />} path='/wish' ></Route>
          <Route element={<Myaccount />} path='/myaccount' ></Route>
          <Route element={<Profile />} path='/profile' ></Route>
          <Route element={<Order />} path='/order' ></Route>
          <Route element={<Payment />} path='/payment' ></Route>
          <Route element={<Returnorder />} path='/returnorder' ></Route>
          <Route element={<Customercare />} path='/customercare' ></Route>
          <Route element={<Mainuseraccount />} path='/mainuseraccount/:type' ></Route>
          <Route element={<Error />} path='*' ></Route>
        </Routes>
        {!location.pathname.includes('mainuseraccount') && <Footer />}
        <div className={`${click && "popup-overlay"}`}></div>
      </Contaxtpop.Provider>
    </>
  );
}

export default App;
