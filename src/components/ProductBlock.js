import './styles/ProductBlock.css';
import Button from './Button';
import Breadcrumbs from './Breadcrumbs';
import iconReturn from '../icons/rotate-left-solid.svg';
import iconDelivery from '../icons/truck-solid.svg';
import heartIcon from '../icons/heart-regular.svg';
import Rating from 'react-rating';

function ProductBlock({ data }) {
    const { name, stars, reviews, isInStock, price, description, colors, sizes, images } = data;

    const changeQuantity = () => {};

    return (
        <section className="product-block">
            <div className="container">
                <Breadcrumbs data={['Home', 'Electronics', 'Gaming', 'Gamepads', 'Havic']} />
                <div className="product-block__wrapper">
                    <div className="product-block__images">
                        <div className="product-block__miniatures">
                            {images.map((imgPath, i) => (
                                <div key={i} className="product-block__miniature">
                                    <img src={imgPath} alt="product miniature" />
                                </div>
                            ))}
                        </div>
                        <div className="product-block__big-img">
                            <img src={images[0]} alt="product big" />
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
                                <input type="number" min="0" value="1" />
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
            </div>
        </section>
    );
}

export default ProductBlock;
