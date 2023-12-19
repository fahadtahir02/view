import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/Core_concepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from "./components/Tab_button.jsx";





function App() {
    function clickHandler(selectedButton) {

        return console.log(selectedButton);
    };
    return (
        <div>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcepts
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcepts
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}
                        />
                        <CoreConcepts{...CORE_CONCEPTS[3]} />
                        {/* Literally same thing as above if we know we are going to use all of our K:Value pairs in from our data
                         source then we can simply do {...CORE_CONCEPTS[3]}  */}

                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => clickHandler('Components')}>Components</TabButton>
                        <TabButton onSelect={() => clickHandler('JSX')}>JSX</TabButton>
                        <TabButton onSelect={() => clickHandler('Props')}>Props</TabButton>
                        <TabButton onSelect={() => clickHandler('State')}>State</TabButton>
                    </menu>

                </section>
            </main>
        </div>
    );
}

export default App;
