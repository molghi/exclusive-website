import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/Hero.css';
import arrowIcon from '../icons/arrow-icon.svg';
import angleIcon from '../icons/angle-icon.svg';
import appleLogo from '../images/apple-logo.png';
import sliderImg from '../images/slider-img.png';

function Hero() {
    const heroListEl = useRef();
    const heroListTogglerEl = useRef();
    const listData = [
        {
            id: 1,
            name: "Women's Fashion",
            link: '#',
            sublist: [
                { id: 1.1, name: 'Women Sublist Item 1', link: '#' },
                { id: 1.2, name: 'Women Sublist Item 2', link: '#' },
                { id: 1.3, name: 'Women Sublist Item 3', link: '#' },
                { id: 1.4, name: 'Women Sublist Item 4', link: '#' },
                { id: 1.5, name: 'Women Sublist Item 5', link: '#' },
            ],
        },
        {
            id: 2,
            name: "Men's Fashion",
            link: '#',
            sublist: [
                { id: 2.1, name: 'Men Sublist Item 1', link: '#' },
                { id: 2.2, name: 'Men Sublist Item 2', link: '#' },
                { id: 2.3, name: 'Men Sublist Item 3', link: '#' },
                { id: 2.4, name: 'Men Sublist Item 4', link: '#' },
                { id: 2.5, name: 'Men Sublist Item 5', link: '#' },
            ],
        },
        { id: 3, name: 'Electronics', link: '#' },
        { id: 4, name: 'Home & Lifestyle', link: '#' },
        { id: 5, name: 'Medicine', link: '#' },
        { id: 6, name: 'Sports & Outdoor', link: '#' },
        { id: 7, name: "Baby's & Toys", link: '#' },
        { id: 8, name: 'Groceries & Pets', link: '#' },
        { id: 9, name: 'Health & Beauty', link: '#' },
    ];

    const sliderData = [
        {
            id: 1,
            titleSmall: 'iPhone 14 Series',
            titleBig: 'Up to 30% off Voucher',
            button: 'Shop Now',
            buttonIcon: arrowIcon,
            bigImage: sliderImg,
            smallerImage: appleLogo,
            bgColor: 'black',
        },
        {
            id: 2,
            titleSmall: 'iPhone 20 Series',
            titleBig: 'How do you like apples?',
            button: 'Get It!',
            buttonIcon: arrowIcon,
            bigImage: sliderImg,
            smallerImage: appleLogo,
            bgColor: 'black',
        },
    ];

    const toggleHeroList = (e) => {
        heroListEl.current.classList.toggle('shown');
        if (heroListEl.current.classList.contains('shown')) e.target.textContent = 'Hide Categories';
        else e.target.textContent = 'Show Categories';
    };

    useEffect(() => {
        const checkClickOutside = (e) => {
            if (!e.target.closest('.hero__list') && !e.target.closest('.hero__list-toggler')) {
                if (heroListEl.current.classList.contains('shown')) {
                    heroListEl.current.classList.remove('shown');
                    heroListTogglerEl.current.textContent = 'Show Categories';
                }
            }
        };
        document.addEventListener('click', checkClickOutside);
        return () => document.removeEventListener('click', checkClickOutside);
    }, []);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__column">
                        <button ref={heroListTogglerEl} onClick={toggleHeroList} className="hero__list-toggler">
                            Show Categories
                        </button>
                        <ul ref={heroListEl} className="hero__list">
                            {listData.map((entry) => (
                                <li key={entry.id} className="hero__list-item">
                                    <span className="hero__list-link">
                                        <span>
                                            {entry.name}
                                            {entry.sublist && entry.sublist.length > 0 && <img src={angleIcon} alt="angle icon" />}
                                        </span>
                                        {entry.sublist && entry.sublist.length > 0 && (
                                            <div className="hero__sublist-box">
                                                <ul className="hero__sublist">
                                                    {entry.sublist.map((subEntry) => (
                                                        <li key={subEntry.id} className="hero__sublist-item">
                                                            <Link to={subEntry.link} className="hero__sublist-link">
                                                                {subEntry.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hero__column">
                        <div className="hero__slider">
                            <Swiper
                                slidesPerView={1}
                                modules={[Autoplay, Navigation, Pagination]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                loop={true}
                                className="mySwiper3"
                            >
                                {sliderData.map((entry) => (
                                    <SwiperSlide key={entry.id}>
                                        <div className="hero__banner" style={{ backgroundColor: entry.bgColor }}>
                                            <div className="hero__banner-column">
                                                <div className="hero__banner-info">
                                                    <div className="hero__banner-text-box">
                                                        <div className="hero__banner-icon">
                                                            <img src={entry.smallerImage} alt="slider banner icon" />
                                                        </div>
                                                        <div className="hero__banner-text">{entry.titleSmall}</div>
                                                    </div>
                                                    <div className="hero__banner-title">{entry.titleBig}</div>
                                                    <Link className="hero__banner-btn">
                                                        <span>{entry.button}</span>
                                                        <img src={arrowIcon} alt="arrow icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="hero__banner-column">
                                                <div className="hero__banner-img-box">
                                                    <img src={entry.bigImage} alt="banner img" className="hero__banner-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

/* 
{
            id: 2,
            titleSmall: 'iPhone 15 Series',
            titleBig: 'Up to 20% off Voucher',
            button: 'Shop Now',
            buttonIcon: arrowIcon,
            bigImage: sliderImg,
            smallerImage: appleLogo,
        },
        {
            id: 3,
            titleSmall: 'iPhone 16 Series',
            titleBig: 'Up to 10% off Voucher',
            button: 'Shop Now',
            buttonIcon: arrowIcon,
            bigImage: sliderImg,
            smallerImage: appleLogo,
        },
*/
