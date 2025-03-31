import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

function NotFoundPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn />
                <NotFound />
            </main>
            <Footer />
        </>
    );
}

export default NotFoundPage;
