import React from "react";
import ReactDOM from "react-dom/client";
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


const Title = () => {
    
   return(
    <a href = "/">
     <img className ="logo"
      alt="logo"
    src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"/>
</a>
)};










const Header =()=>{
    return (
    <div className ="header">
        {Title()}
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )//this title could also be written as <title/> as it is also a functionl component 
}
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








const restrauntList= [
  {
    info: {
      id: "160794",
      name: "Jujube Asian Cookhouse",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/1/ca61ef44-74a3-41f0-a6d0-e2349335576d_160794.jpg",
      locality: "Sector 15",
      areaName: "Sector 15",
      costForTwo: "₹500 for two",
      cuisines: ["Asian", "Chinese", "Sushi", "Pan-Asian", "Japanese"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "5.0K+",
      sla: { deliveryTime: 34, slaString: "30-35 mins", lastMileTravelString: "4.2 km" },
      aggregatedDiscountInfoV2: { header: "60% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/jujube-asian-cookhouse-sector-15-rest160794" }
  },
  {
    info: {
      id: "1213373",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/23/673990e7-4123-4e4a-8e1a-8d40f2a1f7f4_1213373.jpg",
      locality: "Mathura Rd",
      areaName: "Pacific Mall Faridabad",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi", "Kebabs", "North Indian", "barbeque"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRatingsString: "74",
      sla: { deliveryTime: 25, slaString: "25-30 mins", lastMileTravelString: "3.0 km" },
      aggregatedDiscountInfoV2: { header: "60% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/dum-safar-biryani-mathura-rd-pacific-mall-faridabad-rest1213373" }
  },
  {
    info: {
      id: "1066132",
      name: "Burger King",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee995b0e-46d1-42f4-9434-f332b2f85ede_1066132.jpg",
      locality: "Shop no.06",
      areaName: "Sector-20B",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRatingsString: "61",
      sla: { deliveryTime: 23, slaString: "20-25 mins", lastMileTravelString: "3.0 km" },
      aggregatedDiscountInfoV2: { header: "₹75 OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/burger-king-shop-no-06-sector-20b-rest1066132" }
  },
  {
    info: {
      id: "253728",
      name: "McDonald's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/818d0b3d-5d00-4190-8b96-09c433bc61e7_253728.JPG",
      locality: "Crown Plaza Mall",
      areaName: "Sector 15",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "15K+",
      sla: { deliveryTime: 23, slaString: "20-25 mins", lastMileTravelString: "3.0 km" },
      aggregatedDiscountInfoV2: { header: "40% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/mcdonalds-crown-plaza-mall-sector-15-rest253728" }
  },
  {
    info: {
      id: "780926",
      name: "Subway",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/f704c306-98e9-4b9c-a0d6-39a019a147fe_780926.jpg",
      locality: "Mehta Road",
      areaName: "Pacific Mall of Faridabad",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "833",
      sla: { deliveryTime: 31, slaString: "30-35 mins", lastMileTravelString: "4.3 km" },
      aggregatedDiscountInfoV2: { header: "50% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/subway-mehta-road-pacific-mall-of-faridabad-rest780926" }
  },
  {
    info: {
      id: "28803",
      name: "Domino's Pizza",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/3/4c904d97-cd2c-4553-ad99-c339b53ea3a6_28803.JPG",
      locality: "NIT",
      areaName: "New Industrial Township",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRatingsString: "5.5K+",
      sla: { deliveryTime: 25, slaString: "20-25 mins", lastMileTravelString: "5.0 km" },
      aggregatedDiscountInfoV2: { header: "₹80 OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/dominos-pizza-nit-new-industrial-township-rest28803" }
  },
  {
    info: {
      id: "60149",
      name: "Milan Sweet House",
      cloudinaryImageId: "o4mm60nuqh7t9chdcmxi",
      locality: "Sector 10",
      areaName: "Sector 10",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "North Indian", "South Indian", "Chinese", "Chaat", "Thalis", "Desserts"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "14K+",
      sla: { deliveryTime: 38, slaString: "35-40 mins", lastMileTravelString: "5.9 km" },
      aggregatedDiscountInfoV2: { header: "₹125 OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/milan-sweet-house-sector-10-rest60149" }
  },
  {
    info: {
      id: "46200",
      name: "Sethi Dhaba",
      cloudinaryImageId: "e818cf7cb41183037d9f29109dbe4085",
      locality: "Block G",
      areaName: "NIT",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor", "Biryani", "Snacks", "Beverages", "Desserts", "Home Food", "Indian", "Fast Food"],
      avgRating: 3.9,
      avgRatingString: "3.9",
      totalRatingsString: "44K+",
      sla: { deliveryTime: 33, slaString: "30-40 mins", lastMileTravelString: "5.6 km" },
      aggregatedDiscountInfoV2: { header: "60% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/sethi-dhaba-block-g-nit-rest46200" }
  },
  {
    info: {
      id: "692391",
      name: "ABC Biryani Wala",
      cloudinaryImageId: "2dc98737debcb84dcc9a32d63b9b73e0",
      areaName: "Sector 16",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Snacks", "Chinese"],
      avgRating: 4.0,
      avgRatingString: "4.0",
      totalRatingsString: "1.0K+",
      sla: { deliveryTime: 29, slaString: "25-30 mins", lastMileTravelString: "5.0 km" },
      aggregatedDiscountInfoV2: { header: "₹550 OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/abc-biryani-wala-sector-16-rest692391" }
  },
  {
    info: {
      id: "23876",
      name: "Ashirwad Restaurant",
      cloudinaryImageId: "bimrfrmdnuztgdpvury6",
      locality: "Sector 16",
      areaName: "Sector 16",
      costForTwo: "₹600 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 3.9,
      avgRatingString: "3.9",
      totalRatingsString: "1.5K+",
      sla: { deliveryTime: 36, slaString: "35-40 mins", lastMileTravelString: "4.4 km" },
      aggregatedDiscountInfoV2: { header: "₹100 OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/ashirwad-restaurant-sector-16-rest23876" }
  },
  {
    info: {
      id: "1070283",
      name: "PVR Cafe",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/2/befc1f58-5bf3-441f-b86b-942928a49efe_1070283.jpg",
      locality: "FARIDABAD EF3",
      areaName: "FARIDABAD EF3",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Fast Food", "Beverages"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "4",
      sla: { deliveryTime: 18, slaString: "15-20 mins", lastMileTravelString: "0.2 km" },
      aggregatedDiscountInfoV2: { header: "60% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/pvr-cafe-faridabad-ef3-rest1070283" }
  },
  {
    info: {
      id: "327587",
      name: "Delights by INOX",
      cloudinaryImageId: "b857fcf611707fedd3773eb02688f925",
      locality: "Ef3 Mall",
      areaName: "Sector 20",
      costForTwo: "₹400 for two",
      cuisines: ["Snacks"],
      avgRating: 3.7,
      avgRatingString: "3.7",
      totalRatingsString: "28",
      sla: { deliveryTime: 19, slaString: "15-20 mins", lastMileTravelString: "0.2 km" },
      aggregatedDiscountInfoV2: { header: "60% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/delights-by-inox-ef3-mall-sector-20-rest327587" }
  },
  {
    info: {
      id: "788496",
      name: "Taco Bell",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/b0884a9e-911a-4213-a4cf-3cb339aa63e1_788496.JPG",
      locality: "NIT_FBD",
      areaName: "NIT",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRatingsString: "1.6K+",
      sla: { deliveryTime: 31, slaString: "30-35 mins", lastMileTravelString: "4.3 km" },
      aggregatedDiscountInfoV2: { header: "65% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/taco-bell-fbd-nit-rest788496" }
  },
  {
    info: {
      id: "785503",
      name: "California Burrito",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/412f6844-2d57-4c20-9dc0-ea6bb26010b4_785503.jpg",
      locality: "Sector 12",
      areaName: "Sector 16_FBD",
      costForTwo: "₹250 for two",
      cuisines: ["Mexican", "American", "Salads", "Continental", "Keto", "Healthy Food", "Beverages", "Snacks", "Desserts", "Fast Food"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRatingsString: "3.2K+",
      sla: { deliveryTime: 26, slaString: "25-30 mins", lastMileTravelString: "4.7 km" },
      aggregatedDiscountInfoV2: { header: "50% OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/california-burrito-sector-12-sector-16-fbd-rest785503" }
  },
  {
    info: {
      id: "483332",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/c1850d13-2bb3-4c4e-a881-b907ebfec1c3_483332.jpg",
      locality: "KC Road",
      areaName: "Badkal Lake",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "2.6K+",
      sla: { deliveryTime: 25, slaString: "20-30 mins", lastMileTravelString: "4.5 km" },
      aggregatedDiscountInfoV2: { header: "₹150 OFF" },
      isOpen: true,
    },
    cta: { link: "https://www.swiggy.com/city/faridabad/box8-desi-meals-kc-road-badkal-lake-rest483332" }
  },
];


const RestrauntCard=({name, cuisines, cloudinaryImageId, avgRating})=>{
     //const{name, cuisines, cloudinaryImageId, avgRating} = props;//destructuring => this is a way to extract values from an object and assign them to variables with the same name as the keys in the object
    return(
        <div className="card">
            <img src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_288,c_fill/${cloudinaryImageId}`}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}



//props is obj (properties)
const Body =()=>{
    return(
        <div className="restraunt-list">
            {
                restrauntList.map((restaurant) =>{
                    return <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
                 })
            }
            {/* <RestrauntCard {...restrauntList[0].info}/>
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
            <RestrauntCard {...restrauntList[14].info}/> */}


            

        </div>//restraunt is the prop here which is then used as parameter
    )
}
//React.fragment => empty tag => <> </> 
const Footer = ()=>{
    return(
        <h4>Footer</h4>
    )
}

const AppLayout =()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
        
    )
}



    const root =  ReactDOM.createRoot(document.getElementById("root"))// whatever you pass inside it , it becomes the root , when ever you want to use inside anything , we use create root 

    root.render(<AppLayout/>);  



    //inline style in react => style = {{color: "red"}} => this is an object in js and we are passing it in jsx
    //class in react => className => this is because class is a reserved keyword in js and we cannot use it as an attribute in jsx so we use className instead of class