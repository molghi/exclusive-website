import './styles/Banner.css';
import bannerImg from '../images/banner-img.png';
import Countdown from 'react-countdown';

function Banner() {
    // Target date calculation
    const now = Date.now();
    const days = 3;
    const hours = 5;
    const minutes = 4;
    const seconds = 20;
    const offset = ((days * 24 + hours) * 60 + minutes) * 60 * 1000 + seconds * 1000; // in milliseconds
    const targetDate = now + offset;
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="banner__timer">
                <div className="banner__timer-element">
                    <div className="banner__timer-element-value">{days}</div>
                    <div className="banner__timer-element-text">Days</div>
                </div>
                <div className="banner__timer-element">
                    <div className="banner__timer-element-value">{hours}</div>
                    <div className="banner__timer-element-text">Hours</div>
                </div>
                <div className="banner__timer-element">
                    <div className="banner__timer-element-value">{minutes}</div>
                    <div className="banner__timer-element-text">Minutes</div>
                </div>
                <div className="banner__timer-element">
                    <div className="banner__timer-element-value">{seconds}</div>
                    <div className="banner__timer-element-text">Seconds</div>
                </div>
            </div>
        );
    };

    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wrapper">
                    <div className="banner__column">
                        <div className="banner__title-small">Categories</div>
                        <div className="banner__title-big">Enhance Your Music Experience</div>
                        {/* <div className="banner__timer"> */}
                        <Countdown date={targetDate} renderer={renderer} />
                        {/* <div className="banner__timer-element">
                                <div className="banner__timer-element-value">3</div>
                                <div className="banner__timer-element-text">Days</div>
                            </div> */}
                        {/* </div> */}
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
