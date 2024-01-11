import React from 'react'
import downarrayimage from '../img/downarrayimage.png'


const Cartquestionanswer = () => {
  const cartanswer = [
    {
      id: "1",
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
    {
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
    {
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tinciduntConsectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tinciduntConsectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tinciduntConsectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
    {
      question: "Sed eu, fames at accumsan vitae in tristique turpis.",
      answer: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
    },
  ]
  function sidebarAccordion(e) {
    let sibbling = e.currentTarget.nextSibling
    let getheight = sibbling.scrollHeight
    if (!sibbling.getAttribute('style')) {
      sibbling.style.height = `${getheight}px`
    }
    else {
      sibbling.removeAttribute('style')
    }
  }
  function rotate(e){
    let currentvalue = e.currentTarget.lastChild;
    if(!currentvalue.getAttribute("style")){
      currentvalue.style.transform = "rotate(180deg)";
    }
    else{
      currentvalue.removeAttribute('style')
    }
  }
  return (
    <>
      <div className=" container Cartquestionanswer">
        <p className='common-20-1'  >FAQ.</p>
        {
          cartanswer.map((item) => {
            return (
              <div className="help-part-3-child-1">
                <div   onClick={(e) => {
                  sidebarAccordion(e)
                  rotate(e);
                  }} className="text-btn-help ">
                  <p className='common-16-3' style={{ padding: '16px 0' }} >{item.question}</p>
                  <img className='arrow-down' src={downarrayimage} alt="downarrayimage" />
                </div>
                <p className='common-16-2 ans'  >
                  {item.answer}
                </p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cartquestionanswer