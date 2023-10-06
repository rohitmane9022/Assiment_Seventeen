import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGoals, fetchTrackedExcercises } from "../actionCreators/actions"
import TrackedExcerciseCard from "../components/TrackedExcerciseCard"




export default function TrackedExcercise(){

    const trackedState =  useSelector((state)=>state.trackedExcercise)
    
    const dispatch = useDispatch()
 
    useEffect(()=>{
     dispatch(fetchTrackedExcercises())
    }, [])

    const totalCaloriesBurned = trackedState.reduce((acc, trackedItem)=>(acc+ trackedItem.caloriesBurned), 0)
    localStorage.setItem("caloriesBurned", totalCaloriesBurned)

     return(
         <div>{
             trackedState.map((tracked, index)=>(
                 <ul key={index}> 
                    <TrackedExcerciseCard excerciseDetails ={tracked} dispatch={dispatch}/>
                 </ul>
             ))  
             } </div>
     )
 }