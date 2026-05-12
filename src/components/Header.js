import { useState } from "react"; 

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
    src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"/>
    </a>
    );
}

const Header =()=>{
    
    // const[title, setTitle]= useState("Food Villa");//if my title changes it will be updated very very quickly
   
   
   const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
    <div className ="header">
        {Title()}
       
        {/* <button onClick={()=>setTitle("Mom's Kitchen")}>
            Change title
        </button> */}
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
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
