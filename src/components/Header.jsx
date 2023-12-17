import header_img from '../assets/react-core-concepts.png';


const synonyms = ['Fundemental', 'Core', 'Multiple']

function get_random_int(max) {
    return Math.floor(Math.random() * (max + 1))
}
export default function Header() {
    const description = synonyms[get_random_int(2)]
    return (
        <header>
            <img src={header_img} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>

    );
}