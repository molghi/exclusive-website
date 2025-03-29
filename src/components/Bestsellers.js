import SectionTitle from './SectionTitle';
import Button from './Button';
import ProductItem from './ProductItem';
import './styles/Bestsellers.css';
import product1Img from '../images/the-north-coat.png';
import product2Img from '../images/guccie-duffle-bag.png';
import product3Img from '../images/rgb-liquid-cpu-cooler.png';
import product4Img from '../images/smart-bookshelf.png';

function Bestsellers() {
    const data = [
        { id: 1, image: product1Img, name: 'The north coat', priceFull: 360, priceDiscounted: 260, stars: 5, reviews: 65, discountedPercent: null },
        { id: 2, image: product2Img, name: 'Guccie duffle bag', priceFull: 1160, priceDiscounted: 960, stars: 4.5, reviews: 32, discountedPercent: null },
        { id: 3, image: product3Img, name: 'RGB liquid CPU cooler', priceFull: 170, priceDiscounted: 160, stars: 4.5, reviews: 24, discountedPercent: null },
        { id: 4, image: product4Img, name: 'Smart Bookshelf', priceFull: 260, priceDiscounted: null, stars: 5, reviews: 11, discountedPercent: null },
    ];

    return (
        <section className="bestsellers">
            <div className="container">
                <div className="bestsellers__wrapper">
                    <div className="bestsellers__top">
                        <SectionTitle titleBig="Best Selling Products" titleSmaller="This Month" />
                        <Button text="View All" />
                    </div>
                    <div className="bestsellers__items">
                        {data.map((entry) => (
                            <ProductItem key={entry.id} data={entry} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bestsellers;
