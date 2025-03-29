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
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopHeader;
