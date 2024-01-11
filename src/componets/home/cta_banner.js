import React, { useRef, useState, Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Cta_banner = () => {

    const data =
        [
            {
                price_less: "10% off",
                cta_card_pruduct_name: "Apple MacBook Pro ",
                pruduct_price: "$ 500.00",
                cta_image: "Rectangle 955.png",
                ellipes_img_1: "Ellipse 599.png",
                ellipes_img_2: "Ellipse 600.png",
                ellipes_img_3: "Ellipse 601.png",
                ellipes_img_4: "Ellipse 602.png"
            },
            {
                price_less: "10% off",
                cta_card_pruduct_name: "Apple MacBook Pro ",
                pruduct_price: "$ 500.00",
                cta_image: "Rectangle 955.png",
                ellipes_img_1: "Ellipse 599.png",
                ellipes_img_2: "Ellipse 600.png",
                ellipes_img_3: "Ellipse 601.png",
                ellipes_img_4: "Ellipse 602.png"
            },     {
                price_less: "10% off",
                cta_card_pruduct_name: "Apple MacBook Pro ",
                pruduct_price: "$ 500.00",
                cta_image: "Rectangle 955.png",
                ellipes_img_1: "Ellipse 599.png",
                ellipes_img_2: "Ellipse 600.png",
                ellipes_img_3: "Ellipse 601.png",
                ellipes_img_4: "Ellipse 602.png"
            },     {
                price_less: "10% off",
                cta_card_pruduct_name: "Apple MacBook Pro ",
                pruduct_price: "$ 500.00",
                cta_image: "Rectangle 955.png",
                ellipes_img_1: "Ellipse 599.png",
                ellipes_img_2: "Ellipse 600.png",
                ellipes_img_3: "Ellipse 601.png",
                ellipes_img_4: "Ellipse 602.png"
            }

        ]
    return (
        <>
            <div className=" cta-banner container">
                <div>
                    <Swiper
                        spaceBetween={30}
                        // centeredSlides={true}
                        slidesPerView={2}
                        autoplay={{
                            delay: 2000,
                            // disableOnInteraction: false,
                        }}
                        breakpoints={{
                            300 : {
                                slidesPerView: 1,
                            },
                            768: {
                            //   width: 576,
                              slidesPerView: 2,
                            }
                          }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay,Navigation]}
                        className="mySwiper"
                    >
                        {
                            data.map((index, value) => {
                                return (
                                    <Fragment key={value} >
                                        <SwiperSlide>
                                            <div className="cta-cards"  >
                                                <div className="cta-card-text">
                                                    <div className="cta-card-product-details">
                                                        <h2 className='common-34-1' >{index['price_less']}</h2>
                                                        <p className='common-14-1' style={{ color: "#1F292D" }}  >{index['cta_card_pruduct_name']}</p>
                                                        <h3 className='common-16-3' >{index['pruduct_price']}</h3>
                                                    </div>
                                                    <div className='line-x'></div>
                                                    <div className="cta-ellipse">
                                                        <img src={require(`../img/${index['ellipes_img_1']}`)} alt="error_color" />
                                                        <img src={require(`../img/${index['ellipes_img_2']}`)} alt="error_color" />
                                                        <img src={require(`../img/${index['ellipes_img_3']}`)} alt="error_color" />
                                                        <img src={require(`../img/${index['ellipes_img_4']}`)} alt="error_color" />
                                                    </div>
                                                </div>
                                                <div className="cta-card-image">
                                                    <img src={require(`../img/${index['cta_image']}`)} alt="cta_image" />
                                                </div>
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

export default Cta_banner