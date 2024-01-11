import React from 'react'
import right from '../componets/img/Arrowlineright.png'
import { Link } from 'react-router-dom'

const SectionHeading = ({head , link1 ,link2,link3,head2}) => {
    return (
        <>
            <div className="cartdetalis-heading">
                <h2 className='common-34-1' >{head} <span style={{color:"#495F6A"}} className='common-24-1' >{head2}</span> </h2>
                <div className="cartlink">
                    <li><Link className='common-16-2' to="/" >{link1}</Link></li>
                    <img src={right} alt="right" />
                    <li> <Link className='common-16-2' to="/products" >{link2}</Link> </li>
                    <img src={right} alt="right" />
                    <li><Link className='common-16-2' to="/" >{link3}</Link> </li>
                </div>
            </div>
        </>
    )
}

export default SectionHeading