import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';

function CheckoutPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn inWishlist={4} inCart={2} />
                <Checkout />
            </main>
            <Footer />
        </>
    );
}

export default CheckoutPage;
