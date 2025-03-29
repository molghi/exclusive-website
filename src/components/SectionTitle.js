import './styles/SectionTitle.css';

function SectionTitle({ titleBig, titleSmaller }) {
    return (
        <div className="section-title">
            <div className="section-title__smaller">{titleSmaller}</div>
            <div className="section-title__big">{titleBig}</div>
        </div>
    );
}

export default SectionTitle;
