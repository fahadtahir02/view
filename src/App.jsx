import Header from './components/Header.jsx'
import CoreConcepts from './components/Core_concepts.jsx';
import { CORE_CONCEPTS } from './data.js';





function App() {
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
                        <CoreConcepts{...CORE_CONCEPTS[3]}/>
                         {/* Literally same thing as above if we know we are going to use all of our K:Value pairs in from our data
                         source then we can simply do {...CORE_CONCEPTS[3]}  */}
                        
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
