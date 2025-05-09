import './styles/Breadcrumbs.css';
import { Link } from 'react-router-dom';

function Breadcrumbs({ data }) {
    return (
        <div className="breadcrumbs">
            {data.map((crumb, i) => (
                <Link to={crumb[1]} key={i} className="breadcrumbs__item">
                    {crumb[0]}
                </Link>
            ))}
        </div>
    );
}

export default Breadcrumbs;
