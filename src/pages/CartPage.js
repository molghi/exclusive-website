import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

function CartPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn inWishlist={4} inCart={2} />
                <Cart />
            </main>
            <Footer />
        </>
    );
}

export default CartPage;
