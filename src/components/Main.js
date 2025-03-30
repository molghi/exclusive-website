import TopHeader from './TopHeader';
import Header from './Header';
import Features from './Features';
import Bestsellers from './Bestsellers';
import NewArrivals from './NewArrivals';
import OurProducts from './OurProducts';
import Banner from './Banner';
import Categories from './Categories';
import Sales from './Sales';

function Main() {
    return (
        <main className="main">
            <TopHeader />
            <Header />
            {/* Hero */}
            <Sales />
            <Categories />
            <Bestsellers />
            <Banner />
            <OurProducts />
            <NewArrivals />
            <Features />
        </main>
    );
}

export default Main;
