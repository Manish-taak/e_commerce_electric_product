import React from 'react'
import Questions from '../cardtypes/questions'

const Cartquestionanswer = () => {
  const cartanswer = [
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
    <>
    <div className=" container Cartquestionanswer">
      <p className='common-20-1'  >FAQ.</p>
      {
        cartanswer.map((item) => {
          return (
            <div onClick={(e) => { clickEventt(e) }}>
              <Questions data={item} />
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default Cartquestionanswer