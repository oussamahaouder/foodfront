import * as React from 'react';
import CardComponent from '../components/CardComponent';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import foodService from '../services/FoodServise';


export default function MealsPage() {
const [meals,setMeals] = useState({});
const { register, handleSubmit } =useForm();


const [data, setData] = useState("");
    
useEffect( ()=>{
    async function fetchMeals(){
        setMeals(await foodService.getAllMeals()) ;
    }
    console.log(data.Description)
    foodService.createMeal(data.MealName,data.Description)
    fetchMeals();
    },[data])
   
  return (
   <div style={{alignItems : "center"}}>
        {meals.data !== undefined ? meals.data.map(meal=>{
            return <CardComponent  meals={meal}/>
        }):
        <></>}
    <br></br>
     <form onSubmit={handleSubmit((data) => {
        setData(data)
        window.location.reload(false)
        })}>
      
      <input {...register("MealName")} required placeholder="Nom du plat" />
      <textarea {...register("Description")} required placeholder="Description" />
      <input type="submit" />
    </form>
    </div>
  );
}