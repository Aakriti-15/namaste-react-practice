import { useState, useEffect } from "react"; 
import Logo from "../assets/img/mom.png";
import {Link} from "react-router-dom";

const loggedInUser = ()=>{
    //API call to check authentication
    return true;

}

export const Title= ()=>{
    return(
   
    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src={Logo} />
    </a>
    );
}

const Header =()=>{
    
    // const[title, setTitle]= useState("Food Villa");//if my title changes it will be updated very very quickly
   
   
   const [isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(()=>{
console.log("useEffect");
},[])

console.log("render")


    return (
    <div className ="header">
        {Title()}
       
        {/* <button onClick={()=>setTitle("Mom's Kitchen")}>
            Change title
        </button> */}
        <div className="nav-items">
            <ul>
               <Link to ="/">
                <li>Home</li>
                </Link>
                <Link to ="/about">
                <li>About</li>
                </Link>
               <Link to ="/contact"> 
               <li>Contact</li>
                </Link>
                <Link to ="/cart">
                <li>Cart</li>
                </Link>
            </ul>
        </div>
        {isLoggedIn ? (
            <button onClick ={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
            <button onClick ={() => setIsLoggedIn(true)}>Login</button>
        )}
        </div>
    )//this title could also be written as <title/> as it is also a functionl component 
}
export default Header;
