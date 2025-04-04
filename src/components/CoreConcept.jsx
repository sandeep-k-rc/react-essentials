
export default function CoreConcept({image, title, description})  {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }

export function CoreConceptObj({concept})  {
    return (
      <li>
        <img src={concept.image} alt={concept.title} />
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
      </li>
    );
  }