import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Enterotp from '../verifyprocess/enterotp'
import Contaxtpop from '../../contaxtpop'
import Thirdpartyproces from '../verifyprocess/thirdpartyprocess.js'

const Summary = (props) => {
    const [show, setShow] = useState(false)
    const {setClick } = useContext(Contaxtpop);
    return (
        <div className="summary">
            <div className="summary-heading">
                <h2 className='common-20-1' >Summary</h2>
                <div className="line-x"></div>
            </div>
            <div className="subtotal">
                <div className='summary-justify' >
                    <p className='common-16-4' >Subtotal</p>
                    <p className='common-16-2' >$320.00</p>
                </div>
                <div className="summary-justify">
                    <p className='common-16-4' >Shipping</p>
                    <p className='common-16-2' >$320.00</p>
                </div>
            </div>
            <div className="line-x"></div>
            <div className="summary-justify">
                <p className='common-16-4'  >2 Item</p>
                <p className='common-16-5' >Edit</p>
            </div>
            <div className="line-x"></div>
            <div className="summary-justify">
                <p className='common-16-4'  >Total amount</p>
                <p className='common-24-1' >$530.00</p>
            </div>
            <Link>
                <button style={{ cursor: 'pointer', width: "100%" }} onClick={() => { props.setsection(props.section + 1); setShow(true); setClick(true) }} className='btn-common-main' > CONTINUE PAYMENT </button>
            </Link>
            {
                show && <Thirdpartyproces setClick={setClick} setShow={setShow} />
            }
        </div>
    )
}

export default Summary