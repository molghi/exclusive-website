import './styles/OurProducts.css';
import SectionTitle from './SectionTitle';
import Button from './Button';
import ProductItem from './ProductItem';
import product1Img from '../images/dog-food.png';
import product2Img from '../images/camera.png';
import product3Img from '../images/laptop.png';
import product4Img from '../images/creams.png';
import product5Img from '../images/toy-car.png';
import product6Img from '../images/shoes.png';
import product7Img from '../images/gamepad.png';
import product8Img from '../images/jacket.png';

function OurProducts() {
    const data = [
        {
            id: 1,
            image: product1Img,
            name: 'Breed Dry Dog Food',
            priceFull: 100,
            priceDiscounted: null,
            stars: 3,
            reviews: 35,
            label: null,
            labelType: null,
            bottomFlexed: true,
        },
        {
            id: 2,
            image: product2Img,
            name: 'Canon EOS DSLR Camera',
            priceFull: 360,
            priceDiscounted: null,
            stars: 4,
            reviews: 95,
            label: null,
            labelType: null,
            bottomFlexed: true,
        },
        {
            id: 3,
            image: product3Img,
            name: 'Asus FHD Gaming Laptop',
            priceFull: 700,
            priceDiscounted: null,
            stars: 5,
            reviews: 325,
            label: null,
            labelType: null,
            bottomFlexed: true,
        },
        {
            id: 4,
            image: product4Img,
            name: 'Curology Product Set',
            priceFull: 500,
            priceDiscounted: null,
            stars: 4,
            reviews: 145,
            label: null,
            labelType: null,
            bottomFlexed: true,
        },
        {
            id: 5,
            image: product5Img,
            name: 'Kids Electric Car',
            priceFull: 960,
            priceDiscounted: null,
            stars: 5,
            reviews: 65,
            label: 'NEW',
            labelType: 'green',
            bottomFlexed: true,
            colorChoice: ['red', 'blue'],
        },
        {
            id: 6,
            image: product6Img,
            name: 'Jr. Zoom Soccer Cleats',
            priceFull: 1160,
            priceDiscounted: null,
            stars: 5,
            reviews: 25,
            label: null,
            labelType: null,
            bottomFlexed: true,
            colorChoice: ['lime', 'cyan'],
        },
        {
            id: 7,
            image: product7Img,
            name: 'GM11 Shooter USB Gamepad',
            priceFull: 660,
            priceDiscounted: null,
            stars: 4.5,
            reviews: 75,
            label: 'NEW',
            labelType: 'green',
            bottomFlexed: true,
            colorChoice: ['black', 'coral'],
        },
        {
            id: 8,
            image: product8Img,
            name: 'Quilted Satin Jacket',
            priceFull: 590,
            priceDiscounted: null,
            stars: 4.5,
            reviews: 95,
            label: null,
            labelType: null,
            bottomFlexed: true,
            colorChoice: ['navy', 'olive'],
        },
    ];

    return (
        <section className="products">
            <div className="container">
                <div className="products__wrapper">
                    <div className="products__top">
                        <SectionTitle titleBig="Explore Our Products" titleSmaller="Our Products" />
                    </div>
                    <div className="products__bottom">
                        <div className="products__box">
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

export default OurProducts;
