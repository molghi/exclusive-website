import './styles/ProductItem.css';
import heartIcon from '../icons/heart-regular.svg';
import eyeIcon from '../icons/eye-regular.svg';
import trashIcon from '../icons/trash-solid.svg';
import Rating from 'react-rating';

function ProductItem({ data }) {
    const { id, image, name, priceFull, priceDiscounted, stars, reviews, label, labelType, bottomFlexed, colorChoice, isInWishlist, isInRecommended } = data;
    let labelClass = '';
    if (labelType === 'green') labelClass = ' label-new';

    const priceAndRating = (
        <>
            <div className="product__price">
                {priceDiscounted ? (
                    <span className="product__price-discounted">${priceDiscounted}</span>
                ) : (
                    <span className="product__price-discounted">${priceFull}</span>
                )}
                {priceDiscounted && <span className="product__price-full">${priceFull}</span>}
            </div>
            <div className="product__rating">
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
                <span className="product__reviews-count">({reviews})</span>
            </div>
        </>
    );

    return (
        <div className="product">
            <div className="product__top">
                <div className="product__image-box">
                    <img src={image} alt="product image" />
                </div>
                <div className="product__add-cart">Add To Cart</div>
                <div className="product__btns">
                    {!isInWishlist ? (
                        <>
                            {!isInRecommended && (
                                <button className="product__btn">
                                    <img src={heartIcon} alt="Favorites" />
                                </button>
                            )}
                            <button className="product__btn">
                                <img src={eyeIcon} alt="Watch" />
                            </button>
                        </>
                    ) : (
                        <button className="product__btn" style={{ padding: '7px' }}>
                            <img src={trashIcon} alt="Remove" />
                        </button>
                    )}
                </div>
                {label && <span className={`product__label${labelClass}`}>{label}</span>}
            </div>
            <div className="product__bottom">
                <div className="product__name">{name}</div>
                {bottomFlexed ? <div className="product__row">{priceAndRating}</div> : priceAndRating}
                {colorChoice && colorChoice.length > 0 && (
                    <div className="product__color-choice">
                        {colorChoice.map((color, i) => (
                            <span key={i} className="product__color">
                                <input className="product__color-input" type="radio" name={`radio-${id}`} id={`radio-${id}-${i}`} />
                                <label className="product__color-label" style={{ backgroundColor: color }} htmlFor={`radio-${id}-${i}`}></label>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
