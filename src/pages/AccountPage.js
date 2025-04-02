import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Account from '../components/Account';

function AccountPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn inWishlist={4} inCart={2} />
                <Account />
            </main>
            <Footer />
        </>
    );
}

export default AccountPage;
