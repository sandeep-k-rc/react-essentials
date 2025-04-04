
import "./card.css";
export default function Card(props) {
    return (
        <article className="card">
            <h2>{props.name}</h2>
            {props.children}
        </article>
        );
}