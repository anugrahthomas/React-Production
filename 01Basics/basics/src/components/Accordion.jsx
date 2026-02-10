import AccordianComponent from "./AccordianComponent";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces using a component-based architecture.",
  },
  {
    id: 2,
    title: "What is useState?",
    content:
      "useState is a React Hook that allows you to add state to functional components.",
  },
  {
    id: 3,
    title: "What is useEffect?",
    content:
      "useEffect lets you perform side effects such as data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    id: 4,
    title: "What is useRef?",
    content:
      "useRef provides a mutable object whose .current property persists across renders without causing re-renders.",
  },
  {
    id: 5,
    title: "When should I use useRef?",
    content:
      "Use useRef for storing timers, DOM references, previous values, or integrating with third-party libraries.",
  },
];

const Accordion = () => {
  return (
    <div>
      {accordionData.map(({ id, title, content }) => {
        return <AccordianComponent id={id} title={title} content={content} />;
      })}
    </div>
  );
};

export default Accordion;
