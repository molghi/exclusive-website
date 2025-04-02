import './styles/Story.css';
import Breadcrumbs from './Breadcrumbs';
import storyBg from '../images/story-bg.png';

function Story() {
    return (
        <>
            <div className="container container--breadcrumbs">
                <Breadcrumbs data={['Home', 'About']} />
            </div>
            <section className="story">
                <div className="story__image-box">
                    <img src={storyBg} alt="backdrop" className="story__image" />
                </div>
                <div className="container">
                    <div className="story__wrapper">
                        <div className="story__content">
                            <div className="story__title">Our Story</div>
                            <div className="story__text">
                                <p>
                                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by
                                    wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                                    customers across the region.
                                </p>
                                <p>
                                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories
                                    ranging from consumer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Story;
