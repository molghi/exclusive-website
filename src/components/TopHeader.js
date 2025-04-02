import './styles/TopHeader.css';

function TopHeader() {
    return (
        <section className="top-header">
            <div className="container">
                <div className="top-header__wrapper">
                    <div className="top-header__column">
                        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <a href="#">Shop Now</a>
                    </div>
                    <div className="top-header__column">
                        <select name="language" id="language">
                            {['English', 'French', 'German', 'Arabic', 'Chinese', 'Spanish', 'Hebrew', 'Turkish', 'Russian'].map((lang, i) => (
                                <option key={i} value={lang.toLowerCase()}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopHeader;
