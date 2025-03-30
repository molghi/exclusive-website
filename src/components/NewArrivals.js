import './styles/NewArrivals.css';
import SectionTitle from './SectionTitle';
import ArrivalItem from './ArrivalItem';
import product1Img from '../images/ps5.png';
import product2Img from '../images/woman-collections.png';
import product3Img from '../images/speakers.png';
import product4Img from '../images/perfume.png';

function NewArrivals() {
    const data = [
        { id: 1, size: 'big', title: 'PlayStation 5', text: 'Black and White version of the PS5 coming out on sale.', button: 'Shop Now', image: product1Img },
        { id: 2, size: 'wide', title: "Women's Collections", text: 'Featured woman collections that give you another vibe.', button: 'Shop Now', image: product2Img },
        { id: 3, size: 'regular', title: 'Speakers', text: 'Amazon wireless speakers', button: 'Shop Now', image: product3Img },
        { id: 4, size: 'regular', title: 'Perfume', text: 'GUCCI INTENSE OUD EDP', button: 'Shop Now', image: product4Img },
    ];

    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__wrapper">
                    <div className="arrivals__top">
                        <SectionTitle titleBig="New Arrivals" titleSmaller="Featured" />
                    </div>
                    <div className="arrivals__bottom">
                        {data.map((entry) => (
                            <ArrivalItem key={entry.id} data={entry} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewArrivals;
