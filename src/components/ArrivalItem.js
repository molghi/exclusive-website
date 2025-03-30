import './styles/ArrivalItem.css';

function ArrivalItem({ data }) {
    const { size, title, text, button, image } = data;
    let sizeClass = ' regular';
    if (size === 'big') sizeClass = ' big';
    if (size === 'wide') sizeClass = ' wide';

    return (
        <div className={`arrival-item${sizeClass}`}>
            <div className="arrival-item__image-box">
                <img src={image} alt="arrival item img" />
            </div>
            <div className="arrival-item__info-box">
                <span className="arrival-item__title">{title}</span>
                <span className="arrival-item__text">{text}</span>
                <span className="arrival-item__btn">{button}</span>
            </div>
        </div>
    );
}

export default ArrivalItem;
