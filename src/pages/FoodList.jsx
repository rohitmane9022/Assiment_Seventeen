import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFoods } from "../actionCreators/actions"
import FoodCard from "../components/FoodCard"

export default function FoodList(){

const foodstate = useSelector((state)=>state.foodList)
const dispatch = useDispatch()

useEffect(()=>{dispatch(fetchFoods())},[])


const foodsData = useSelector((state)=>state.foodList)
const totalCaloriesConsumed = foodsData.reduce((acc, calorieItem)=>(acc+ calorieItem.calories),0)
localStorage.setItem("caloriesConsumed", totalCaloriesConsumed)


    return(
        <div> {
            foodstate.map((food, index)=>(
                <ul key={index}> 
                  <FoodCard foodDetails={food} dispatch={dispatch}/>

                </ul>
            ))
            
            }</div>
    )
}