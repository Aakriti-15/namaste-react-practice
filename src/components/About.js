import {Outlet} from 'react-router-dom';
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";
import React from "react";
// const About2 =()=>{
// return (
//     <div>
//         <h1>About us Page</h1>
//         <p>
//             {" "}
//             This is the namaste react Live course chapter 07 - Finding the path
//             </p>
//            {/* <Outlet />  This is used to show the nested component in the parent component */}
//            <ProfileFunctionComponent name ={"Akshay"}/>
//            <Profile name ={"Aakriti"} />

//         </div>
// );
// };
class About extends React.Component{
    constructor(props){
        super(props);
        
        console.log("Parent - Constructor")
    }
    componentDidMount(){
        console.log("Parent - componentSDidMount");
        
    
    }
      render(){
        console.log("Parent - render");
        return (
    <div>
        <h1>About us Page</h1>
        <p>
            {" "}
            This is the namaste react Live course chapter 07 - Finding the path
            </p>
           {/* <Outlet />  This is used to show the nested component in the parent component */}
           <ProfileFunctionComponent name ={"First Child"} location ="Noida"/>
           {/* <ProfileFunctionComponent name ={"Second Child"} location = "Bangalore"/> */}
           {/* <Profile name ={"Aakriti"} /> */}

        </div>
);
      }
}
export default About;
//best place to make an api call is componentDidMount


{/*
    things in order
    1. parent constructor 
    2. parent rendor
    3. first child constructor
    4. first child render
    5. second child constructor
    6. second child render
    7. first child componentDidMount 
    8. second child componentDidMount
    9. parent componentDidMount
    
    
    */}
    //first phase is render phase and second is commit phase
    //render phase has constructor and render phase 
    //commit phase is the place where actually react is modifying ur dom so compoenent did mount is called
    