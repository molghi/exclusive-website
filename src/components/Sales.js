import './styles/Sales.css';
import SectionTitle from './SectionTitle';
import Button from './Button';
import ProductItem from './ProductItem';
import product1Img from '../images/gamepad-red.png';
import product2Img from '../images/keyboard.png';
import product3Img from '../images/monitor.png';
import product4Img from '../images/chair.png';

function Sales() {
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
    ];

    return (
        <section className="sales">
            <div className="container">
                <div className="sales__wrapper">
                    <div className="sales__top">
                        <SectionTitle titleBig="Flash Sales" titleSmaller="Today's" />
                    </div>
                    <div className="sales__bottom">
                        <div className="sales__items">
                            {data.map((entry) => (
                                <ProductItem key={entry.id} data={entry} />
                            ))}
                        </div>
                        <Button text="View All Products" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sales;
