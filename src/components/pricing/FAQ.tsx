import type {FAQ} from "../../@types/faq";

export interface FAQProps {
    title?: string;
    content: FAQ[];
}

export function FAQ({title, content}: FAQProps) {


    return (
        <div className={`FAQ${title ? `FAQ${title}` : ''}`}>
            <h3>FAQ {title ? title : ''}</h3>
            {content.map((QA , i) => (
                <div key={i}><span>{QA.question}</span><span>{QA.answer}</span></div>
            ))}
        </div>
    )
}