import { useState } from "react";
const Profile =(props)=>{
    const [count, setCount] = useState("0");
    // const [count2, setCount2] = useState("0");
    console.log("render function");
    useEffect(()=>{
        //API Call
        const timer =  setInterval(()=>{
                     console.log("useEffect");

         },1000);
        
        console.log("useEffect");

        return ()=>{
            //this function is called when you are unmounting that component 
            clearInterval(timer); 
            console.log("useEffect Return");
        }
    },[]);
    console.log("render");
    // here the first thing that will be called is render , 
    //second thing that will be called is useEffect 
    // and the third thing that will be called is useEffect Return

    
    return (
<div>
    <h1>Profile Component</h1>
    <p>Name: {props.name}</p>
    <p>Count: {count}</p>
    <button onClick ={
    ()=> {setCount(1);
        // setCount2(2);

    }}>
            Count
            </button>

</div>
    )
}
export default Profile;
