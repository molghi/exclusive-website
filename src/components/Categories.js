import './styles/Categories.css';
import SectionTitle from './SectionTitle';
import item1Icon from '../icons/Category-CellPhone.svg';
import item2Icon from '../icons/Category-Computer.svg';
import item3Icon from '../icons/Category-SmartWatch.svg';
import item4Icon from '../icons/Category-Camera.svg';
import item5Icon from '../icons/Category-Headphone.svg';
import item6Icon from '../icons/Category-Gamepad.svg';

function Categories() {
    const data = [
        { id: 1, name: 'Phones', image: item1Icon },
        { id: 2, name: 'Computers', image: item2Icon },
        { id: 3, name: 'SmartWatch', image: item3Icon },
        { id: 4, name: 'Camera', image: item4Icon },
        { id: 5, name: 'Headphones', image: item5Icon },
        { id: 6, name: 'Gaming', image: item6Icon },
    ];

    return (
        <section className="categories">
            <div className="container">
                <div className="categories__wrapper">
                    <div className="categories__top">
                        <SectionTitle titleBig="Browse By Category" titleSmaller="Categories" />
                    </div>
                    <div className="categories__bottom">
                        <div className="categories__box">
                            {data.map((entry) => (
                                <div key={entry.id} className="categories__item">
                                    <div className="categories__item-icon">
                                        <img src={entry.image} alt="category icon" />
                                    </div>
                                    <div className="categories__item-name">{entry.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
