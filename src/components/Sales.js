import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Countdown from 'react-countdown';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import './styles/Sales.css';
import SectionTitle from './SectionTitle';
import Button from './Button';
import ProductItem from './ProductItem';
import product1Img from '../images/gamepad-red.png';
import product2Img from '../images/keyboard.png';
import product3Img from '../images/monitor.png';
import product4Img from '../images/chair.png';

function Sales({ targetRef }) {
    const data = [
        { id: 1, image: product1Img, name: 'Havit HV-92 Gamepad', priceFull: 160, priceDiscounted: 120, stars: 5, reviews: 88, label: '-40%', labelType: 'discount' },
        { id: 2, image: product2Img, name: 'AK-90 Wired Keyboard', priceFull: 1160, priceDiscounted: 960, stars: 4, reviews: 75, label: '-35%', labelType: 'discount' },
        { id: 3, image: product3Img, name: 'IPS LCD Gaming Monitor', priceFull: 400, priceDiscounted: 370, stars: 5, reviews: 99, label: '-30%', labelType: 'discount' },
        {
            id: 4,
            image: product4Img,
            name: 'S-Series Comfort Chair',
            priceFull: 400,
            priceDiscounted: 375,
            stars: 4.5,
            reviews: 38,
            label: '-25%',
            labelType: 'discount',
        },
        { id: 5, image: product1Img, name: 'Havit HV-92 Gamepad', priceFull: 160, priceDiscounted: 120, stars: 5, reviews: 88, label: '-40%', labelType: 'discount' },
    ];

    // Countdown
    const now = Date.now();
    const days = 3;
    const hours = 5;
    const minutes = 4;
    const seconds = 20;
    const offset = ((days * 24 + hours) * 60 + minutes) * 60 * 1000 + seconds * 1000; // in milliseconds
    const targetDate = now + offset;
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div ref={targetRef} className="sales__timer">
                <div className="sales__timer-element">
                    <div className="sales__timer-element-value">{days}</div>
                    <div className="sales__timer-element-text">Days</div>
                </div>
                <div className="sales__timer-element">
                    <div className="sales__timer-element-value">{hours}</div>
                    <div className="sales__timer-element-text">Hours</div>
                </div>
                <div className="sales__timer-element">
                    <div className="sales__timer-element-value">{minutes}</div>
                    <div className="sales__timer-element-text">Minutes</div>
                </div>
                <div className="sales__timer-element">
                    <div className="sales__timer-element-value">{seconds}</div>
                    <div className="sales__timer-element-text">Seconds</div>
                </div>
            </div>
        );
    };

    return (
        <section className="sales">
            <div className="container">
                <div className="sales__wrapper">
                    <div className="sales__top">
                        <SectionTitle titleBig="Flash Sales" titleSmaller="Today's" />
                        <Countdown date={targetDate} renderer={renderer} />
                    </div>
                    <div className="sales__bottom">
                        <div className="sales__items">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
                                modules={[Autoplay, Navigation]}
                                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                loop={true}
                                navigation={{
                                    nextEl: '.swiper-button-next--sales',
                                    prevEl: '.swiper-button-prev--sales',
                                }}
                                className="mySwiper2"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {data.map((entry) => (
                                    <SwiperSlide key={entry.id}>
                                        <ProductItem data={entry} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper-button-prev swiper-button-prev--sales"></div>
                            <div className="swiper-button-next swiper-button-next--sales"></div>
                        </div>
                        <Button text="View All Products" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sales;
