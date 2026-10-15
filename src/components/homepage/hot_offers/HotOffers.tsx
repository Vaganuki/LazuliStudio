import './hot_offers.scss';
import type {AssetColor} from "../../../@types/colors";

interface Offers {
    category: string;
    color: AssetColor;
    name: string;
    price: number;
    description: string;

    duration: string;
    pic: string;

}

export function HotOffers() {
    const offers: Offers[] = [
        {
            category: 'Streaming',
            color: "lilac",
            name: 'Pack pro',
            price: 820,
            description: '4 scènes overlay  • bannière • photo profil • 8 emotes • 6 alertes et bien plus',
            duration: '3-4 semaines',
            pic: ''
        },
        {
            category: 'business',
            color: "salmon",
            name: 'Identité visuelle',
            price: 800,
            description: 'Logo principal + variantes • Palette & typographies • guide d’utilisation',
            duration: '4–5 semaines • 2 séries de révisions',
            pic: ''
        },
    ];


    return (
        <section className="offers-section">
            <h2>OFFRES À LA UNE</h2>
            <div className="offers-container">
                {offers.map((o) => (
                    <div className="offer__wrapper" key={o.name}>
                        <div className="offer__pic">
                            <img
                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9rNNsfKv4R7ouswYscedgwwALNdxmCXJ1ZaDYsbuRNX8ZcJ4-y2T1Xo&s=10`}
                                alt={`Exemple de ${o.name}`}/>
                        </div>
                        <div className="offer__category cartouche"
                             style={{backgroundColor: `var(--${o.color})`}}>{o.category}</div>
                        <div className="offer__header">
                            <h3 className="offer__title">{o.name}</h3><span
                            className="offer__price">dès {o.price}€</span>
                        </div>
                        <p className="offer__desc">{o.description}</p>
                        <span className="offer__timing">⏱ {o.duration}</span>
                    </div>
                ))}
            </div>
            <div className="offers-contact">
                <p className="offers-contact__text">Envie d’un projet que tu ne trouves pas dans mes offres ? <br/> Pas de
                    panique, discutons de tes envies !</p>
                <button className="offers-contact__button">Contacte moi</button>
            </div>
        </section>
    );
}