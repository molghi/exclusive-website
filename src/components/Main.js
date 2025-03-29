import TopHeader from './TopHeader';
import Header from './Header';
import Features from './Features';
import Bestsellers from './Bestsellers';

function Main() {
    return (
        <main className="main">
            <TopHeader />
            <Header />
            <Bestsellers />
            <Features />
        </main>
    );
}

export default Main;
