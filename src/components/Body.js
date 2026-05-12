import { restrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

function filterData(searchText, restraunts) {
  // 8 restraunt list =>
  const filterData = restraunts.filter((restraunt) =>
    restraunt?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
  );
  return filterData;
}

const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]); // this is a hook which is used to manage the state of a component and it returns an array with two values , first value is the current state and second value is a function which is used to update the state
  const [filteredRestraunts, setFilteredRestraunts] = useState([]); // this is a hook which is used to manage the state of a component and it returns an array with two values , first value is the current state and second value is a function which is used to update the state
  const [searchText, setSearchInput] = useState(""); // this is a hook which is used to manage the state of a component and it returns an array with two values , first value is the current state and second value is a function which is used to update the state

  //empty dependency array => once after render
  // dep array [searchText] => once after initial render + everytime after render when searchText changes
  useEffect(() => {
    //API Call
    getRestraunt();
  }, []); //this another function is a callback function , it will be called when ever useEffect want it to call

  async function getRestraunt() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(json);

    const restaurants =
      json?.data?.cards?.find(
        (x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setAllRestraunts(restaurants);
    setFilteredRestraunts(restaurants);
  }

  // async function getRestraunt(){
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING");//this is where we will put the api
  //     const json = await data.json();
  //     console.log(json);
  // setRestraunts(json?.data?.cards[2]?.data?.data?.cards)
  // }

  //this useEffect will be called when the use Effect wants to be called
  //after every render it will call the function that i will pass inside it

  console.log("render");

  //not render component (early return)
  if (!allRestraunts) return null;

  if (filteredRestraunts?.length == 0) return <h1>Match your filter</h1>;

  //conditional rendering
  //if restraunts is empty -> shimer ui
  //if restraunts has data -> actual data ui

  return filteredRestraunts.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText} //e.target.value => whatever you write in input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestraunts);
            //need to filter the data
            //update the state - restaurants
            //filterData();
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {filteredRestraunts.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
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
