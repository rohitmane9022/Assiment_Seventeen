
import { deleteAGoal, deleteAGoalFromDB, deleteEntry } from "../actionCreators/actions";
import "../stylesheets/goalcard.css"
import 'font-awesome/css/font-awesome.min.css';

export default function GoalCard({goalDetails, dispatch}){

    const deleteGoal = (id) => {
        dispatch(deleteAGoal(id));
        dispatch(deleteAGoalFromDB(id))
      }
      
    return(
        <div className="goal-card">
        <i className="fa fa-trash delete-icon" onClick={()=>{deleteGoal(goalDetails._id)}}></i>
        <h4 className="goal-name">{goalDetails.goalName}</h4>
        <p className="goal-description"><span><strong>Goal Description:</strong> </span>{goalDetails.description}</p>
        <span className="goal-date"><span><strong>Target Date:</strong> </span>{goalDetails.targetDate}</span>
        <span className="goal-target-calories"><span><strong>Target Calories:</strong> </span>{goalDetails.targetCalories} Kcal</span>
        <span className="goal-status"><span><strong>Goal Status:</strong> </span>{goalDetails.status}</span>
      </div>

    )
}