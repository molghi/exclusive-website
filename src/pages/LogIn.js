import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpOrLogIn from '../components/SignUpOrLogIn';

function LogIn() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header isLoggedIn={false} />
                <SignUpOrLogIn type="Log In" />
            </main>
            <Footer />
        </>
    );
}

export default LogIn;
