import React from "react";
import ReactDOM from "react-dom/client";


   //React.createElement => Object => HTML(DOM)
    
         //this will be a huge mess
    //when we have to pass in multiple children , we pass in the form of array
    
//JSX => we want to write html using javascript
//  const heading = <h1 id="title" key="h2">Namaste React</h1>
//this is a perfectly valid js code 
//this is a react element

//this is a functional component
const title = () =>{
    return (
    <h1 id="title" key ="h2">Testing function</h1>
)}//this can also be rendered in side another functional component



const data = api.getData();







//components =>functional component => it is a js function that returns a react element (jsx) 
const HeaderComponent =()=>{
    return (
    <div>
        {title()} 
        <h1>Namaste React functional component</h1>
        <h2>This is a H2 tags</h2>
        </div>
    )//this title could also be written as <title/>
}
//this is a react component

//if we have a normal variable we will write it normally in parenthesis
//if its functional component we will write it in the form of tag or like function()


    const root =  ReactDOM.createRoot(document.getElementById("root"))// whatever you pass inside it , it becomes the root , when ever you want to use inside anything , we use create root 

    root.render(<HeaderComponent/>);  

