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

const Swipercodecart = ({ checkcolor, product, setPrice }) => {


  useEffect(() => {
    imageZoom('myimage', 'myresult');
  }, []);


  // hover effect 
  function imageZoom(imgID, resultID) {
    let img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    // create lens
    lens = document.createElement("div");
    lens.setAttribute("class", "img-zoom-lens");
    // insert lens
    img.parentElement.insertBefore(lens, img);
    // calculate the ratio between result DIV and lens
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    // set background properties for the result DIV
    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
    // execute a function when someone moves the cursor over the image, or the lens
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    // and also for touch screens
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      let pos, x, y;
      // prevent any other actions that may occur when moving over the image
      e.preventDefault();
      // get the cursor's x and y positions
      pos = getCursorPos(e);
      // calculate the position of the lens
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      // prevent the lens from being positioned outside the image
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      // set the position of the lens
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      // display what the lens "sees"
      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }
    function getCursorPos(e) {
      let a, x = 0, y = 0;
      e = e || window.event;

      // get the x and y positions of the image
      a = img.getBoundingClientRect();

      // calculate the cursor's x and y coordinates, relative to the image
      x = e.pageX - a.left;
      y = e.pageY - a.top;

      // consider any page scrolling
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;

      return { x: x, y: y };
    }
  }

  // hover effect 


  // show big image swiper  
  const [showImg, setshowImg] = useState()
  let [data, setdata] = useState([])
  const imgref = useRef()


  // color code main change hota hai to hey code run hoto hai 
  useEffect(() => {
    filterProductImages();
  }, [checkcolor]);

  const filterProductImages = () => {
    if (checkcolor !== "") {
      let colorProductImage = product.product_color_image.filter((item) => {
        return item.color.color_code === checkcolor
      })
      setdata(colorProductImage);
      setshowImg(`http://localhost:8000/${colorProductImage[0]?.image}`);
      setPrice(colorProductImage[0]?.price);
    }
  }
  // small swiper se get kiya huwa path means url 
  function chooseImg(e) {
    let selectimg = e.currentTarget.src;
    setshowImg(selectimg)
  }

  return (
    <>
      {
        <Fragment>
          <div className="Swipercodecart">
            <div className="swiper-image-section">
              <div className="img-zoom-container">
                <img id="myimage" src={showImg} width="300" height="240" alt="Girl" />
                <div id="myresult" className="img-zoom-result"></div>
              </div>
              {
                // <img className='cartimage' src={showImg} alt="cartimage" />
              }
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
                slidesPerView={"auto"}
                loop={true}
                // breakpoints={{
                //   500: {
                //     slidesPerView: 6,
                //   },
                //   1000: {
                //     slidesPerView: 4,
                //   },
                // }}
                className="mySwiper">
                {
                  data && data?.map((item, index) => {
                    return (
                      <Fragment key={Date.now() + index} >
                        <SwiperSlide style={{
                          width: "124px"
                        }} className='smallimagescart'>
                          <div className='swiperImage' >
                            <img className='image' ref={imgref} onClick={(e) => { chooseImg(e) }} src={`http://localhost:8000/${item.image}`} alt="watchs" />
                          </div>
                        </SwiperSlide>
                      </Fragment>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </Fragment>
      }
    </>
  )
}

export default Swipercodecart