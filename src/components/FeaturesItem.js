function FeaturesItem({ data }) {
    return (
        <div className="features__item">
            <div className="features__item-image">
                <img src={data.imgPath} alt="features image" />
            </div>
            <div className="features__item-title">{data.title}</div>
            <div className="features__item-text">{data.text}</div>
        </div>
    );
}

export default FeaturesItem;
