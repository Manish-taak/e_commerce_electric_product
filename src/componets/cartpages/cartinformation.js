import React from 'react'
const Cartinformation = () => {
  const completeoneproductdata = [
    {
      heading: "brand",
      info: "Apple",
      infoImg: "image 27.png"
    },
    {
      heading: "Color",
      info: "Yellow",
    },
    {
      heading: "Special feature",
      info: "Email, GPS, Notifications",
    },
    {
      heading: "Item weight",
      info: "30 Grams",
    },
    {
      heading: "Compatible Devices",
      info: "Smartphone",
    },
    {
      heading: "Style",
      info: "GPS + Cellular",
    }
  ]
  return (
    <>
      <div className="cartinformation container">
        <h2 className='common-20-1'>
          Product Information
        </h2>
        <div >
          <ul className="products-info" >
            {
              completeoneproductdata.map((item, index) => {
                return (
                  <>
                    <li className='products-info-list'>
                      <p className='common-16-4' >{item.heading}</p>
                      <div className="products-image-name">
                        {
                          item?.infoImg &&
                          <img src={require(`../img/${item?.infoImg}`)} alt="apple" />
                        }
                        <p className='common-16-2' >{item.info}</p>
                      </div>
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Cartinformation