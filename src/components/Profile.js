import { useState } from "react";
const Profile =(props)=>{
    const [count, setCount] = useState("0");
    // const [count2, setCount2] = useState("0");
    console.log("render function");
    useEffect(()=>{
        console.log("useEffect");

    });
    console.log("render");
    
    
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
