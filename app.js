import React from "react";
import ReactDOM from "react-dom/client";

/* React code to insert text in HTML */

/* How to render multiple in HTML DOM */

/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>Iam h1 tag</h1>
 *  </div>
 * </div>
 *
 */

/* const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Iam H1 tag")));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("react-root"));  // used for DOM
root.render(parent); // renders the JS object into DOM 





/* Render single item to HTML DOM */
/* const text = React.createElement("h1", { id: "heading" }, "Hi this is the first text form React....!");
console.log(text);// returns JS object

const root = ReactDOM.createRoot(document.getElementById("react-root"));  // used for DOM

root.render(text); // renders the JS object into DOM
 */

/* Render code using JSX */
// React Element
/* const jsxHeading = (
  <h1 id="text" className="head" tabIndex="1">
    This is text using JSX
  </h1>
);
console.log(jsxHeading);
 */

// React functional component
const ParagraphComponent = () => {
  return <p>This is paragraph text using React Functional Component</p>;
};
const span = <span> This is span</span>;

const HeadingComponent = () => {
  return (
    <div>
      {span}
      <h1>This is Heading text using React Functional Component</h1>
      <ParagraphComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("react-root")); // used for DOM
root.render(<HeadingComponent />); // renders the JS object into DOM
