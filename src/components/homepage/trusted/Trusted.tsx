import './trusted.scss'
import type {AssetColor} from "../../../@types/colors";

interface TrustedItem {
    category: string;
    title: string;
    description: string;
    mainColor:  AssetColor;
    secondaryColor:  AssetColor;
}

export function Trusted() {

    const items: TrustedItem[] = [
        {category: 'BUSINESS', title: 'BLA BLA BLA', description: 'Natalia, fondatrice du salon de thé Bergamotte', mainColor:'salmon', secondaryColor:'lilac'},
        {category: 'STREAMING', title: 'BLA BLA BLA', description: 'Hedikka, VTubeuse Twitch', mainColor:'lilac', secondaryColor:'green'},
        {category: 'Illustration', title: 'BLA BLA BLA', description: 'Fabien, auteur de Dark Fantasy', mainColor:'green', secondaryColor:'salmon'},
    ]


    return (
        <section className="trusted">
            <h2>ILS M'ONT FAIT CONFIANCE</h2>
            <div className="trusted__container">
                {items.map((item) => (
                    <div className="trusted__item" style={{backgroundColor:`var(--${item.mainColor})`}}>
                        <div className="trusted__item__category cartouche" style={{backgroundColor:`var(--${item.secondaryColor})`}}>{item.category}</div>
                        <h3 className="trusted__item__title">{item.title}</h3>
                        <p className="trusted__item__text">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}