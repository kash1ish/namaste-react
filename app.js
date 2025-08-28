import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},
    [
        React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"namaste react"),
        React.createElement("h2",{},"im h2 tag")
    ]
    ),
    React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag")
    ]
    )
    ])
     
//JSX 


const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(heading);