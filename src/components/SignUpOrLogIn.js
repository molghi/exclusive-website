import './styles/SignUpOrLogIn.css';
import bigImg from '../images/sign-up-img.png';
import googleIcon from '../icons/google-icon.svg';

function SignUpOrLogIn({ type }) {
    const data = {
        'Sign Up': { bigTitle: 'Create an Account', actionBtnText: 'Create Account', secondBtnText: 'Sign up with Google' },
        'Log In': { bigTitle: 'Log in to Exclusive', actionBtnText: 'Log In', secondBtnText: 'Forgot Password?' },
    };

    return (
        <section className="authorise">
            <div className="authorise__image-box">
                <img src={bigImg} alt="backdrop" className="authorise__image" />
            </div>
            <div className="container">
                <div className="authorise__wrapper">
                    <div className="authorise__form-box">
                        <form className="authorise__form">
                            <div className="authorise__form-title">{data[type].bigTitle}</div>
                            <div className="authorise__form-subtitle">Enter Your Details Below</div>
                            {type === 'Sign Up' && (
                                <div className="authorise__form-input-box">
                                    <input type="text" placeholder="Name" />
                                </div>
                            )}
                            <div className="authorise__form-input-box">
                                <input type="text" placeholder="Email or Phone Number" />
                            </div>
                            <div className="authorise__form-input-box">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className={`authorise__form-btns${type === 'Log In' ? ' flex-row' : ''}`}>
                                <button className="authorise__form-btn authorise__form-btn--action">{data[type].actionBtnText}</button>
                                <button className={`authorise__form-btn${type === 'Sign Up' ? ' authorise__form-btn--white' : ' authorise__form-btn--underlined'}`}>
                                    {type === 'Sign Up' && <img src={googleIcon} alt="google" />}
                                    <span>{data[type].secondBtnText}</span>
                                </button>
                            </div>
                            {type === 'Sign Up' && (
                                <div className="authorise__form-login">
                                    <span className="authorise__form-login-text">Already have an account?</span>
                                    <button className="authorise__form-login-btn">Log in</button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUpOrLogIn;
