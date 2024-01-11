import { Fragment, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import Card1 from '../cardtypes/card1';
const Arrivals = () => {
    const swiperRef = useRef();
    const topbrand = [
        {
            heading: "  boAt Wave Lite Smartwa. boAt Wave Lite Smartwa.I Phone Apple ",
            price: "$ 300.00",
            imgs: "product3.png"
        },
        {
            heading: "boAt Airdopes 2v1.0 Tr..",
            price: "$ 253.00",
            imgs: "product9.png"
        },
        {
            heading: "TWS Earbuds with Mic",
            price: "$ 320.00",
            imgs: "product13.png"
        },
        {
            heading: "boAt Wave Lite Smartwa.. ",
            price: "$ 400.00",
            imgs: "product8.png"
        }, {
            heading: " boAt Wave Lite Smartwa.. ",
            price: "$ 300.00",
            imgs: "product1.png"
        },
        {
            heading: "boAt Wave Lite Smartwa..",
            price: "$ 253.00",
            imgs: "product14.png"
        },
        {
            heading: "boAt Wave Lite Smartwa..",
            price: "$ 320.00",
            imgs: "product4.png"
        },
        {
            heading: "boAt Wave Lite Smartwa.. ",
            price: "$ 400.00",
            imgs: "product2.png"
        }
    ]
    return (
        <Fragment>
            <div className="topbrand container">
                <div className="heading-topbrand-section">
                    <div className="brand-heading">
                        <h2 className='common-34-1' >New Arrivals Products</h2>
                    </div>
                    <div className="left-right-swiper-image-brannd">
                        <img onClick={() => swiperRef.current?.slidePrev()} src={previces} alt="previces" />
                        <div className="midle line-x "></div>
                        <img onClick={() => swiperRef.current?.slideNext()} src={next} alt="next" />
                    </div>
                </div>
                <div>
                    <Swiper className='swiper_brands_parent'
                        slidesPerView={4}
                        spaceBetween={24}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            }
                        }}
                    >
                        {/* {
                            topbrand.map((item, value) => {
                                return (
                                    <Fragment key={value} >
                                        <SwiperSlide className='brand_seiperslide'  >
                                            <Card1 data={item} />
                                            <div className='dil-brand'>
                                                <button className='new-products' >New</button>
                                                <img src={dil} alt="dil-brand" />
                                            </div>
                                        </SwiperSlide>
                                    </Fragment >
                                )
                            })
                        } */}
                        {
                            topbrand.map((item, value) => {
                                return (
                                    < Fragment key={value}>
                                        <SwiperSlide className='brand_seiperslide'  >
                                            <Card1 data={item} />
                                        </SwiperSlide>
                                    </ Fragment>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <button className='btn-common brand-btn-view-all-product  ' > VIEW ALL PRODUCTS  </button>
            </div>
        </Fragment>
    )
}

export default Arrivals