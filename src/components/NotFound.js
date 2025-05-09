import './styles/NotFound.css';
import Button from './Button';
import Breadcrumbs from './Breadcrumbs';

function NotFound() {
    return (
        <section className="notfound">
            <div className="container">
                <div className="notfound__wrapper">
                    <Breadcrumbs
                        data={[
                            ['Home', '/'],
                            ['404 Error', ''],
                        ]}
                    />
                    <div className="notfound__content">
                        <div className="notfound__big-text">404 Not Found</div>
                        <div className="notfound__small-text">The page you're trying to visit does not exist</div>
                        <Button text="Back to home page" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
