const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImage from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

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
function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt="{props.title}" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
            <CoreConcepts
              img={componentImg}
              title="Components"
              description="Reusable building blocks of a React application."
            />
            <CoreConcepts
              img={propsImg}
              title="Props"
              description="Data passed to components to customize their behavior."
            />
            <CoreConcepts
              img={jsxImg}
              title="JSX"
              description="Syntax extension for JavaScript that looks similar to XML."
            />
            <CoreConcepts
              img={stateImg}
              title="State"
              description="Data managed within a component."
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
