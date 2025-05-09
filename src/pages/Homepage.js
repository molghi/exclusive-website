import { useRef } from 'react';
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
import AccordionsSpoilers from '../components/AccordionsSpoilers';

function Homepage() {
    const accordionData = [
        [
            'Shipping & Delivery',
            'We offer worldwide shipping with estimated delivery times between 3–7 business days, depending on your region. Tracking details are provided upon dispatch.',
        ],
        [
            'Return & Exchange Policy',
            'Items may be returned or exchanged within 30 days of receipt, provided they remain unused and in original packaging. Please refer to our Returns Portal for instructions.',
        ],
        [
            'Payment Methods',
            'We accept all major credit and debit cards, PayPal, Apple Pay, and secure Klarna installments. All transactions are encrypted and PCI-compliant.',
        ],
        [
            'Product Care Instructions',
            'To ensure longevity, please follow the care label on each product. Most garments are machine-washable on a gentle cycle with cold water.',
        ],
        [
            'Contact & Support',
            'Our support team is available Monday through Friday, 9:00 AM – 6:00 PM (GMT). You may reach us via live chat, email, or our contact form.',
        ],
    ];
    const targetRef = useRef(null);

    return (
        <>
            <main className="main">
                <TopHeader targetRef={targetRef} />
                <Header activeListLink="Home" isLoggedIn />
                <Hero />
                <Sales targetRef={targetRef} />
                <Categories />
                <Bestsellers />
                <Banner />
                <OurProducts />
                <NewArrivals />
                <AccordionsSpoilers data={accordionData} />
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default Homepage;
