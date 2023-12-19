import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/Core_concepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from "./components/Tab_button.jsx";
import { EXAMPLES } from './data.js';


import { useState } from 'react';



function App() {
    const [selectedTopic, setSelectedTopic] = useState()

    function clickHandler(selectedButton) {
        return (
            setSelectedTopic(selectedButton)
        )

        // return console.log(selectedButton);
    };

    let tableContent = <p>Select a Tab to Learn More!</p>

    if (selectedTopic) {
        tableContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>)
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
                        <TabButton onSelect={() => clickHandler('components')}>Components</TabButton>
                        <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
                        <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
                    </menu>
                    {tableContent}
                </section>
            </main>
        </div>
    );
}

export default App;
