import React from 'react'
import downarrayimage from '../img/downarrayimage.png'
const Questions = ({ data }) => {
    // useEffect(() => {
    //     let faqTitle = document.querySelectorAll(".text-btn-help");
    //     for (let i of faqTitle) {
    //         i.addEventListener("click", () => {
    //             console.log("aalu==")
    //             i.classList.toggle("active");
    //             let nextSibling = i.nextElementSibling;
    //             let nextSiblingHeight = nextSibling.scrollHeight;
    //             if (i.classList.contains("active")) {
    //                 nextSibling.setAttribute("style", `height:${nextSiblingHeight}px`);
    //             } else {
    //                 nextSibling.removeAttribute("style");
    //             }       
    //         })
    //     }
    // }, [])
    return (
        <>
            <div className="help-part-3-child-1">
                <div className="text-btn-help ">
                    <p className='common-16-3' style={{ padding: '16px 0' }} >{data.question}</p>
                    <img style={{ padding: '12px' }} src={downarrayimage} alt="downarrayimage" />
                </div>
                <p className='common-16-2 ans'  >
                    {data.answer}
                </p>
            </div>
        </>
    )
}

export default Questions