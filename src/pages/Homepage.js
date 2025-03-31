import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Features from '../components/Features';
import Bestsellers from '../components/Bestsellers';
import NewArrivals from '../components/NewArrivals';
import OurProducts from '../components/OurProducts';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Sales from '../components/Sales';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header activeListLink="Home" isLoggedIn />
                <Hero />
                <Sales />
                <Categories />
                <Bestsellers />
                <Banner />
                <OurProducts />
                <NewArrivals />
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default Homepage;
