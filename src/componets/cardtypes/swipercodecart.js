import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cartimage from '../img/cart.png'
import dil from '../img/dil.png'
import freebox from '../img/cartimgbox.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Swipercodecart = ({ checkcolor }) => {
  // show big image swiper  
  const [showImg, setshowImg] = useState()
  const imgref = useRef()

  // color code main change hota hai to hey code run hoto hai 
  useEffect(() => {
    setshowImg(require(`../img/${data[0].img}`))
  }, [checkcolor])

  // small swiper se get kiya huwa path means url 
  function chooseImg(e) {
    let selectimg = e.currentTarget.src;
    setshowImg(selectimg)
  }

  // all products with out filter and all color 
  let alldata = [
    {
      id: "1",
      imgColor: "#FFB400",
      img: "wish1.png"
    },
    {
      id: "2",
      imgColor: "#FFB400",
      img: "wish1.png"
    },
    {
      id: "3",
      imgColor: "#FFB400",
      img: "wish1.png"
    },
    {
      id: "4",
      imgColor: "#FFB400",
      img: "wish1.png"
    },
    {
      id: "5",
      imgColor: "#FFB400",
      img: "wish1.png"
    },
    {
      id: "6",
      imgColor: "#DCE775",
      img: "wish2.png"
    },
    {
      id: "7",
      imgColor: "#DCE775",
      img: "wish2.png"
    },
    {
      id: "8",
      imgColor: "#DCE775",
      img: "wish2.png"
    },
    {
      id: "9",
      imgColor: "#DCE775",
      img: "wish2.png"
    },
    {
      id: "10",
      imgColor: "#DCE775",
      img: "wish2.png"
    },
    {
      id: "11",
      imgColor: "#4FC3F7",
      img: "wish9.png"
    }
    ,
    {
      id: "12",
      imgColor: "#4FC3F7",
      img: "wish9.png"
    }
    ,
    {
      id: "13",
      imgColor: "#4FC3F7",
      img: "wish9.png"
    }
    ,
    {
      id: "14",
      imgColor: "#4FC3F7",
      img: "wish9.png"
    },
    {
      id: "15",
      imgColor: "#4FC3F7",
      img: "wish9.png"
    }
    ,
    {
      id: "16",
      imgColor: "#81C784",
      img: "wish10.png"
    }
    ,
    {
      id: "17",
      imgColor: "#81C784",
      img: "wish10.png"
    }
    ,
    {
      id: "18",
      imgColor: "#81C784",
      img: "wish10.png"
    }
    ,
    {
      id: "19",
      imgColor: "#81C784",
      img: "wish10.png"
    }
    ,
    {
      id: "20",
      imgColor: "#81C784",
      img: "wish10.png"
    }
  ]

  // check the condition and filter data with color base 
  let orenge = alldata.filter((item) => item.imgColor === "#FFB400")
  let green = alldata.filter((item) => item.imgColor === "#DCE775")
  let darkgreen = alldata.filter((item) => item.imgColor === "#81C784")
  let blue = alldata.filter((item) => item.imgColor === "#4FC3F7")

  // alldata selected color 
  // alldata se data filter ho rha hai 
  let data =
    checkcolor === "#FFB400" ? orenge :
      checkcolor === "#DCE775" ? green :
        checkcolor === "#81C784" ? darkgreen :
          checkcolor === "#4FC3F7" ? blue : alldata

  return (
    <>
      <div className="Swipercodecart">
        <div className="swiper-image-section">
          <img className='cartimage' src={showImg} alt="cartimage" />
          <img className='heartimagecart' src={dil} alt="" />
          <div className="freeboxcart">
            <img src={freebox} alt="freebox" />
            <p className='common-16-2' >Free delivered</p>
          </div>
        </div>
        <div className="smallswiper" >
          <Swiper
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              500: {
                slidesPerView: 6,
              },
              1000: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper">
            {
              data?.map((item) => {
                return (
                  <Fragment key={item.id} >
                    <SwiperSlide className='smallimagescart'>
                      <div>
                        <img className='image' ref={imgref} onClick={(e) => { chooseImg(e) }} src={require(`../img/${item.img}`)} alt="watchs" />
                      </div>
                    </SwiperSlide>
                  </Fragment>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Swipercodecart