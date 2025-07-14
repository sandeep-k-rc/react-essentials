
import './CoreConcepts.css';

    export function CoreConceptsV1(props) {
      return (
        <li>
          <img src={props.image} alt={props.title} />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </li>
      );
    }
    
    export function CoreConceptsV2({image, title, description}) {
      return (
        <li>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      );
    }
    
    export function CoreConceptsV3({concept}) {
      return (
        <li>
          <img src={concept.image} alt={concept.title} />
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
        </li>
      );
    }

    export function CoreConceptsV4({...concept}) {

      //can use these instead of concept.image etc
      const {image, title, description} = concept;
    
      return (
        <li>
          <img src={concept.image} alt={concept.title} />
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
        </li>
      );
    }