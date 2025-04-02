import './styles/Contact.css';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import iconMail from '../icons/icon-mail.svg';
import iconPhone from '../icons/icon-phone.svg';

function Contact() {
    const inputNames = ['Your Name', 'Your Email', 'Your Phone', 'Your Message'];

    return (
        <section className="contact">
            <div className="container">
                <Breadcrumbs data={['Home', 'Contact']} />
                <div className="contact__wrapper">
                    <div className="contact__info">
                        <div className="contact__box">
                            <div className="contact__box-top">
                                <div className="contact__box-icon">
                                    <img alt="Call" src={iconPhone} />
                                </div>
                                <div className="contact__box-text">Call Us</div>
                            </div>
                            <div className="contact__box-row">We are available 24/7/365</div>
                            <div className="contact__box-row">
                                Phone: <a href="tel:9345702345702">+9345702345702</a>
                            </div>
                        </div>
                        <div className="contact__box">
                            <div className="contact__box-top">
                                <div className="contact__box-icon">
                                    <img alt="Mail" src={iconMail} />
                                </div>
                                <div className="contact__box-text">Write Us</div>
                            </div>
                            <div className="contact__box-row">Fill out our form and we will contact you within 24 hours.</div>
                            <div className="contact__box-row">
                                Email: <a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
                            </div>
                            <div className="contact__box-row">
                                Email: <a href="mailto:support@exclusive.com">support@exclusive.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form-box">
                        <form className="contact__form">
                            {inputNames.map((entry, i, a) => (
                                <div key={i} className="contact__input-box">
                                    {i === a.length - 1 ? <textarea placeholder={entry}></textarea> : <input type="text" placeholder={entry} />}
                                </div>
                            ))}
                            <Button text="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
