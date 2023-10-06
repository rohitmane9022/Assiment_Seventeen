import { useNavigate } from "react-router"
import "../stylesheets/trackers.css"


export default function Trackers (){

    const navigate = useNavigate()

    const addToGoals = () =>{
       navigate("/goal")
    }

    const trackedGoals = () =>{
        navigate("/goalslist")
    }


    const addExcercises = () =>{
        navigate("/excercise")
    }

    const trackedExcercises = () =>{
        navigate("/tracked")
    }

    const allExcercises = () =>{
        navigate("/excerciselist")
    }

    const addToFoods = () =>{
        navigate("/food")
    }

    const trackedFoods = () =>{
        navigate("/foodslist")
    }


    return(
        <div> 
            {
                <ul>
                <h1  className="headerclass">Add and Track</h1>
                <button onClick={()=>{addToGoals()}} className="goalsbtn">Add Goals</button>
                <button onClick={()=>{trackedGoals()}} className="goalsbtn">Tracked Goals</button>
                <button onClick={()=>{addExcercises()}} className="excercisebtn">Add Excercises</button>
                <button onClick={()=>{trackedExcercises()}} className="excercisebtn">Tracked Excercises</button>
                <button onClick={()=>{allExcercises()}} className="excercisebtn">All Excercises</button>
                <button onClick={()=>{addToFoods()}} className="foodsbtn">Add Foods</button>
                <button onClick={()=>{trackedFoods()}} className="foodsbtn">Tracked Foods</button>
                </ul>
            }
        </div>
    )
}