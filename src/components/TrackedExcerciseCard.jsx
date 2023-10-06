
import { deleteATrackedExcercise, deleteATrackedExcerciseFromDB } from "../actionCreators/actions";
import "../stylesheets/excercisecard.css"
import 'font-awesome/css/font-awesome.min.css';

export default function TrackedExcerciseCard({excerciseDetails, dispatch}){

    const deleteExcercise = (id) => {
        dispatch(deleteATrackedExcercise(id));
        dispatch(deleteATrackedExcerciseFromDB(id))
      }
     
      
    return(
        <div className="excercise-card">
        <i className="fa fa-trash delete-icon" onClick={()=>{deleteExcercise(excerciseDetails._id)}}></i>
        <h4 className="excercise-name">{excerciseDetails.excerciseName}</h4>
        <p className="excercise-duration"><span><strong>Minutes:</strong> </span>{excerciseDetails.duration} Minutes</p>
        <span className="excercise-category"><span><strong>Calories Burned:</strong> </span>{excerciseDetails.caloriesBurned} Kcal</span>

      </div>

    )
}