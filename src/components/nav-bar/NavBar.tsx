import './nav-bar.scss'

export function NavBar() {
    return (
        <nav className="nav-bar">
            <h1>Lazuly Studio</h1>
            <ul className="nav__menu">
                <li className="nav__item"><a href="">Portfolio</a></li>
                <li className="nav__item"><a href="">À propos</a></li>
                <li className="nav__item"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}