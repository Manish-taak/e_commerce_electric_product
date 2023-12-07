import React, { Fragment } from 'react'
import close from '../img/UnstyledIconButton.png'

const Sidebar = (props) => {
    const data = [
        {
            id: "1",
            img: "sidebar1.svg",
            name: "Account"
        },
        {
            id: "2",
            img: "sidebar2.svg",
            name: "My orders"
        },
        {
            id: "3",
            img: "sidebar3.svg",
            name: "Wishlist"
        },
        {
            id: "4",
            img: "sidebar4.svg",
            name: "My Cart"
        },
        {
            id: "5",
            img: "sidebar5.svg",
            name: "top deals"
        },
        {
            id: "6",
            img: "sidebar6.svg",
            name: "hot offers"
        },
        {
            id: "7",
            img: "sidebar7.svg",
            name: "pages"
        },
        {
            id: "8",
            img: "sidebar8.svg",
            name: "Help center"
        },
        {
            id: "9",
            img: "sidebar9.svg",
            name: "return policy"
        }

    ]
    return (
        <>
            <div className={props.open ? "sidebar sidebaractive " : "sidebar"}>
                <div className="sidebar1">
                    <div className="userid">
                        <div className="userphotop">
                            
                        </div>
                        <div className="user">
                            <p className='username ' >Tiana Baptista</p>
                            <p className='userid-name' >tim.jennings@example.com</p>
                        </div>
                    </div>
                    <img onClick={() => {
                        props?.setsidebar(false)
                    }} src={close} alt="close" />
                </div>
                <div className="sidebar2">
                    <div className="list-sidebar">
                        {

                            data.map((item) => {
                                return (
                                    <Fragment>
                                        <li className='list-sidebar-li'>
                                            <img src={require(`../img/${item.img}`)} alt="img" />
                                            {item.name}
                                        </li>
                                    </Fragment>
                                )
                            })
                        }
                <div className="sidebar3">
                    <ul className='sidebar-login-signup'>
                        <li>Log in</li>
                        <li>Sign Up</li>
                    </ul>
                    policySupport (+00) 0123456789
                </div>
                    </div>
                    <div onClick={() => { props.setsidebar(false) }} className="sideface"></div>
                </div>

            </div>
        </>
    )
}

export default Sidebar