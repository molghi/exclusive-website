import './styles/Button.css';

function Button({ text, type }) {
    let classes = ' button--accent';
    if (type === 'white') classes = ' button--white';
    return <button className={`button${classes}`}>{text}</button>;
}

export default Button;
