const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImage from './assets/react-core-concepts.png';

import componentsImg1 from './assets/components.png';
import propsImg1 from './assets/config.png';
import jsxImg1 from './assets/jsx-ui.png';
import stateImg1 from './assets/state-mgmt.png';

import {CORE_CONCEPTS} from './data.js';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const propSyntax = 5;
// can pass default value in prop e.g.
  /*export default function Button({ caption, type = "submit" }) { 
    // caption has no default value, type has a default value of "submit"
  }*/

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConceptsV1(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function CoreConceptsV2({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function CoreConceptsV3({concept}) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}

function CoreConceptsV4({...concept}) {

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


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {propSyntax===1 ? (
            <>
            <CoreConceptsV1
              image={componentsImg1}
              title="Components"
              description="Reusable building blocks of a React application."
            />
            <CoreConceptsV1
              image={propsImg1}
              title="Props"
              description="Data passed to components to customize their behavior."
            />
            <CoreConceptsV1
              image={jsxImg1}
              title="JSX"
              description="Syntax extension for JavaScript that looks similar to XML."
            />
            <CoreConceptsV1
              image={stateImg1}
              title="State"
              description="Data managed within a component."
            />
          </>
          ) : propSyntax===2 ? (
            <>
            <CoreConceptsV2
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConceptsV2 {...CORE_CONCEPTS[1]} />
            <CoreConceptsV2 {...CORE_CONCEPTS[2]} />
            <CoreConceptsV2 {...CORE_CONCEPTS[3]} />
          </>
          ) : propSyntax===3 ? (
            <>
            <CoreConceptsV3 concept={CORE_CONCEPTS[0]} />
            <CoreConceptsV3 concept={CORE_CONCEPTS[1]} />
            <CoreConceptsV3 concept={CORE_CONCEPTS[2]} />
            <CoreConceptsV3 concept={CORE_CONCEPTS[3]} />
          </>
          ) : propSyntax===4 ? (
            <>
            <CoreConceptsV4 {...CORE_CONCEPTS[0]} />
            <CoreConceptsV4 {...CORE_CONCEPTS[1]} />
            <CoreConceptsV4 {...CORE_CONCEPTS[2]} />
            <CoreConceptsV4 {...CORE_CONCEPTS[3]} />
          </>
          ): propSyntax===5 ? (
            <>
            {/* Using map to iterate over the array of concepts */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConceptsV2 key={concept.id} {...concept} />
            ))}
          </>
          ):null
          }
        </ul>
        </section>

      </main>
    </div>
  );
}


export default App;
