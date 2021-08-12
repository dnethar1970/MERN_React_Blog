import './header.styles.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React and Node</span>
                <span className="headerTitleLarge">React and Node</span>
            </div>
            <img className="headerImg" src="/images/profile.jpg" alt="" />
        </div>
    )
}



