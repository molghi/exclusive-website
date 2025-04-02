import './styles/Account.css';
import { useRef, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';

function Account() {
    const [btnText, setBtnText] = useState('Show Navigation Menu');
    const navMenuEl = useRef();

    const navigationData = [
        {
            sectionName: 'Manage My Account',
            sectionLink: '#',
            sectionLinks: [
                ['My Profile', '#'],
                ['Address Book', '#'],
                ['My Payment Options', '#'],
            ],
        },
        {
            sectionName: 'My Orders',
            sectionLink: '#',
            sectionLinks: [
                ['My Returns', '#'],
                ['My Cancelations', '#'],
            ],
        },
        { sectionName: 'My Wishlist', sectionLink: '#' },
    ];

    const profileData = [
        { title: 'First Name', value: 'Joe' },
        { title: 'Last Name', value: 'Schmoe' },
        { title: 'Email', value: '123456@example.com' },
        { title: 'Address', value: 'Boston, MA, USA' },
    ];

    const toggleNavigation = (e) => {
        if (btnText === 'Show Navigation Menu') {
            setBtnText('Hide Navigation Menu');
            navMenuEl.current.classList.add('menu-shown');
        } else {
            setBtnText('Show Navigation Menu');
            navMenuEl.current.classList.remove('menu-shown');
        }
    };

    return (
        <section className="account">
            <div className="container">
                <div className="account__wrapper">
                    <div className="account__top">
                        <Breadcrumbs data={['Home', 'My Account']} />
                        <div className="account__welcome">
                            Welcome, <span>Joe Schmoe</span>!
                        </div>
                    </div>
                    <div className="account__bottom">
                        <button onClick={toggleNavigation} className="account__navigation-toggler">
                            {btnText}
                        </button>
                        <ul ref={navMenuEl} className="account__navigation">
                            {navigationData.map((entry, i) => (
                                <>
                                    <li className="account__navigation-section" key={i}>
                                        <a href={entry.sectionLink}>{entry.sectionName}</a>
                                        {entry.sectionLinks && entry.sectionLinks.length > 0 && (
                                            <ul className="account__navigation-sublist">
                                                {entry.sectionLinks.map((sublinkEntry, j) => (
                                                    <li key={j}>
                                                        <a href={sublinkEntry[1]} className={sublinkEntry[0] === 'My Profile' ? 'link-active' : ''}>
                                                            {sublinkEntry[0]}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                </>
                            ))}
                        </ul>
                        <div className="account__details">
                            <div className="account__profile">
                                <div className="account__profile-title">Edit Your Profile</div>
                                <div className="account__profile-box">
                                    {profileData.map((entry, i) => (
                                        <div className="account__input-box">
                                            <label htmlFor={`input-${i + 1}`}>{entry.title}</label>
                                            <input id={`input-${i + 1}`} type="text" value={entry.value} />
                                        </div>
                                    ))}
                                    <div className="account__input-box account__input-box--pw">
                                        <span>Change Password</span>
                                        <input type="password" placeholder="Current Password" />
                                        <input type="password" placeholder="New Password" />
                                        <input type="password" placeholder="Confirm New Password" />
                                    </div>
                                </div>
                                <div className="account__profile-bottom">
                                    <Button text="Cancel" type="white" />
                                    <Button text="Save Changes" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;
