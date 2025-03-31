import './styles/Breadcrumbs.css';

function Breadcrumbs({ data }) {
    return (
        <div className="breadcrumbs">
            {data.map((crumb, i) => (
                <div key={i} className="breadcrumbs__item">
                    {crumb}
                </div>
            ))}
        </div>
    );
}

export default Breadcrumbs;
