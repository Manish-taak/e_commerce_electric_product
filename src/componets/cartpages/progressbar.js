import React from 'react'
import starblack from '../img/Starblack.png'
const Progressbar = () => {
    //   // Progress bars
    //  $(document).ready(function() {
    //   $('.progress .progress-bar').css("width",
    //             function() {
    //                 return $(this).attr("aria-valuenow") + "%";
    //             }
    //     )
    // });


    const data = [
        {
            id: "1",
            numberstarting: "1",
            highestnumber: "94%",
            width: "94"

        },
        {
            id: "2",
            numberstarting: "8",
            highestnumber: "55%",
            width: "55"


        },

        {
            id: "3",
            numberstarting: "5",
            highestnumber: "38%",
            width: "38"


        },

        {
            id: "4",
            numberstarting: "4",
            highestnumber: "10%",
            width: "10"

        },


    ]

    return (
        <>
            {
                data.map((item) => {
                    return (
                        <div className="star-ratting-progress-bar">
                            <div className="starimg-counting">
                                <img src={starblack} alt="" />
                                <span className='span-progress' >{item.numberstarting}</span>
                            </div>
                            <div class="progress">
                                <div className="back-track"></div>
                                <div style={{ width: `${item.width}%` }} className="uper-track"></div>
                            </div>
                            <span className='span-progress' >{item.highestnumber}</span>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Progressbar