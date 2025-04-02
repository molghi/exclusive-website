import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function ContactPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header activeListLink="Contact" isLoggedIn inWishlist={4} inCart={2} />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default ContactPage;
