import './styles/Features.css';
import services1Img from '../images/services-1.png';
import services2Img from '../images/services-2.png';
import services3Img from '../images/services-3.png';
import FeaturesItem from './FeaturesItem';

function Features() {
    const data = [
        { imgPath: services1Img, title: 'Free and fast delivery', text: 'Free delivery for all order over $140' },
        { imgPath: services2Img, title: '24/7 customer service', text: 'Friendly customer support' },
        { imgPath: services3Img, title: 'Money back guarantee', text: 'We return money within 30 days' },
    ];

    return (
        <section className="features">
            <div className="container">
                <div className="features__wrapper">
                    {data.map((entry, i) => (
                        <FeaturesItem key={i} data={entry} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
