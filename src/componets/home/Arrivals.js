import { Fragment, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import Card1 from '../cardtypes/card1';
import * as api from '../axios/apis'
import { Link } from 'react-router-dom';
const Arrivals = () => {
    const swiperRef = useRef();

    const [ArrivalsProducts, setArrivalsProducts] = useState([])

    const getProducts = async () => {
        let productsdata = await api.getdata().then((res) => { return res.data }).catch((err) => console.error(err, "erorr"))
        let topbrandsdata = productsdata?.data?.filter((item) => {
            return item.ArrivalsProducts === true
        })
        setArrivalsProducts(topbrandsdata)
    }

    useEffect(() => {
        getProducts()
    }, [])

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
                        // slidesPerView={4}
                        slidesPerView={"auto"}
                        spaceBetween={24}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                    >
                        {
                            ArrivalsProducts.map((item, index) => {
                                return (
                                    < Fragment key={Date.now() + index}>
                                        <SwiperSlide className='products-slider realted_seiperslide'  >
                                            <Link to={`/cart/${item.id}`}>
                                                <Card1 data={item} />
                                            </Link>
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