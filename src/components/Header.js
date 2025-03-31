import { useRef, useEffect } from 'react';
import cartIcon from '../icons/cart-shopping-solid.svg';
import heartIcon from '../icons/heart-regular.svg';
import searchIcon from '../icons/magnifying-glass-solid.svg';
import './styles/Header.css';
import './styles/hamburgerMenu.css';

function Header({ activeListLink, isLoggedIn, inWishlist }) {
    const hamburgerEl = useRef();
    const columnToToggle1 = useRef();
    const columnToToggle2 = useRef();

    const toggleHamburgerMenu = () => {
        hamburgerEl.current.classList.toggle('active'); // listening to the clicks on the hamburger element: toggle active classes
        columnToToggle1.current.classList.toggle('active');
        columnToToggle2.current.classList.toggle('active');
    };

    useEffect(() => {
        // listening to the clicks on the entire document: if outside header, remove active classes (doing it only when the component mounts)
        const handleClickOutside = (e) => {
            if (!e.target.closest('.header')) {
                hamburgerEl.current.classList.remove('active');
                columnToToggle1.current.classList.remove('active');
                columnToToggle2.current.classList.remove('active');
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside); // cleaning up
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__column">
                        <a href="#" className="header__logo logo">
                            Exclusive
                        </a>
                    </div>
                    <div ref={columnToToggle1} className="header__column">
                        <nav className="header__navbar">
                            <ul className="header__list">
                                {[
                                    ['Home', '#'],
                                    ['Contact', '#'],
                                    ['About', '#'],
                                    ['Sign Up', '#'],
                                ].map((item, i) => (
                                    <li key={i} className="header__list-item">
                                        <a href={item[1]} className={`header__list-link${item[0] === activeListLink ? ' active' : ''}`}>
                                            {item[0]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div ref={columnToToggle2} className="header__column">
                        <div className="header__actions">
                            <form className="header__form">
                                <input type="text" placeholder="What are you looking for?" className="header__search-input" />
                                <button type="submit" className="header__button header__search">
                                    <img src={searchIcon} alt="Search" />
                                </button>
                            </form>
                            {isLoggedIn && (
                                <div className="header__buttons">
                                    <button className="header__button header__favorites">
                                        <img src={heartIcon} alt="Favorites" />
                                        {inWishlist && inWishlist > 0 && <span className="header__favorites-number">{inWishlist}</span>}
                                    </button>
                                    <button className="header__button header__cart">
                                        <img src={cartIcon} alt="Cart" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div ref={hamburgerEl} onClick={toggleHamburgerMenu} className="header__hamburger-menu">
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
