import React from 'react'
import rightlinerright from '../img/Arrowlineright.png'
import { Link } from 'react-router-dom'
const Smalllsection = () => {
    return (
        <>
            <div className="productsmainpage-heading">
                <h2 className="common-h-34" >asasasasasas  </h2>
                <div className="btn-next-pages">
                    <Link className="common-p-16-gray" to="/" >Home</Link>
                    <img src={rightlinerright} alt="er" />
                    <Link className="common-p-16" to="/" >Products</Link>
                </div>
            </div>
        </>
    )
}

export default Smalllsection