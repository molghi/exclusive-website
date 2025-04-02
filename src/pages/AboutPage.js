import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Story from '../components/Story';
import Achievements from '../components/Achievements';
import Leadership from '../components/Leadership';
import Features from '../components/Features';

function AboutPage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn inWishlist={4} inCart={2} />
                <Story />
                <Achievements />
                <Leadership />
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;
