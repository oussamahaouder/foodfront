import axios from 'axios'

export default  {
async getAllMeals () {
    try {
        return await axios.get('api/Food/GetAllMeals')
    }
     catch
     (error) { console.log("Error",error); }


},

async deleteMealById(id){
    try {
        await axios.delete('api/Food/Meal'+'?mealId='+id)

    }
    catch(error){
        console.log("Error",error)
    }
},

async createMeal(mealName ,description){
    console.log(description)
    
    try {
        await axios.post('api/Food/CreateMeal',{
            mealName : mealName,
            mealDescription : description,
            mealIngredients: [
  
            ]
        })
    }
    catch(error) {
        console.log("Error",error)
    }
}

}
