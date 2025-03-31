import './styles/Footer.css';
import sendIcon from '../icons/paper-plane-regular.svg';
import facebookIcon from '../icons/facebook-f-brands.svg';
import twitterIcon from '../icons/twitter-brands.svg';
import instagramIcon from '../icons/instagram-brands.svg';
import linkedinIcon from '../icons/linkedin-in-brands.svg';
import qrCodeImg from '../images/qrcode.png';
import appstoreImg from '../images/app-store.png';
import gstoreImg from '../images/google-play-store.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__top">
                        <div className="footer__column">
                            <div className="footer__logo logo">Exclusive</div>
                            <div className="footer__column-title">Subscribe</div>
                            <div className="footer__text">Get 10% off your first order</div>
                            <form className="footer__form">
                                <input type="email" placeholder="Enter your email" />
                                <button type="submit" className="footer__icon-btn">
                                    <img src={sendIcon} alt="Subscribe" />
                                </button>
                            </form>
                        </div>
                        <div className="footer__column">
                            <div className="footer__column-title">Support</div>
                            <ul className="footer__list">
                                {[
                                    ['London, United Kingdom', null],
                                    ['exclusive@gmail.com', null],
                                    ['+88015-88888-9999', null],
                                ].map((item, i) => (
                                    <li key={i} className="footer__list-item">
                                        <span className="footer__list-link footer__text">{item[0]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer__column-title">Account</div>
                            <ul className="footer__list">
                                {[
                                    ['My Account', '#'],
                                    ['Login / Register', '#'],
                                    ['Cart', '#'],
                                    ['Wishlist', '#'],
                                    ['Shop', '#'],
                                ].map((item, i) => (
                                    <li key={i} className="footer__list-item">
                                        <a href={item[1]} className="footer__list-link footer__text">
                                            {item[0]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer__column-title">Quick Links</div>
                            <ul className="footer__list">
                                {[
                                    ['Privacy Notice', '#'],
                                    ['Terms & Conditions', '#'],
                                    ['FAQ', '#'],
                                    ['Contact', '#'],
                                ].map((item, i) => (
                                    <li key={i} className="footer__list-item">
                                        <a href={item[1]} className="footer__list-link footer__text">
                                            {item[0]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer__column-title">Download App</div>
                            <div className="footer__small-text">Save $3 with app - New Users Only</div>
                            <div className="footer__downloadables">
                                <div className="footer__qrcode">
                                    <img src={qrCodeImg} alt="QR Code" />
                                </div>
                                <div className="footer__stores">
                                    <a href="#">
                                        <img src={gstoreImg} alt="Google Store" />
                                    </a>
                                    <a href="#">
                                        <img src={appstoreImg} alt="App Store" />
                                    </a>
                                </div>
                            </div>
                            <ul className="footer__socials">
                                <li>
                                    <a href="#" className="footer__icon-btn">
                                        <img src={facebookIcon} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__icon-btn">
                                        <img src={twitterIcon} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__icon-btn">
                                        <img src={instagramIcon} alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__icon-btn">
                                        <img src={linkedinIcon} alt="linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__bottom">&copy; Copyright Rimel 2022. All right reserved</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
