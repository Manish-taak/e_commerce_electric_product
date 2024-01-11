import React from 'react'
import { Link } from 'react-router-dom'
import rightlinerright from '../img/Arrowlineright.png'
import copy from '../img/copywhitebtn.svg'
import whitearrowright from '../img/whitearrowright.svg'
import Processorder from './processorder'
import Orderdetailssection from './orderdetailssection'


const Orderinfo = () => {
    return (
        <>
            <div className=" container orderinfo">
                <div className="order-section">
                    <div className="productsmainpage-heading">
                        <h2 className="common-34-1" >Order Details</h2>
                        <div className="btn-next-pages">
                            <Link className="common-16-2" to="/" >Home</Link>
                            <img src={rightlinerright} alt="er" />
                            <Link style={{ color: "#1F292D" }} className="common-16-2" to="/" >Order details</Link>
                        </div>
                    </div>
                    <Link to="/products"  >
                    <button className='btn-tr common-14-3 ' >BYU IT AGAIN</button>
                    </Link>
                </div>
                <div className="order-id">
                    <div className="order-id-part">
                        <div className='res-order'>
                        <p style={{
                            color: "#C4CFD4",
                            lineHeight: "175%",
                            whiteSpace:'nowrap'
                        }} className='common-16-4'  >Order ID</p>
                        <p style={{
                            color: "#FFF",
                            lineHeight: '175%'
                        }} className='common-16-4' >021D0252G56404930</p>
                        </div>
                        
                        <img src={copy} alt="copy" />
                    </div>
                    <div className="order-view-btn">
                        <button style={{
                            color:"#FFF"
                        }} className='common-14-2'  >View all orders</button>
                        <img src={whitearrowright} alt="whitearrowright" />
                    </div>
                </div>
                <div className="order-details-process">
                    <Processorder/>
                    <Orderdetailssection/>
                </div>
            </div>
        </>
    )
}

export default Orderinfo