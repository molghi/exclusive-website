import './styles/SectionTitle.css';

function SectionTitle({ titleBig, titleSmaller, type }) {
    let smallerTitleClass = '';
    if (type === 'plain-small') smallerTitleClass = ' plain';
    if (type === 'plain-small-with-figure') smallerTitleClass = ' plain-figure';

    return (
        <div className="section-title">
            <div className={`section-title__smaller${smallerTitleClass}`}>{titleSmaller}</div>
            {!type && <div className="section-title__big">{titleBig}</div>}
        </div>
    );
}

export default SectionTitle;
