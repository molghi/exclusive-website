import '../components/styles/ProductPage.css';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProductItem from '../components/ProductItem';
import ProductBlock from '../components/ProductBlock';
import product1Img from '../images/gamepad-red.png';
import product2Img from '../images/keyboard.png';
import product3Img from '../images/monitor.png';
import product4Img from '../images/chair.png';
import gamepadImg1 from '../images/gamepad-1.png';
import gamepadImg2 from '../images/gamepad-2.png';
import gamepadImg3 from '../images/gamepad-3.png';
import gamepadImg4 from '../images/gamepad-4.png';

function ProductPage() {
    const dataRelated = [
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
        // { id: 5, image: product2Img, name: 'AK-91 Wired Keyboard', priceFull: 1160, priceDiscounted: 960, stars: 4, reviews: 75, label: '-35%', labelType: 'discount' },
    ];

    const dataProduct = {
        name: 'Havic HV G-92 Gamepad',
        stars: 4,
        reviews: 150,
        isInStock: true,
        price: 192,
        description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        colors: ['#eee', 'blue'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: [gamepadImg1, gamepadImg2, gamepadImg3, gamepadImg4, gamepadImg3],
    };

    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn inWishlist={4} inCart={2} />
                <ProductBlock data={dataProduct} />
                <div className="container">
                    <SectionTitle titleSmaller="Related Items" />
                    <div className="related">
                        {dataRelated.map((entry) => (
                            <ProductItem key={entry.id} data={entry} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ProductPage;
