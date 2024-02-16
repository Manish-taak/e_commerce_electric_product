import React, { Fragment, useState } from 'react'
import Checkoutsignin from './checkoutsignin'
import Delivaryaddress from './delivaryaddress'

const Saveaddress = () => {

  const data = [
    {
      id: "1",
      name: "Ahmad Dorwart",
      address: "3891 Ranchview Dr. Richardson, California 62639"
    },
    {
      id: "2",
      name: "Ahmad Dorwart",
      address: "3891 Ranchview Dr. Richardson, California 62639"
    }
  ]

  const [newaddress, setnewaddress] = useState(false)

  return (
    <>
      <div className="saveaddress-section">
        <h2 className='common-16-3' >Delivery Address</h2>
        {
          data.map((item,index) => {
            return (
              <Fragment key={Date.now() + index} >
                <div className="saveaddress-card">
                  <div className="customer-name-address">
                    <div className="customer-name">
                      <p className='common-20-1' >{item.name}</p>
                      <span className='address-location' >Home</span>
                    </div>
                    <div className="address-info">
                      <div className="customer-address">
                        <p className='common-16-2' >{item.address}</p>
                      </div>
                      <div className="btn-select">
                        <button className="select-address common-15-1-btn ">
                          Select address
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </Fragment>
            )
          })
        }
        {
          newaddress === false &&
          <div className="addnewaddress">
            <button onClick={() => setnewaddress(!newaddress)} className='btn-newaddress  common-15-1-btn btn-customer' >Add new address</button>
          </div>
        }
        {
          newaddress ? <Delivaryaddress open={true} cancel={setnewaddress} /> : ""
        }
      </div>
    </>
  )
}

export default Saveaddress