import {Outlet} from 'react-router-dom';
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";
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
    }
    componentDidMount(){
        console.log("componentSDidMount");
    }
      render(){
        console.log("render");
        return (
    <div>
        <h1>About us Page</h1>
        <p>
            {" "}
            This is the namaste react Live course chapter 07 - Finding the path
            </p>
           {/* <Outlet />  This is used to show the nested component in the parent component */}
           <ProfileFunctionComponent name ={"Akshay"}/>
           <Profile name ={"Aakriti"} />

        </div>
);
      }
}
export default About;
//best place to make an api call is componentDidMount