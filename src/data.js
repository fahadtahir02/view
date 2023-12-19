import core_img from './assets/components.png';
import props_img from './assets/config.png';
import jsx_img from './assets/jsx-ui.png';
import state_img from './assets/state-mgmt.png';


export const CORE_CONCEPTS = [
    {
        title: 'Components',
        description: "The Core UI Building Block",
        image: core_img

    },

    {
        title: 'JSX',
        description: "The sugar syntax that combines HTML and JS",
        image: jsx_img
    },

    {
        title: 'Props',
        description: "Enables us to dynamically inject different details in reusable components",
        image: props_img
    },

    {
        title: "States",
        description: "Enable us to change/load/update our components with new data",
        image: state_img

    },




];


export const EXAMPLES = {
    components: {
        title: 'Components',
        description:
            'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
        code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
    },
    jsx: {
        title: 'JSX',
        description:
            'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
        code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
    },
    props: {
        title: 'Props',
        description:
            'Components accept arbitrary inputs called props. They are like function arguments.',
        code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
    },
    state: {
        title: 'State',
        description:
            'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
        code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
    },
};