import { useNavigate } from "react-router"
import "../stylesheets/dashboard.css"
import { useSelector } from "react-redux"

export default function Dashboard (){

   const navigate = useNavigate()

    const goToTracker = () =>{
       navigate("/tracker")
    }
   
    

     const target = localStorage.getItem("targetCalories")
     const burned = localStorage.getItem("caloriesBurned")
     const consumed = localStorage.getItem("caloriesConsumed")
    const remaining = target-consumed
   

    return(
        <div>
        <h2 className="header">Your Home Fitness Dashboard</h2>
        <div className="parent">
        <div className="totalcaloriesbtn">Total Target Calories: {target} Kcal</div>
        <div className="consumedcaloriesbtn">Total Consumed Calories: {consumed} Kcal</div>
        <div className="totalcaloriesburnedbtn">Total Calories Burned: {burned} Kcal</div>
        <div className="remainingcaloriesburnedbtn">Remaining Calories: {remaining} Kcal</div>
        <div className="actionbtn" onClick={()=>{goToTracker()}}> Go to Tracker </div>
        </div>
        </div>
    )
}