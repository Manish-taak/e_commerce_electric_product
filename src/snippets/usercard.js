import React from 'react'

const Usercard = ({ profile, useracc, name, img, delaits, arrow }) => {
    return (
        <>
            {
                useracc === true &&
                <div className="usercard">
                    <div className="user-account">
                        <div className="user-acc-id">
                            <img src={img} alt="userimg" />
                            <div className="user-account-details" >
                                <p className='username ' >{name}</p>
                                <p className='userid-name' >{delaits}</p>
                            </div>
                        </div>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            }
            {profile === true &&
                <div className="usercard">
                    <div className="profile-acc">
                        <div className="user-acc-id">
                            <img src={img} alt="userimg" />
                            <div className="res-profile-500">
                                <div className="user-account-details" >
                                    <p className='username ' >{name}</p>
                                    <p className='userid-name' >{delaits}</p>
                                </div>
                                <div className=" profile-line line-x"></div>
                                <button className=' common-15-1-btn  btn-customer' > CHOSE IMAGE </button>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Usercard