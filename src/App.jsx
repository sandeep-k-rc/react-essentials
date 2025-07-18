
import {useState} from 'react';
import componentsImg1 from './assets/components.png';
import propsImg1 from './assets/config.png';
import jsxImg1 from './assets/jsx-ui.png';
import stateImg1 from './assets/state-mgmt.png';
import {CORE_CONCEPTS} from './data.js';

import Header from './components/Header/Header.jsx';
import {CoreConceptsV1, CoreConceptsV2, CoreConceptsV3, CoreConceptsV4} from './components/CoreConcepts/CoreConcepts.jsx';
import TabButtons from './components/TabButtons/TabButtons.jsx';
import { EXAMPLES } from './data.js'; 

const propSyntax = 5;
// can pass default value in prop e.g.
  /*export default function Button({ caption, type = "submit" }) { 
    // caption has no default value, type has a default value of "submit"
  }*/

function App() {


    const [selectedTab, setSelectedTab] = useState();

    function handleSelect(tabName) {
        
        setSelectedTab(tabName);
        console.log(selectedTab);
    }

    let tabContent = <p>Select a topic</p>;

    if(selectedTab) {
      tabContent = (
        <div>
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTab].code}
            </code>
          </pre>
        </div>
      );
    }

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
              <CoreConceptsV2 key={concept.title} {...concept} />
            ))}
          </>
          ):null
          }
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2> 
          <menu>
            <TabButtons isSelected={selectedTab === "components"} onSelect={() => handleSelect("components")}>Components</TabButtons>
            <TabButtons isSelected={selectedTab === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons isSelected={selectedTab === "props"} onSelect={() => handleSelect("props")}>Props</TabButtons>
            <TabButtons isSelected={selectedTab === "state"} onSelect={() => handleSelect("state")}>State</TabButtons>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
