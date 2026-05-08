import { restrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";

 

function filterData(searchText, restraunts){
    // 8 restraunt list => 
    const filterData = restraunts.filter((restraunt)=> 
        restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
);
return filterData;
}

const Body =()=>{
    
    const [restraunts, setRestraunts] = useState(restrauntList);// this is a hook which is used to manage the state of a component and it returns an array with two values , first value is the current state and second value is a function which is used to update the state
    const [searchText , setSearchInput ] = useState("");// this is a hook which is used to manage the state of a component and it returns an array with two values , first value is the current state and second value is a function which is used to update the state
   

useEffect(()=>{
// getRestraunt();
}, []);  

// async function getRestraunt(){
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING");//this is where we will put the api 
//     const json = await data.json();
//     console.log(json);
// setRestraunts(json?.data?.cards[2]?.data?.data?.cards)
// }

//this useEffect will be called when the use Effect wants to be called 
//after every render it will call the function that i will pass inside it

    return(
        <>
        <div className="search-container">
        <input
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText}//e.target.value => whatever you write in input
        onChange = {(e) => {
            setSearchInput(e.target.value);
        }}
        />
        
        <button 
        className="search-btn" 
        onClick ={()=>{
           const data = filterData(searchText, restraunts);
          //need to filter the data
           //update the state - restaurants
          //filterData();
           setRestraunts(data);
        }}
        >
            Search
            </button>
        </div>
        <div className="restraunt-list">
            {restraunts.map((restaurant) =>{
                    return (
                    <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
                    ); 
                })}
             </div>
        </>
    );
};
export default Body;




  // we can not change it as it is hard coded value 
   //this search text is a local variable
    //returns = [variable name , function to update the variable]
    //this is destrcuturing that is happening 


    //  const [searchClicked, setSearchedClicked] = useState(" false");
     //initially have false saved