import {IMG_CDN_URL} from "../constants";



const RestrauntCard=({name, cuisines, cloudinaryImageId, avgRating})=>{
     //const{name, cuisines, cloudinaryImageId, avgRating} = props;//destructuring => this is a way to extract values from an object and assign them to variables with the same name as the keys in the object
    return(
        <div className="card">
            <img src = {IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestrauntCard;