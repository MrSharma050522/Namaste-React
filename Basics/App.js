// Creating heading using React basically this is react element which is normal js object
const heading = React.createElement(
    "h1",
    // this object is used to give elements attributes
    {
        id: "heading",
        test: "abc",
    },
    "Hell World From React!"
);
// console.log(heading) // this will return an object

// const heading2 = React.createElement("h1", {}, "Hello World For Container");

// Creating a root by getting element by id
const root = ReactDOM.createRoot(document.getElementById("root"));
// const container = ReactDOM.createRoot(document.getElementById("container"));

/**
 * rendering heading inside the root created using ReactDOM
 * this will take this heading object and will create a h1 tag
 * and will put this insdie the div with id root
 */
// root.render(heading);
// container.render(heading2);

/**
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 *
 * if we want to have sibling inside the tag we have to convert the third
 * argument children of the React.createElement an array
 * Creating the nest html structure inside the react
 *  ReactElement(Object) => HTML (Browser Understandss)
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1", key:"child1" }, [
        React.createElement("h1", { id: "h1", key: "h1" }, "I'm h1 tag"),
        React.createElement("h2", { id: "h2", key: "h2" }, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2", key:"child2" }, [
        React.createElement("h1", { id: "h1", key: "h1" }, "I'm h1 tag"),
        React.createElement("h2", { id: "h2", key: "h2" }, "I'm h2 tag"),
    ]),
]);

console.log(parent);
root.render(parent);

// JSX
