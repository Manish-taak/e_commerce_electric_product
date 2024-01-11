import React from 'react'
import DebitCredit from '../checkout/debitCredit'
import SectionHeading from '../../snippets/sectionHeading'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <>
            <div className=" container payment">
                <div className="payment-top-section ">
                    <SectionHeading head={"Payment"} link1={"Home"} link2={"Payment"} />
                    <div className="btns-payments-top">
                        <Link className='common-15-1-btn' to="#">UPI Payment</Link>
                        <button className='btn-common-main' >Cards (debit, credit)</button>
                    </div>
                </div>
                <div className="debit-options">
                   <p  className=' save-text common-20-1' >Save Cards</p>
                    <DebitCredit remove={true} sideEX={true} />
                </div>
            </div>
        </>
    )
}

export default Payment