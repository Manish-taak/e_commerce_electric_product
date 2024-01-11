import React from 'react'
import Usercard from '../snippets/usercard'
import userimg from '../componets/img/userimg.svg'
import order from '../componets/img/order.svg'
import payment from '../componets/img/payment.svg'
import chats from '../componets/img/chats.svg'
import coupons from '../componets/img/coupons.svg'
import wishlist from '../componets/img/wishlist.svg'
import logout from '../componets/img/logout.svg'
import SectionHeading from '../snippets/sectionHeading'
import right from '../componets/img/Arrowlineright.png'
import loacker from '../componets/img/loacker.png'
import sunil from '../componets/img/sunil.jpeg'

// import 


const Myaccount = () => {
    return (
        <div className=" container  myaccount">
            <SectionHeading head={"My account"} link1={"Home"} link2={"My accounts"} />
            <div className="account-all-card">
                <Usercard useracc={true} arrow={right} img={sunil} name={"Tiana Baptista"} delaits={"tim.jennings@example.com"} />
                <Usercard useracc={true} arrow={right} img={order} name={"My orders"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
                <Usercard useracc={true} arrow={right} img={payment} name={"Payment"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
                <Usercard useracc={true} arrow={right} img={chats} name={"Chats"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
                <Usercard useracc={true} arrow={right} img={coupons} name={"Coupons"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
                <Usercard useracc={true} arrow={right} img={wishlist} name={"Wishlist"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
                <Usercard useracc={true} arrow={right} img={loacker} name={"Login & Security"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
                <Usercard useracc={true} arrow={right} img={logout} name={"Logout"} delaits={"Lorem ipsum dolor sit amet, consectetur .."} />
            </div>
        </div>
    )
}

export default Myaccount