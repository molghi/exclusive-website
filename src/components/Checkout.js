import './styles/Checkout.css';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import product1Img from '../images/monitor.png';
import product2Img from '../images/gamepad.png';
import banksImg from '../images/banks.png';

function Checkout() {
    const inputNames = ['First Name', 'Company Name', 'City/Town', 'Street', 'Flat, floor, etc. (optional)', 'Phone Number', 'Email Address'];
    const required = ['First Name', 'City/Town', 'Street', 'Phone Number', 'Email Address'];
    const data = [
        { id: 1, image: product1Img, name: 'LCD Monitor', price: 750, quantity: 1 },
        { id: 2, image: product2Img, name: 'H1 Gamepad', price: 550, quantity: 2 },
    ];
    const totalPrice = data.map((entry) => entry.price * entry.quantity).reduce((a, x) => a + x, 0);

    return (
        <section className="checkout">
            <div className="container">
                <Breadcrumbs
                    data={[
                        ['Home', '/'],
                        ['Cart', '/cart'],
                        ['Checkout', '/checkout'],
                    ]}
                />
                <div className="checkout__wrapper">
                    <div className="checkout__title">Billing Details</div>
                    <div className="checkout__columns">
                        <div className="checkout__column">
                            {inputNames.map((name, i) => (
                                <div className="checkout__input-box" key={i}>
                                    <label>
                                        <span>
                                            {name}
                                            {required.includes(name) && <span className="color-red">*</span>}
                                        </span>
                                        <input type="text" />
                                    </label>
                                </div>
                            ))}
                            <div className="checkout__check-box">
                                <label className="checkout__check-label">
                                    <input className="checkout__check-input" type="checkbox" />
                                    <span className="shown-checkbox"></span>
                                    <span>Save this information for faster check-out next time</span>
                                </label>
                            </div>
                        </div>
                        <div className="checkout__column">
                            <div className="checkout__items">
                                {data.map((entry) => (
                                    <div key={entry.id} className="checkout__item">
                                        <div className="checkout__item-column">
                                            <div className="checkout__item-img">
                                                <img src={entry.image} alt="product miniature" />
                                            </div>
                                            <div className="checkout__item-name">{entry.name}</div>
                                        </div>
                                        <div className="checkout__item-column">
                                            <div className="checkout__item-price">${entry.price * entry.quantity}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="checkout__total">
                                <div className="checkout__total-row">
                                    <div className="checkout__total-row-name">Subtotal:</div>
                                    <div className="checkout__total-row-value">${totalPrice}</div>
                                </div>
                                <div className="checkout__total-row">
                                    <div className="checkout__total-row-name">Shipping:</div>
                                    <div className="checkout__total-row-value">Free</div>
                                </div>
                                <div className="checkout__total-row">
                                    <div className="checkout__total-row-name">Total:</div>
                                    <div className="checkout__total-row-value">${totalPrice}</div>
                                </div>
                            </div>
                            <div className="checkout__pay-choices">
                                <label className="checkout__pay-choice">
                                    <input name="pay-choice" type="radio" value="bank" />
                                    <span className="shown-radiobtn"></span>
                                    <span>Bank</span>
                                    <img src={banksImg} alt="banks icons" />
                                </label>
                                <label className="checkout__pay-choice">
                                    <input name="pay-choice" type="radio" value="cash-on" />
                                    <span className="shown-radiobtn"></span>
                                    <span>Cash On Delivery</span>
                                </label>
                            </div>
                            <div className="checkout__coupon-box">
                                <input type="text" placeholder="Coupon Code" />
                                <Button text="Apply Coupon" />
                            </div>
                            <Button text="Place Order" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
