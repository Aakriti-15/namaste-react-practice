import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }
        console.log("Child - Constructor" + this.props.name);
    }
    
    
    
    async componentDidMount() {
        // best place to make the api call 
    //     const data = await fetch("https://api.github.com/users/Aakriti-15")
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //     userInfo: json,
    // });


    this.timer = setInterval(()=>{
        console.log("NAMASTE REACT OP")
    },1000)
        console.log("Child - componentDidMount" + this.props.name); 
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }
      
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("ComponentWillUnmount");
    }



    render(){
        const {count} = this.state;
        console.log("Child - render" + this.props.name);
        return(
            <div>

       
            <h1>Profile Class Component</h1>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2> 
        
        
        
        {/*use optional chaining and destructuring*/} 
        {/* <h2>Count: {this.state.count}</h2> */}
        {/* <button onClick ={()=>{
            //WE DO NOT MUTATE STATE DIRECTLY
            // Never do this.state.count = something
            this.setState({
                count:1,
                count2:2,
            })
        }}>SetCount</button> */}
         </div>
        );
        }
}
export default Profile;

//in some other code we will import it like this => import Profile from "./ProfileClass"


 
// the very first thing that will be called will be parent constructor 
//second thing is parent - render
// third thing that will be called is child - constructor 
// fourth will be child - render
// child - componentDidMount
// then parent - componentDidMount
// IT WILL FIRST COMPLETE THE LIFELINE ONE BY ONE


  {/* 
    this is called render phase
    Parent constructor 
    parent render 
    child constructor 
    child render 

now technically pehle child componentdid mount ko call krna chahie tha but this will not do that this will frist call the parent component did mount and not the api call
because the api call would will be the async function and it will take some time to complete so react will not wait for that to complete and it will call the parent component did mount and then when the api call is completed then it will call the child component did mount


*/}