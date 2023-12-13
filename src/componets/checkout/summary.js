import React from 'react'

const Summary = (props) => {
 
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
            <button style={{cursor:'pointer'}}  onClick={()=>props.setsection(props.section + 1)}  className='btn-common-main' >  CONTINE PAYMENT </button>
        </div>
    )
}

export default Summary