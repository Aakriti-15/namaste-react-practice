import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement("h1",{id: "title" , key:"h1"},"Heading 1");
    const heading2 = React.createElement("h2",{id:"title" , key:"h2"}, "Heading 2");
   
    const container = React.createElement("div",{id: "container"},[heading1, heading2])//when we have to pass in multiple children , we pass in the form of array
    const root =  ReactDOM.createRoot(document.getElementById("root"))// whatever you pass inside it , it becomes the root , when ever you want to use inside anything , we use create root 

    root.render(container);