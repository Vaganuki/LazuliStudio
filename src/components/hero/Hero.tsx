import './hero.scss'

export function Hero() {
    return (
        <div className="hero">
            <div className="hero__cartouche cartouche">Graphisme - Illustration - Création d’univers</div>
            <div className="hero__title__wrapper">
                <h2 className="hero__title" data-text="UN PROJET ?">UN PROJET ?</h2>
                <span className="hero__subtitle">Je transforme tes envies en un univers qui te correspond</span>
            </div>
            <div className="hero__button__wrapper">
                <button className="hero__button">Trouver mon offre</button>
                <button className="hero__button">Voir le portfolio</button>
            </div>
        </div>
    )
}