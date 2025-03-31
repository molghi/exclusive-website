import './styles/Wishlist.css';
import SectionTitle from './SectionTitle';
import ProductItem from './ProductItem';
import Button from './Button';
import product1Img from '../images/the-north-coat.png';
import product2Img from '../images/guccie-duffle-bag.png';
import product3Img from '../images/rgb-liquid-cpu-cooler.png';
import product4Img from '../images/smart-bookshelf.png';
import product5Img from '../images/gamepad-red.png';
import product6Img from '../images/keyboard.png';
import product7Img from '../images/monitor.png';
import product8Img from '../images/chair.png';

function Wishlist() {
    const dataWishlist = [
        { id: 1, image: product1Img, name: 'The north coat', priceFull: 360, priceDiscounted: 260, stars: 5, reviews: 65, label: null, isInWishlist: true },
        { id: 2, image: product2Img, name: 'Guccie duffle bag', priceFull: 1160, priceDiscounted: 960, stars: 4.5, reviews: 32, label: null, isInWishlist: true },
        { id: 3, image: product3Img, name: 'RGB liquid CPU cooler', priceFull: 170, priceDiscounted: 160, stars: 4.5, reviews: 24, label: null, isInWishlist: true },
        { id: 4, image: product4Img, name: 'Smart Bookshelf', priceFull: 260, priceDiscounted: null, stars: 5, reviews: 11, label: null, isInWishlist: true },
    ];
    const dataRecommended = [
        {
            id: 1,
            image: product5Img,
            name: 'Havit HV-92 Gamepad',
            priceFull: 160,
            priceDiscounted: 120,
            stars: 5,
            reviews: 88,
            label: '-40%',
            labelType: 'discount',
            isInRecommended: true,
        },
        {
            id: 2,
            image: product6Img,
            name: 'AK-90 Wired Keyboard',
            priceFull: 1160,
            priceDiscounted: 960,
            stars: 4,
            reviews: 75,
            label: '-35%',
            labelType: 'discount',
            isInRecommended: true,
        },
        {
            id: 3,
            image: product7Img,
            name: 'IPS LCD Gaming Monitor',
            priceFull: 400,
            priceDiscounted: 370,
            stars: 5,
            reviews: 99,
            label: '-30%',
            labelType: 'discount',
            isInRecommended: true,
        },
        {
            id: 4,
            image: product8Img,
            name: 'S-Series Comfort Chair',
            priceFull: 400,
            priceDiscounted: 375,
            stars: 4.5,
            reviews: 38,
            label: '-25%',
            labelType: 'discount',
            isInRecommended: true,
        },
    ];

    return (
        <section className="wishlist">
            <div className="container">
                <div className="wishlist__wrapper">
                    <div className="wishlist__box">
                        <div className="wishlist__box-top">
                            <SectionTitle titleSmaller="Wishlist (4)" type="plain-small" />
                            <Button text="Move All To Cart" type="white" />
                        </div>
                        <div className="wishlist__box-bottom">
                            {dataWishlist.map((entry) => (
                                <ProductItem key={entry.id} data={entry} />
                            ))}
                        </div>
                    </div>
                    <div className="wishlist__recommended">
                        <div className="wishlist__box-top">
                            <SectionTitle titleSmaller="Just For You" type="plain-small-with-figure" />
                            <Button text="View All" type="white" />
                        </div>
                        <div className="wishlist__box-bottom">
                            {dataRecommended.map((entry) => (
                                <ProductItem key={entry.id} data={entry} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Wishlist;
