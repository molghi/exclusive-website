import './styles/Leadership.css';
import iconTwitter from '../icons/twitter-brands.svg';
import iconInstagram from '../icons/instagram-brands.svg';
import iconLinkedIn from '../icons/linkedin-in-brands.svg';
import man1Img from '../images/man-1.png';
import man2Img from '../images/man-2.png';
import woman1Img from '../images/woman-1.png';

function Leadership() {
    const data = [
        { id: 1, name: 'Josef Schmid', title: 'Founder & Chairman', image: man1Img },
        { id: 2, name: 'Mary Beseder', title: 'Managing Director', image: woman1Img },
        { id: 3, name: 'Rodrigo Pera', title: 'Product Designer', image: man2Img },
    ];

    return (
        <section className="leadership">
            <div className="container">
                <div className="leadership__wrapper">
                    {data.map((entry) => (
                        <div key={entry.id} className="leadership__person">
                            <div className="leadership__person-top">
                                <div className="leadership__person-img-box">
                                    <img src={entry.image} alt="leadership person" />
                                </div>
                            </div>
                            <div className="leadership__person-bottom">
                                <div className="leadership__person-name">{entry.name}</div>
                                <div className="leadership__person-title">{entry.title}</div>
                                <ul className="leadership__person-socials">
                                    {[
                                        [iconTwitter, '#', 'twitter'],
                                        [iconInstagram, '#', 'instagram'],
                                        [iconLinkedIn, '#', 'linked in'],
                                    ].map((entry, i) => (
                                        <li key={i}>
                                            <a href={entry[1]}>
                                                <img src={entry[0]} alt={entry[2]} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Leadership;
