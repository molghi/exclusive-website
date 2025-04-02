import './styles/Cart.css';
import { useState, useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import product1Img from '../images/monitor.png';
import product2Img from '../images/gamepad.png';
import xIcon from '../icons/xmark-solid.svg';

function Cart() {
    const columns = ['Product', 'Price', 'Quantity', 'Subtotal'];
    const data = [
        { id: 1, image: product1Img, name: 'LCD Monitor', price: 750, quantity: 1 },
        { id: 2, image: product2Img, name: 'H1 Gamepad', price: 550, quantity: 2 },
    ];

    const [quantities, setQuantities] = useState(data.map((x) => ({ quantity: x.quantity })));
    const [subtotals, setSubtotals] = useState(data.map((x) => x.price * x.quantity));
    const [totalPrice, setTotalPrice] = useState(data.map((entry) => entry.price * entry.quantity).reduce((a, x) => a + x, 0));
    const shippingPrice = 200;

    const changeQuantity = (itemIndex, flag) => {
        let valueToChange = quantities[itemIndex].quantity;
        flag === 'plus' ? (valueToChange += 1) : (valueToChange -= 1);
        if (valueToChange < 0) valueToChange = 0;
        setQuantities((prev) => {
            let newState = prev;
            newState[itemIndex].quantity = valueToChange;
            return [...newState];
        });
    };

    useEffect(() => {
        // changing subtotals and totalPrice if quantities were changed
        setSubtotals((prev) => {
            const newState = data.map((item, i) => item.price * quantities[i].quantity);
            return [...newState];
        });
        setTotalPrice((prev) => {
            const newSubtotals = data.map((item, i) => item.price * quantities[i].quantity);
            return newSubtotals.reduce((a, x) => a + x, 0);
        });
    }, [quantities]);

    return (
        <section className="cart">
            <div className="container">
                <Breadcrumbs data={['Home', 'Cart']} />
                <div className="cart__wrapper">
                    <div className="cart__table">
                        <div className="cart__table-headers">
                            {columns.map((col, i) => (
                                <div key={i} className="cart__table-header">
                                    {col}
                                </div>
                            ))}
                        </div>
                        <div className="cart__table-items">
                            {data.map((entry, i) => (
                                <div key={entry.id} className="cart__table-item">
                                    <div className="cart__table-item-cell">
                                        <button className="cart__table-item-remove">
                                            <img alt="Remove Item" src={xIcon} />
                                        </button>
                                        <span className="cart__table-item-label">Product:</span>
                                        <div className="cart__table-item-img">
                                            <img src={entry.image} alt="product miniature" />
                                        </div>
                                        <div className="cart__table-item-name">{entry.name}</div>
                                    </div>
                                    <div className="cart__table-item-price">
                                        <span className="cart__table-item-label">Price:</span> ${entry.price}
                                    </div>
                                    <div className="cart__table-item-quantity">
                                        <span className="cart__table-item-label">Quantity:</span>
                                        <span>
                                            <button onClick={() => changeQuantity(i, 'minus')} className="input-number-btn input-number-btn--decrease">
                                                -
                                            </button>
                                            <input type="number" value={quantities[i].quantity} />
                                            <button onClick={() => changeQuantity(i, 'plus')} className="input-number-btn input-number-btn--increase">
                                                +
                                            </button>
                                        </span>
                                    </div>
                                    <div className="cart__table-item-subtotal">
                                        <span className="cart__table-item-label">Subtotal:</span> ${subtotals[i]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cart__btns">
                        <Button type="white" text="Return To Shop" />
                        <Button type="white" text="Update Cart" />
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__coupon-box">
                            <input className="cart__coupon-input" placeholder="Coupon Code" />
                            <Button text="Apply Coupon" />
                        </div>
                        <div className="cart__total">
                            <div className="cart__total-title">Cart Total</div>
                            <div className="cart__total-row">
                                <div className="cart__total-row-name">Subtotal:</div>
                                <div className="cart__total-row-value">${totalPrice}</div>
                            </div>
                            <div className="cart__total-row">
                                <div className="cart__total-row-name">Shipping:</div>
                                <div className="cart__total-row-value">{totalPrice < 1000 ? `$${shippingPrice}` : 'Free'}</div>
                            </div>
                            <div className="cart__total-row">
                                <div className="cart__total-row-name">Total:</div>
                                <div className="cart__total-row-value">${totalPrice >= 1000 ? totalPrice : totalPrice + shippingPrice}</div>
                            </div>
                            <Button text="Proceed to Checkout" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
