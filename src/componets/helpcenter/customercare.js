import React, { useState } from 'react'
import SectionHeading from '../../snippets/sectionHeading'
import test from '../img/testing.svg'
import userdp from '../img/userDp.svg'
import voice from '../img/voice.svg'
import send from '../img/send.svg'
import gell from '../img/Gellary.svg'
import emoji from '../img/Emoji.svg'
import Usercard from '../../snippets/usercard'
import right from '../img/Arrowlineright.png'
import left from '../img/KeyboardArrowLeftOutlined.svg'

const Customercare = () => {
    const chatsauto = [
        {
            id: "1",
            chats: "Hi, I'm the Support Assistant",
        },
        {
            id: "2",
            chats: "Product Information refers to any information held by an organisation",
        },
        {
            id: "3",
            chats: "about the products it produces, buys, sells or distributes. In the context",
        },
        {
            id: "4",
            chats: "of Product Information management (PIM), this typically refers to information relating",
        },
        {
            id: "5",
            chats: "to the selling and/or marketing of products via digital channels.",
        },
    ]

    const [open, setopen] = useState(false)
    return (
        <>
            <div className="customercare container ">
                <SectionHeading head={"Help Center"} head2={"(Customer care)"} link1={"Home"} link2={"Product details"} link3={"Customer care"} />
                <div onClick={() => setopen(!open)} className="userchat-app">
                    <Usercard useracc={true} img={userdp} name={"Customer Service"} arrow={right} />
                </div>
                <div className="products-overview">
                    <div className="products-overview-left-side">
                        <div className="overview-left-side-top">
                            <div className='overview-products-name' >
                                <p className='common-20-1' >Apple watch SE </p>
                                <p className='common-16-2' >Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
                            </div>
                            <p className='common-14-4' ><span style={{ color: "#1F292D", textTransform: "none" }} className='common-14-2' >Color</span > Black</p>
                            <p className='common-34-1' >$320.00</p>
                        </div>
                        <div className="img-over-view">
                            <img src={test} alt="test-w" />
                        </div>
                    </div>
                    <div className={open === true ? "Customer-Service chat-on  " : "Customer-Service"}>
                        <div onClick={()=>setopen(false)} className='customer-revove-btn-chat' >
                            <div  className="customer-top-heading">
                                <img src={userdp} alt="userdp" />
                                <p>Customer Service</p>
                            </div>
                            <img  className='colse-btn-chat' src={left} alt="right" />
                        </div>
                        <div className="chat-section">
                            {
                                chatsauto.map((item) => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <div className="auto-chat">
                                                <p className='auto-chat-sec common-16-2 ' >{item.chats}</p>
                                                <p className='time-chats' >2:30 pm</p>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                            <div className="btns-chats-sec">
                                <button style={{ color: "#2E7D32" }} className='chat-btn' >Faster Delivery Request</button>
                                <button style={{ color: "#FFB900" }} className='chat-btn' >Product Information</button>
                                <button style={{ color: "#D32F2F" }} className='chat-btn' >Cancel order</button>
                            </div>
                            {
                                chatsauto.map((item) => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <div className="user-chat">
                                                <p className='user-chat-sec common-16-2 ' >{item.chats}</p>
                                                <p className='time-chats' >2:30 pm</p>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="input-chats">
                            <img src={voice} alt="voice" />
                            <input className='send-message-input' type="text" placeholder='Your message' />
                            <img src={emoji} alt="emoji" />
                            <img src={gell} alt="gell" />
                            <img src={send} alt="send" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customercare