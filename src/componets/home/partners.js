import React from 'react'
import part1 from '../img/part_1.png'
import part2 from '../img/part_2.png'
import part3 from '../img/part_3.png'
import part4 from '../img/part_4.png'
import part5 from '../img/part_5.png'
import part6 from '../img/part_6.png'

const Partners = () => {
    const parnerJSon = [
        {
            heading: "  boAt Wave Lite Smartwa. boAt Wave Lite Smartwa.I Phone Apple ",
            price: "$ 300.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "  boAt Wave Lite Smartwa. boAt Wave Lite Smartwa.I Phone Apple ",
            price: "$ 300.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "  boAt Wave Lite Smartwa. boAt Wave Lite Smartwa.I Phone Apple ",
            price: "$ 300.00",
            imgs: "Rectangle 924.png"
        },
    ]
    return (
        <>
            <section className='section_partners' >
                <div className="partners container ">
                    <p className='common-20-1' >Our partners </p>
                    <div>
                        <ul className='partners_imges' >
                            <li><img className='hover_partners' src={part1} alt="part1" /></li>
                            <li><img className='hover_partners' src={part2} alt="part2" /></li>
                            <li><img className='hover_partners' src={part3} alt="part3" /></li>
                            <li><img className='hover_partners' src={part4} alt="part4" /></li>
                            <li><img className='hover_partners' src={part5} alt="part5" /></li>
                            <li><img className='hover_partners' src={part6} alt="part6" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners