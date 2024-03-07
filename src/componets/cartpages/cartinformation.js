import React from 'react'
const Cartinformation = (props) => {
  const completeoneproductdata = [
    {
      heading: "brand",

    },
    {
      heading: "Color",

    },
    {
      heading: "Special feature",

    },
    {
      heading: "Item weight",

    },
    {
      heading: "Compatible Devices",

    },
    {
      heading: "Style",

    }
  ]
  return (
    <>
      <div className="cartinformation container">
        <h2 className='common-20-1'>
          Product Information
        </h2>
        <div >
          {
            props?.data?.data[0].productsinfo.map((item, index) => {
              return (<>
                <ul className="products-info" >
                  <li className='products-info-list'>
                    <p className='common-16-4' >{item.heading}</p>
                    <div className="products-image-name">
                      {
                        item?.image &&
                        <img src={`http://localhost:8000/${item.image}`} alt="apple" />
                      }
                      <p className='common-16-2' >{item.info}</p>
                    </div>
                  </li>
                </ul>
              </>)
            })
          }



          {/* {
              props?.data?.data[0].productsinfo.map((item, index) => {
                return (<>
                  <li className='products-info-list'>
                    {
                      completeoneproductdata.map((item, index) => {
                        return (<>
                          <p className='common-16-4' >{item.heading}</p>
                        </>)
                      })
                    }
                    <div className="products-image-name">
                      {
                        item?.image &&
                        <img src={`http://localhost:8000/${item.image}`} alt="apple" />
                      }
                      <p className='common-16-2' >pppppppppppp</p>
                    </div>
                  </li>
                </>)
              })
            } */}

          {/* {
              props?.data?.data[0].productsinfo.map((item, index) => {
                console.log(item, "============itemitemitemitemitemitemitemitemitem======================")


                return (
                  <React.Fragment key={Date.now() + index} >
                    <li className='products-info-list'>
                      <p className='common-16-4' >{item.heading}</p>
                      <div className="products-image-name">
                        {
                          item?.image &&
                          <img src={`http://localhost:8000/${item.image}`} alt="apple" />
                        }
                        <p className='common-16-2' >{item.info}</p>
                      </div>
                    </li>
                  </React.Fragment>
                )
              })
            } */}
        </div>
      </div>
    </>
  )
}

export default Cartinformation