import axios from 'axios';
import React, { useState } from 'react'
import { ImgDiv, MainContainer,HomeImg } from './Style';
import homeSvg from '../../assets/home.svg';
import RecipeCardComp from "./RecipeCard";
import Header from '../header/Header';






const APP_ID = "bfbb3efc"; 
const APP_KEY = "43faeee790f26cd82b28050d3031619d";



const Home = () => {
  const[query,SetQuery]=useState("");
  const[food,setFood]=useState();
  const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
  const[meal,setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;


  const getData = async ()=> {
    if(query){
      const result = await axios.get(url);
      setFood(result.data.hits)
      console.log(result.data.hits);
    }else {
      console.log("please fiil the form");
    }
  }
  return (
    <div>
<Header  setQuery={SetQuery}
getData={getData}
mealTypes={mealTypes}
setMeal={setMeal}

/>

{food? (<MainContainer>
{food.map((liste,index)=>(
  <RecipeCardComp key={index} recipe1={liste.recipe}/>
))}

</MainContainer>

):<ImgDiv>
<HomeImg src={homeSvg}/>
</ImgDiv>}




    </div>
  )
}

export default Home