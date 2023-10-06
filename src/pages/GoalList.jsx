import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGoals } from "../actionCreators/actions"
import GoalCard from "../components/GoalCard"



export default function GoalList(){

    const goalsState =  useSelector((state)=>state.goalsList)
    
    const dispatch = useDispatch()
 
    useEffect(()=>{
     dispatch(fetchGoals())
    }, [])

    const goalsData = useSelector((state)=>state.goalsList)
    const totalTargetCalories = goalsData.reduce((acc, goalItem)=>(acc+ goalItem.targetCalories), 0)
    localStorage.setItem("targetCalories", totalTargetCalories)  
     return(
         <div>{
             goalsState.map((goal, index)=>(
                 <ul key={index}> 
                    <GoalCard goalDetails ={goal} dispatch={dispatch}/>
                 </ul>
             ))  
             } </div>
     )
 }