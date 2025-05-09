import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import SectionTitle from './SectionTitle';
// import item1Icon from '../icons/Category-CellPhone.svg';
// import item2Icon from '../icons/Category-Computer.svg';
// import item3Icon from '../icons/Category-SmartWatch.svg';
// import item4Icon from '../icons/Category-Camera.svg';
// import item5Icon from '../icons/Category-Headphone.svg';
// import item6Icon from '../icons/Category-Gamepad.svg';
import { ReactComponent as item1Icon } from '../icons/Category-CellPhone.svg';
import { ReactComponent as item2Icon } from '../icons/Category-Computer.svg';
import { ReactComponent as item3Icon } from '../icons/Category-SmartWatch.svg';
import { ReactComponent as item4Icon } from '../icons/Category-Camera.svg';
import { ReactComponent as item5Icon } from '../icons/Category-Headphone.svg';
import { ReactComponent as item6Icon } from '../icons/Category-Gamepad.svg';
import './styles/Categories.css';

function Categories() {
    const data = [
        { id: 1, name: 'Phones', image: item1Icon },
        { id: 2, name: 'Computers', image: item2Icon },
        { id: 3, name: 'SmartWatch', image: item3Icon },
        { id: 4, name: 'Camera', image: item4Icon },
        { id: 5, name: 'Headphones', image: item5Icon },
        { id: 6, name: 'Gaming', image: item6Icon },
    ];

    return (
        <section className="categories">
            <div className="container">
                <div className="categories__wrapper">
                    <div className="categories__top">
                        <SectionTitle titleBig="Browse By Category" titleSmaller="Categories" />
                    </div>
                    <div className="categories__bottom">
                        <div className="categories__box">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={5}
                                modules={[Autoplay, Navigation]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                navigation={{
                                    nextEl: '.swiper-button-next--categories',
                                    prevEl: '.swiper-button-prev--categories',
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 2,
                                    },
                                    480: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    992: {
                                        slidesPerView: 5,
                                    },
                                }}
                                className="mySwiper"
                                // onSlideChange={() => console.log('slide change')}
                                // onSwiper={(swiper) => console.log(swiper)}
                            >
                                {data.map((entry) => (
                                    <SwiperSlide key={entry.id}>
                                        <div className="categories__item">
                                            <div className="categories__item-icon">
                                                <entry.image />
                                            </div>
                                            <div className="categories__item-name">{entry.name}</div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper-button-prev swiper-button-prev--categories"></div>
                            <div className="swiper-button-next swiper-button-next--categories"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
