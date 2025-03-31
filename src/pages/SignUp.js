import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpOrLogIn from '../components/SignUpOrLogIn';

function SignUp() {
    return (
        <>
            <main className="main">
                <TopHeader />
                <Header activeListLink="Sign Up" isLoggedIn={false} />
                <SignUpOrLogIn type="Sign Up" />
            </main>
            <Footer />
        </>
    );
}

export default SignUp;
