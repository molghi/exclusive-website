import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wishlist from '../components/Wishlist';

function WishlistPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header activeListLink="Home" isLoggedIn inWishlist={4} />
                <Wishlist />
            </main>
            <Footer />
        </>
    );
}

export default WishlistPage;
