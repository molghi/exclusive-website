import './styles/ProductBlock.css';
import { useState, useEffect } from 'react';
import Button from './Button';
import Breadcrumbs from './Breadcrumbs';
import iconReturn from '../icons/rotate-left-solid.svg';
import iconDelivery from '../icons/truck-solid.svg';
import heartIcon from '../icons/heart-regular.svg';
import Rating from 'react-rating';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { Gallery } from 'yet-another-react-lightbox-lite';
// import 'yet-another-react-lightbox-lite/style.css';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

// ================================================================================================

function ProductBlock({ data }) {
    const { name, stars, reviews, isInStock, price, description, colors, sizes, images } = data;
    const [quantity, setQuantity] = useState(1);
    const thumbsSwiperRef = useRef(null);
    const [isVertical, setIsVertical] = useState(window.innerWidth > 993);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth > 993);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const reviewsData = [
        {
            short: 'Surprisingly solid for the price',
            elaborated: `I wasn't expecting much, but the build quality is quite decent and the controls feel responsive.
Battery life holds up well after several hours of use.
Only downside: the D-pad is a bit too soft for my taste.`,
            stars: 4,
            name: 'John Smith',
            date: '2025-4-24',
        },
        {
            short: 'Excellent controller for casual gaming',
            elaborated: `Pairs quickly with both my PC and phone.
No input lag, and the grip feels comfortable even after long sessions.
Highly recommend for anyone not looking to spend a fortune.`,
            stars: 5,
            name: 'Jose Garcia',
            date: '2025-2-12',
        },
        {
            short: 'Inconsistent connection issues',
            elaborated: `Worked fine the first week, but then started disconnecting randomly.
I updated firmware, tried different cables, but the issue persists.
Might be just my unit, but it was disappointing.`,
            stars: 2,
            name: 'Josef Schwarz',
            date: '2024-12-13',
        },
    ];

    const specsData = [
        `Connectivity: Dual-mode wireless (2.4GHz) and Bluetooth 5.0`,
        `Compatibility: Windows, Android, iOS, macOS, Nintendo Switch`,
        `Battery Capacity: 1000mAh lithium-ion; up to 20 hours of continuous play`,
        `Charging Interface: USB Type-C, 1.5-hour full recharge`,
        `Ergonomics: Textured grip with anti-slip coating`,
        `Haptic Feedback: Dual vibration motors with adjustable intensity`,
        `Motion Control: Built-in 6-axis gyroscope for motion sensing`,
        `Programmable Buttons: 4 rear macro buttons, software configurable`,
        `Latency: Ultra-low latency mode for competitive gameplay`,
        `Build Material: Polycarbonate body with matte finish`,
    ];

    const changeQuantity = (sign) => {
        setQuantity((prev) => {
            if (sign === 'plus') return (prev += 1);
            if (sign === 'minus') {
                const newVal = prev - 1;
                return newVal > 0 ? newVal : 1;
            }
        });
    };

    return (
        <section className="product-block">
            <div className="container">
                <Breadcrumbs
                    data={[
                        ['Home', '/'],
                        ['Electronics', ''],
                        ['Gaming', ''],
                        ['Gamepads', ''],
                        ['Havic', ''],
                    ]}
                />
                <div className="product-block__wrapper">
                    <div className="product-block__images">
                        <div className="product-block__miniatures">
                            {/* Vertical Thumbnail Slider; 170*140 */}
                            <Swiper
                                onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
                                direction={isVertical ? 'vertical' : 'horizontal'}
                                slidesPerView={4}
                                spaceBetween={20}
                                modules={[Thumbs]}
                                watchSlidesProgress
                                breakpoints={{
                                    // Default (mobile-first behavior)
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    // When the screen width is >= 640px
                                    640: {
                                        slidesPerView: 2, // Show 2 slides
                                        spaceBetween: 20, // Space between slides
                                    },
                                    // When the screen width is >= 993px
                                    993: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index} className="product-block__miniature">
                                        <img src={src} alt={`Thumb ${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="product-block__big-img">
                            {/* Main Horizontal Slider */}
                            <Swiper thumbs={{ swiper: thumbsSwiperRef.current }} modules={[Thumbs]} spaceBetween={10}>
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={src} alt={`Main ${index}`} style={{ width: '100%' }} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="product-block__info">
                        <div className="product-block__name">{name}</div>
                        <div className="product-block__row">
                            <div className="product-block__rating">
                                <div className="product-block__stars">
                                    <Rating
                                        initialRating={stars}
                                        fractions={2}
                                        emptySymbol={
                                            <svg width="25" height="25" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ccc" />
                                            </svg>
                                        }
                                        fullSymbol={
                                            <svg width="25" height="25" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ffad33" />
                                            </svg>
                                        }
                                    />
                                </div>
                                <div className="product-block__reviews">({reviews} reviews)</div>
                            </div>
                            <div className={`product-block__stock${isInStock ? ' in-stock' : ' out-of-stock'}`}>{isInStock ? 'In Stock' : 'Out of Stock'}</div>
                        </div>
                        <div className="product-block__price">${price.toFixed(2)}</div>
                        <div className="product-block__description">{description}</div>
                        <div className="product-block__colors">
                            <div className="product-block__smaller-title">Colors:</div>
                            <div className="product-block__colors-box">
                                {colors.map((color, i) => (
                                    <div key={i} className="product-block__color">
                                        <input type="radio" name="color" />
                                        <span style={{ backgroundColor: color }}></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product-block__sizes">
                            <div className="product-block__smaller-title">Sizes:</div>
                            <div className="product-block__sizes-box">
                                {sizes.map((size, i) => (
                                    <div key={i} className="product-block__size">
                                        <input type="radio" name="size" />
                                        <span>{size}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product-block__row">
                            <div className="product-block__quantity">
                                <button onClick={() => changeQuantity('minus')} className="input-number-btn input-number-btn--decrease">
                                    -
                                </button>
                                <input type="number" min="0" value={quantity} />
                                <button onClick={() => changeQuantity('plus')} className="input-number-btn input-number-btn--increase">
                                    +
                                </button>
                            </div>
                            <Button text="Buy Now" />
                            <button className="product-block__favorite">
                                <img src={heartIcon} alt="Add to Faves" />
                            </button>
                        </div>
                        <div className="product-block__general">
                            <div className="product-block__general-item">
                                <div className="product-block__general-icon-box">
                                    <img src={iconDelivery} alt="Delivery icon" />
                                </div>
                                <div className="product-block__general-info-box">
                                    <div className="product-block__general-title">Free Delivery</div>
                                    <div className="product-block__general-text">Enter Your Postal Code For Delivery Availability</div>
                                </div>
                            </div>
                            <div className="product-block__general-item">
                                <div className="product-block__general-icon-box">
                                    <img src={iconReturn} alt="Return icon" />
                                </div>
                                <div className="product-block__general-info-box">
                                    <div className="product-block__general-title">Return Delivery</div>
                                    <div className="product-block__general-text">Free 30 Days Delivery Returns (Details)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block__tabs">
                    <Tabs>
                        <TabList>
                            <Tab>Specifications</Tab>
                            <Tab>Reviews</Tab>
                        </TabList>
                        <TabPanel>
                            {specsData &&
                                specsData.length > 0 &&
                                specsData.map((spec, i) => <p key={i}>{spec.split(':').map((x, j) => (j === 0 ? <strong>{x}: </strong> : <span>{x}</span>))}</p>)}
                        </TabPanel>
                        <TabPanel>
                            {reviewsData &&
                                reviewsData.length > 0 &&
                                reviewsData.map((review, i) => (
                                    <div key={i} className="user-review">
                                        <div className="user-review__short">{review.short}</div>
                                        <div className="user-review__elaborated">{review.elaborated}</div>
                                        <div className="user-review__stars">
                                            <Rating
                                                initialRating={review.stars}
                                                readonly
                                                emptySymbol={<span style={{ color: '#ccc' }}>☆</span>}
                                                fullSymbol={<span style={{ color: '#ffc107' }}>★</span>}
                                                fractions={2}
                                            />
                                        </div>
                                        <div className="user-review__row">
                                            <div className="user-review__date">{review.date}</div>
                                            <div className="user-review__name">{review.name}</div>
                                        </div>
                                    </div>
                                ))}
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default ProductBlock;
