import './styles/Banner.css';
import bannerImg from '../images/banner-img.png';

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wrapper">
                    <div className="banner__column">
                        <div className="banner__title-small">Categories</div>
                        <div className="banner__title-big">Enhance Your Music Experience</div>
                        <div className="banner__timer">
                            <div className="banner__timer-element">
                                <div className="banner__timer-element-value">3</div>
                                <div className="banner__timer-element-text">Days</div>
                            </div>
                        </div>
                        <button className="button banner__btn">Buy Now</button>
                    </div>
                    <div className="banner__column">
                        <div className="banner__image-box">
                            <img className="banner__image" src={bannerImg} alt="banner img" />
                            <span className="banner__image-bg"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
