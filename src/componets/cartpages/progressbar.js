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
    return (
        <>
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div className="star-ratting-progress-bar">
                        <div className="starimg-counting">
                           <img src={starblack} alt="" />
                            <span className='span-progress' >5</span>
                        </div>
                        <div class="progress skill-bar ">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <span className='span-progress' >88%</span>
                    </div>
                    <div className="star-ratting-progress-bar">
                        <div className="starimg-counting">
                           <img src={starblack} alt="" />
                            <span className='span-progress' >5</span>
                        </div>
                        <div class="progress skill-bar ">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <span className='span-progress' >88%</span>
                    </div>
                    <div className="star-ratting-progress-bar">
                        <div className="starimg-counting">
                           <img src={starblack} alt="" />
                            <span className='span-progress' >5</span>
                        </div>
                        <div class="progress skill-bar ">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" width='88%' aria-valuemax="100">
                            </div>
                        </div>
                        <span className='span-progress' >88%</span>
                    </div>
                    <div className="star-ratting-progress-bar">
                        <div className="starimg-counting">
                           <img src={starblack} alt="" />
                            <span className='span-progress' >5</span>
                        </div>
                        <div class="progress skill-bar ">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <span className='span-progress' >88%</span>
                    </div>
                    <div className="star-ratting-progress-bar">
                        <div className="starimg-counting">
                           <img src={starblack} alt="" />
                            <span className='span-progress' >5</span>
                        </div>
                        <div class="progress skill-bar ">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <span className='span-progress' >88%</span>
                    </div>
                    <div className="star-ratting-progress-bar">
                        <div className="starimg-counting">
                           <img src={starblack} alt="" />
                            <span className='span-progress' >5</span>
                        </div>
                        <div class="progress skill-bar ">
                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <span className='span-progress' >88%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progressbar