import React from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from './components/Contact';
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {

  return (
    <>
    <Header />
    {/* {Outlet}*/}
    <Outlet />
    <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout/>,
  errorElement: <Error/>,
  children: [
    {
    path :"/",
    element : <Body />
  },
    { 
    path:"/about",
    element: <About />,
    children: [{
      path : "profile", // parent path/{path} ==> localhost:1244/about/profile
      element : <Profile />,
      }
    ]
  },
  {
    path :"/contact",
    element : <Contact />,
  },
  {
    path : "/restaurant/:id",
    element: <RestaurantMenu />,
  },
  ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // whatever you pass inside it , it becomes the root , when ever you want to use inside anything , we use create root

root.render(<RouterProvider router={appRouter}/>);

//inline style in react => style = {{color: "red"}} => this is an object in js and we are passing it in jsx
//class in react => className => this is because class is a reserved keyword in js and we cannot use it as an attribute in jsx so we use className instead of class

//props is obj (properties)

{
  /* <RestrauntCard {...restrauntList[0].info}/>
            <RestrauntCard {...restrauntList[1].info}/>
            <RestrauntCard {...restrauntList[2].info}/>
            <RestrauntCard {...restrauntList[3].info}/>
            <RestrauntCard {...restrauntList[4].info}/>
            <RestrauntCard {...restrauntList[5].info}/>
            <RestrauntCard {...restrauntList[6].info}/>
            <RestrauntCard {...restrauntList[7].info}/>
            <RestrauntCard {...restrauntList[8].info}/>
            <RestrauntCard {...restrauntList[9].info}/>
            <RestrauntCard {...restrauntList[10].info}/>
            <RestrauntCard {...restrauntList[11].info}/>
            <RestrauntCard {...restrauntList[12].info}/>
            <RestrauntCard {...restrauntList[13].info}/>
            <RestrauntCard {...restrauntList[14].info}/> */
}

//React.fragment => empty tag => <> </>
/**
             * Header
                -Logo
                -nav Items(right)
                -cart
             * body 
                -search bar
                -restaurant cards (many cards)
                   -image
                   -name 
                   -rating
                   -cuisines
             * footer
                -links
             */
//React.createElement => Object => HTML(DOM)

//this will be a huge mess
//when we have to pass in multiple children , we pass in the form of array
//components =>functional component => it is a js function that returns a react element (jsx)

//JSX => we want to write html using javascript
//  const heading = <h1 id="title" key="h2">Namaste React</h1>
//this is a perfectly valid js code
//this is a react element
//if we have a normal variable we will write it normally in parenthesis
//if its functional component we will write it in the form of tag or like function()
//this is a functional component
//this can also be rendered in side another functional component

// const Title = () => {

//    return(
//     <a href = "/">
//      <img className ="logo"
//       alt="logo"
//     src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"/>
// </a>
// )};

// const Header =()=>{
//     return (
//     <div className ="header">
//         {title()}
//         <div className="nav-items">
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Cart</li>
//             </ul>
//         </div>
//         </div>
//     )//this title could also be written as <title/> as it is also a functionl component
// }
//this is a react component

//  Config Driven UI
//The data is controlled by backend

// const config =[
//     {
//         type: "carousel",
//         cards:[{
//             offerName:50% off
//         },
//     {
//         offerName:"No Delivery Charge"
//     }]
//     },
//      {
//         type: "restraunt",
//         cards:[{
//             image: "https://b.zmtcdn.com/data/pictures/chains/1/102881/c8008523810583087401ff292c1763a3.jpg?fit=around|960:500&crop=960:500;*,*",
//     name: "Burger King",
//     cuisines: ["burgers", "american"],
//     rating: "4.2",
//         },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXajj5mcKMEDUPMicJdGEdIAsR44a45Sceg&s",
//     name: "KFC",
//     cuisines: ["burgers", "american"],
//     rating: "4.3",
//     }]
//     }
// ]
 