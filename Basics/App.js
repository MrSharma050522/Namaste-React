import React from "react";
import ReactDOM from "react-dom/client";

// Creating heading using React basically this is react element which is normal js object
/*
const heading = React.createElement(
    "h1",
    // this object is used to give elements attributes
    {
        id: "heading",
        test: "abc",
    },
    "Hell World From React!"
);
*/
// console.log(heading) // this will return an object

// const heading2 = React.createElement("h1", {}, "Hello World For Container");

// Creating a root by getting element by id
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
*/
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
/*

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1", key:"child1" }, [
        React.createElement("h1", { id: "h1", key: "h1" }, "Content of h1 tag"),
        React.createElement("h2", { id: "h2", key: "h2" }, "Content of h2 tag"),
    ]),
    React.createElement("div", { id: "child2", key:"child2" }, [
        React.createElement("h1", { id: "h1", key: "h1" }, "I'm h1 tag"),
        React.createElement("h2", { id: "h2", key: "h2" }, "I'm h2 tag"),
    ]),
]);

console.log(parent);
root.render(parent);
*/

// JSX
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * A bundler basically bundles our app, it packs our app which then can be
 * shipped to production like Webpack, Vite, Parcel, Browserify, Rollup, Esbuild
 *
 * A dev dependency is required in development phase
 * Normat dependency is required in production also
 *
 * Caret & Tilde
 *  "parcel": "^2.12.0"
 *  "parcel": "~2.12.0"
 *  "parcel": "2.12.0"  No Updates are allowed in this case
 * Summary of Version Ranges:
 *      ^4.17.1: Allows updates to versions 4.x.x, e.g., 4.18.0, 4.17.2, etc., but not 5.x.x.
 *      ~4.17.1: Allows updates to versions 4.17.x, e.g., 4.17.2, 4.17.3, etc., but not 4.18.0.
 * General Rule:
 *      Caret (^): Use this when you want to be more flexible with updates, allowing both minor and patch updates.
 *      Tilde (~): Use this when you want to limit updates to just patch updates, ensuring more stability by locking the minor version.
 *
 * Package.json => is a configuration file for the npm, it keeps the track of the version of the package installed
 * Package-lock.json => keeps the exact record of the version installed and this helps in installing the exact
 * version when we deploy our code in production (so that local and production are in sync if it is working in local
 * it should work on production as well)
 *
 * => When we did npm install "parcel" it downloaded all the code from "parcel" at put in Node_modules basically
 * it get all the code and dependency for that package
 * as we need "PARCEL" as dependency , "parcel" in itself need other dependencies and those dependency need other dependencies and
 * that is called "TRANSITIVE DEPENDENCIES"
 * And that way we have multiple package.json since "parcel" will have it own package.json and it's dependency will have their own package.json
 *
 * We need package.json and package-lock.json in our repo both
 *
 *
 * Running "npx parcel index.html" will create dist and all those
 * and will create a server for us "localhost:1234"
 * Similar to "NPM" it install a package "NPX" execute that package
 *
 * and then we have import react and react-dom from node_modules and this will give us
 * error : "@parcel/transformer-js: Browser scripts cannot have imports or exports."
 * so to resolve this we need since this import is not a normal js this not a normal javascript file
 * it is a module it is not a browerscript then we have add type="module" in our script tag
 *
 *
 *
 *
 * Parcel =>
 * - Creating Dev build,
 * - Creating local server
 * - "HMR" => Hot Module Replacement
 * and it does "HMR" => Hot Module Replacement (change to reflect in the server if
 * any change is made in the file ). Parcel is reading all the file and doing hmr and
 * uses
 * - file watching algorithms(which is written in c++)
 * It is also caching for Faster Builds in ".parcel-cache" keeps a snapshot
 * to check any changes and apply these changes
 * - Image Optimization
 * - Minify file (Minification of file in production build)
 * - Bundling (in production)
 * - Compressing (in production)
 * - Consistent Hashing
 * - Code Splitting
 * - Differential Bundling - Support Older Browsers
 * - Diagnostics
 * - Error Handling
 * - Https
 * - Tree Shaking - Remove unused code
 * - Different Dev and Prod bundles
 *
 * To production build your app NPX PARCEL BUILD INDEX.HTML
 * and remove main: "index.js" line from package.json
 *
 * to give your app which browsers it will support we can
 * clarify this in our package .json
 *
 * "browserslist": [
 *      "last 2 Chrome version",
 *      "last 2 Firefox version",
 *      "last 2 version" // last two versions of all browsers
 * ]
 * this means it will definitely work on this two and may and may not work on other browsers
 *
 */

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/** 3rd Episode
 * * 
 * Creating scripts to start the project in dev and prod build
 * "scripts": {
    "start": "npx parcel index.html",
    "prod": "npx parcel build index.html",
    "test": "jest"
  },
 * 
 */

/** JSX (Javascript XML) is not html in js.
 * It looks like html or xml
 * Now this jsxHeading is equivalent to React.createElement
 * which creates a h1 tag with id="h1" using JSX which is transpiled before
 * it reaches JS engine so that browsers can understand means JSX is not read
 * by JS engines and this transpiling is done by "PARCEL" and parcel alone does not work
 * it distributes it works and ask "BABEL" (a javascript compiler converts jsx
 * to converts into code that browsers, react, js engine understand ) to do the same piece of work
 *
 * React.createElement => React Element (a Js object) => Then it is rendered as HTML Element
 * Now this JSX is converted to React.createElement by " " and then whole process is same
 * JSX  => React.createElement => React Element (JS Object ) => HTMLElement(render)
 * Jsx also escape the malicious injection when data is wrapped inside the {}
 * if it is coming from api this will sanitize everything. No malicious attack is allowed
 *
 * While giving attributes in jsx that should be in camel case
 *
 */

/**
const test = <span>Test</span>;
const jsxHeading = (
    <h1 id="h1" className="heading">
        {test}
        This is how we create h1 using JSX
    </h1>
);
 */

/**
 * REACT COMPONENT
 * 1. Class based component - Old way
 * 2. Functional component - New way
 * React Functional Component is just normal javascript function
 * A js function which return a react element
 * A function which is returning some piece of jsx is functional component
 */

/**
// These two function fn and fn2 are same
const fn = () => true;
const fn2 = () => {
    return true;
};
*/

/**
// These two functional component are same if we are returning single line jsx element we can write one another way
const HeadingComponent = () => {
    return <h1 className="HeadingComponent">React Functional Component</h1>;
};
const HeadingComponent1 = () => (
    <h1 className="HeadingComponent">React Functional Component</h1>
);
const HeadingComponent2 = () => <h1>React Functional Component</h1>;
*/

/**
const TitleComponent = () => (
    <h1 className="TitleComponent">React Functional Title Component</h1>
);
 */

/**
 * This is also called Component composition where we compose
 * multiple component inside one component
 */
// const number = 100;
// const HeadingComponent = () => (
//     <div id="container">
//         <TitleComponent />
//         <TitleComponent></TitleComponent>
//         {/*
//         Since we can run any js code in jsx using parenthesis functional component is a function which
//         which is a js code so that this executes and works same as above two lines are working
//         */}
//         {TitleComponent()}
//         {/* Injecting any js code in jsx using parenthesis */}
//         <h2>{number + 10}</h2>
//         <h2>{jsxHeading}</h2>
//         <h1 className="HeadingComponent">React Functional Heading Component</h1>
//     </div>
// );

// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// // To render a functional component
// root.render(<HeadingComponent />);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4th Episode
/**
 * Config Driven UI
 * This UI is driven by config which is driven by backend
 * The UI is changing based on the data coming from backend
 *
 */
const restaurants = [
    {
        imgSrc: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        name: "Meghana Foods",
        description: "Biryani, North Indian, Asian",
        rating: "4.4 Stars",
        deliveryTime: "30 mins",
    },
    {
        imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
        name: "Pizza Palace",
        description: "Pizza, Italian, Fast Food",
        rating: "4.6 Stars",
        deliveryTime: "25 mins",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        name: "Ramen House",
        description: "Japanese, Ramen, Noodles",
        rating: "4.7 Stars",
        deliveryTime: "20 mins",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        name: "Dessert Delight",
        description: "Desserts, Sweets, Bakery",
        rating: "4.8 Stars",
        deliveryTime: "15 mins",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
        name: "Pizza Perfect",
        description: "Italian, Pizza, Fast Food",
        rating: "4.4 Stars",
        deliveryTime: "20 mins",
    },
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://t3.ftcdn.net/jpg/01/36/62/96/360_F_136629639_Y1FqxHd8P9nGMoV3r8iq4EnHOmo7iel7.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={props.data.imgSrc} alt="res-logo" />
            <h3>{props.data.name}</h3>
            <h4>{props.data.description}</h4>
            <h4>{props.data.rating}</h4>
            <h4>{props.data.deliveryTime}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* not using key (not acceptable) <<<< index as key <<<< unique id as key (best practice)*/}
                {restaurants.map((el, i) => {
                    return <RestaurantCard key={el.name} data={el} />;
                })}
                {/* <RestaurantCard /> */}

                {/* Restaurant Card */}
            </div>
        </div>
    );
};

const AppLout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLout />);
