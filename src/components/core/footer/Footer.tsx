import './footer.scss'
export function Footer() {
    return(
        <footer>
            <div className="footer__main">
                <ul className="footer__main__list-wrapper">
                    <li className="footer__main__item"><a href="">Accueil</a></li>
                    <li className="footer__main__item"><a href="">Streaming</a></li>
                    <li className="footer__main__item"><a href="">Tarifs</a></li>
                    <li className="footer__main__item"><a href="">FAQ</a></li>
                    <li className="footer__main__item"><a href="">Questionnaire</a></li>
                </ul>
            </div>
            <div className="footer__secondary">
                <ul className="footer__secondary__list-wrapper">
                    <li className="footer__secondary__item">Graphiste indépendante</li>
                    <li className="footer__secondary__item">France & à distance</li>
                    <li className="footer__secondary__item"><a href="">Instagram</a></li>
                    <li className="footer__secondary__item"><a href="">Behance</a></li>
                    <li className="footer__secondary__item"><a href="">Mentions légales</a></li>
                    <li className="footer__secondary__item">© 2026</li>
                </ul>
            </div>
        </footer>
    )
}