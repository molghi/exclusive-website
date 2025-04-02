import './styles/Achievements.css';
import iconShop from '../icons/icon-shop.svg';
import iconShop2 from '../icons/store-solid.svg';
import iconDollar from '../icons/dollar-sign-solid.svg';
import iconBag from '../icons/bag-shopping-solid.svg';
import iconSack from '../icons/sack-dollar-solid.svg';

function Achievements() {
    const data = [
        { id: 1, bigText: '10.5k', smallText: 'Active Sellers', image: iconShop2 },
        { id: 2, bigText: '33k', smallText: 'Monthly Product Sale', image: iconDollar },
        { id: 3, bigText: '45.5k', smallText: 'Active Customers', image: iconBag },
        { id: 4, bigText: '25k', smallText: 'Annual Gross Sale', image: iconSack },
    ];

    return (
        <section className="achievements">
            <div className="container">
                <div className="achievements__wrapper">
                    {data.map((entry) => (
                        <div key={entry.id} className="achievements__item">
                            <div className="achievements__item-img-box">
                                <img className="achievements__item-img" src={entry.image} alt="achievements icon" />
                            </div>
                            <div className="achievements__item-number">{entry.bigText}</div>
                            <div className="achievements__item-text">{entry.smallText}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;
