import './styles/TopHeader.css';

function TopHeader({ targetRef }) {
    const offset = 100; // pixels above the target block

    const handleScroll = () => {
        if (!targetRef.current) return; // ensuring the ref is defined

        const top = targetRef.current.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    };

    return (
        <section className="top-header">
            <div className="container">
                <div className="top-header__wrapper">
                    <div className="top-header__column">
                        <span>Act swiftly — Flash Sale underway: discounts up to 40% off!</span>
                        <button onClick={handleScroll}>View Deals</button>
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
