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

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Iam H1 tag")));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("react-root"));  // used for DOM
root.render(parent); // renders the JS object into DOM








/* Render single item to HTML DOM */
/* const text = React.createElement("h1", { id: "heading" }, "Hi this is the first text form React....!");
console.log(text);// returns JS object

const root = ReactDOM.createRoot(document.getElementById("react-root"));  // used for DOM

root.render(text); // renders the JS object into DOM
 */