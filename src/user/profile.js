import React from 'react'
import SectionHeading from '../snippets/sectionHeading'
import Usercard from '../snippets/usercard'
import userimg from '../componets/img/userimg.svg'
import { Link } from 'react-router-dom'
import arrowdowndrop from '../componets/img/ArrowDropDownOutlined.png'

const Profile = () => {
    return (
        <>
            <div className="profile container ">
                <SectionHeading head={"My account"} link1={"Home"} link2={"My accounts"} link3={"Profile"} />
                <div className="Personal-account">
                    <Usercard profile={true} img={userimg} name={"Tiana Baptista"} delaits={"tim.jennings@example.com"} />
                </div>
                <div className="Personal-information">
                    <div className="Personal-info-heading">
                        <h2 className='common-20-1' >
                            Personal information
                        </h2>
                        <Link to="#" ><p>Edit</p></Link>
                    </div>
                    <div className="personal-info-get">
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Full name' />
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Last name' />
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Email address' />
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Mobile no.   ' />
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Address' />
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Second address' />
                        <div className="optional">
                            <input className='optional-inpuit common-16-2' type="text" placeholder='Address 1' />
                            <img src={arrowdowndrop} alt="location" />
                        </div>
                        <div className="optional">
                            <input className='optional-inpuit common-16-2' type="text" placeholder='Address 1' />
                            <img src={arrowdowndrop} alt="location" />
                        </div>
                    </div>
                    <div className="btns-cancel-save">
                        <button className=' common-15-1-btn cancel-btn-profile btn-customer' >cancel</button>
                        <button  className='btn-common-main'>Save changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile