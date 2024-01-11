import React from 'react'
import icic from '../img/icic.svg'
import arrowdown from '../img/ArrowDropDownOutlined.png'
import union from '../img/union.svg'
import OptionCheckbox from '../../snippets/optionCheckbox'
const Emi = () => {
  const emidata = [
    {
      month: "$180.00x3",
      amount: "100%",
      totalcost: "$51240.00",
      Status: "available"
    },
    {
      month: "$140.00x4",
      amount: "14%",
      totalcost: "$1240.00",
      Status: "available"
    },
    {
      month: "$120.00x5",
      amount: "14%",
      totalcost: "$540.00",
      Status: "available"
    },
    {
      month: "$100.00x6",
      amount: "14%",
      totalcost: "$580.00",
      Status: "available"
    },
    {
      month: "$80.00x8",
      amount: "14%",
      totalcost: "$640.00",
      Status: "available"
    },
  ]
  return (
    <>
      <div className="emi">
        <div className="emi-payment-option">
          <OptionCheckbox url={icic} label={"Debit Card EMI"} />
          <OptionCheckbox url={union} label={"Credit Card EMI"} />
        </div>
        <div className="line-x"></div>
        <div className="common-justify-bt">
          <p className='common-16-3' >No Cost EMI</p>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="optional">
          <input className='optional-inpuit common-16-2' type="text" placeholder='HDFC bank credit card' />
          <img src={arrowdown} alt="arrowdowndrop" />
        </div>
        <div className="emiplan">
          <p style={{
            textTransform: 'capitalize'
          }} className=' emiplan-p common-14-2' >EMI Plan </p>
          <table className='emi-table'  >
            {/* <tr className='emi-table-tr common-14-4 ' >
              <th className='emi-th' >EMI (Month)</th>
              <th className='emi-th' >Interest (Amount)</th>
              <th className='emi-th' >Tatal Cost</th>
              <th style={{ padding: '6px 10px', width: '160px', textAlign: 'start' }} >Status</th>
            </tr> */}
            <tr>
              <td style={{width:"180px"}} className='head-td' >EMI (Month)</td>
              <td style={{width:"180px"}} className='head-td' >Interest (Amount)</td>
              <td style={{width:"180px"}} className='head-td' >Tatal Cost</td>
              <td  style={{width:"160px"}}className='head-td' >Statuss</td>
            </tr>
            {
              emidata.map((item) => {
                return (
                  <>
                    <tr className='emi-table-td' >
                      <td className='month-td' >
                        <label className='common-14-4' htmlFor="">
                          <input className='checkbox-input' type="checkbox" name="" id="" />
                          {item.month}
                        </label>
                      </td>
                      <td className='ammount-td common-14-2 ' >{item.amount}</td>
                      <td className='ammount-td common-14-2 ' >{item.totalcost}</td>
                      <td className='btn-available'  ><button className='available' >{item.Status}</button></td>
                    </tr>
                  </>
                )
              })
            }
          </table>
        </div>
      </div>
    </>
  )
}

export default Emi