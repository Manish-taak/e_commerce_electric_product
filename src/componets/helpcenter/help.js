import React, { Fragment, useState } from 'react'
import rightlinerright from '../img/Arrowlineright.png'
import { Link } from 'react-router-dom'
import imghelp from '../img/helpcenter.png'
// import downarrayimage from '../img/downarrayimage.png'
import Questions from '../cardtypes/questions'

const Help = () => {
  const answers = [
    {
      id: "1",
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
    {
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
    {
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
    {
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
  ]

  function clickEventt(e) {
    e.currentTarget.classList.toggle("aalu");
  }

  return (
    <Fragment>
      <section className='container'>
        <div className="helpcenter">
          <div className="help-part-1">
            <div className="productsmainpage-heading">
              <h2 className="common-34-1" >Help Center  </h2>
              <div className="btn-next-pages">
                <Link className="common-16-2" to="/" >Home</Link>
                <img src={rightlinerright} alt="er" />
                <Link style={{ color: "#1F292D" }} className="common-16-2" to="/" >Products</Link>
              </div>
            </div>
            <div className="help-second-child">
              <div className="help-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.5445 11.0222C16.5445 14.0721 14.0721 16.5445 11.0222 16.5445C7.97238 16.5445 5.5 14.0721 5.5 11.0222C5.5 7.97238 7.97238 5.5 11.0222 5.5C14.0721 5.5 16.5445 7.97238 16.5445 11.0222ZM15.5848 17.0033C14.3192 17.9701 12.7378 18.5445 11.0222 18.5445C6.86782 18.5445 3.5 15.1766 3.5 11.0222C3.5 6.86782 6.86782 3.5 11.0222 3.5C15.1766 3.5 18.5445 6.86782 18.5445 11.0222C18.5445 12.7379 17.9701 14.3193 17.0032 15.5849L20.2083 18.79C20.5988 19.1805 20.5967 19.8158 20.2062 20.2063C19.8157 20.5968 19.1804 20.5989 18.7899 20.2084L15.5848 17.0033Z" fill="#574B9B" fillOpacity="0.54" />
                </svg>
                <input className='input-help' type="text" placeholder='Search' />
              </div>
            </div>
          </div>
          <div className="help-part-2">
            <div className="help-link">
              <ul>
                <li className='  common-14-2' >orders</li>
                <li className='common-14-2'>billing</li>
                <li className='common-14-2'>Returns</li>
                <li className='common-14-2'>Careers</li>
                <li className='common-14-2'>Others</li>
              </ul>
            </div>
            <img src={imghelp} alt="helpimg" />
          </div>
          <div className="help-part-3">
            {
              answers.map((item) => {
                return (
                  <Fragment key={item.id} >
                    <div onClick={(e) => { clickEventt(e) }}>
                      <Questions data={item}/>
                    </div>
                  </ Fragment>
                )
              })
            }
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Help