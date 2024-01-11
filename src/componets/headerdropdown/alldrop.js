import React, { Fragment } from 'react'

const Alldrop = (props) => {
  const listcategory = [
    {
      id: "1",
      name: "All Typs"
    },
    {
      id: "2",
      name: "Mobiles"
    },
    {
      id: "3",
      name: "Laptops"
    },

    {
      id: "4",
      name: "Watches"
    },
    {
      id: "5",
      name: "Tablets"
    },
    {
      id: "6",
      name: "Headphones"
    },
    {
      id: "1",
      name: "Printers"
    },
  ]
  return (
    <>
      <div style={{ maxWidth: "235px", width: "100%" }} className={props.dropdown ? "dropdownalltypes active" : "dropdownalltypes"}>
        <ul>
          {
            listcategory?.map((item, index) => {
              return (
                <Fragment key={index} >
                  <li className='dropdowncategory' >{item.name}
                    <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                    </svg>
                  </li>
                </Fragment>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Alldrop