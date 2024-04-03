import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import foodService from '../services/FoodServise';
import { useEffect } from 'react';
export default function CardComponent(meal) {

    const deleteMeal =(e)=>{
        foodService.deleteMealById(meal.meals.id)
        window.location.reload(false)
    }
  return (
    <Card sx={{ maxWidth: 345 , alignItems : "center" }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {meal.meals.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {meal.meals.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" >Share</Button>
      <Button size="small" onClick={e=>deleteMeal(e)}>Learn More</Button>
    </CardActions>
  </Card>
  )
}
