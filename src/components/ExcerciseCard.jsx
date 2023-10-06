
import { deleteAnExcercise, deleteAnExcerciseFromDB } from "../actionCreators/actions";
import "../stylesheets/excercisecard.css"
import 'font-awesome/css/font-awesome.min.css';

export default function ExcerciseCard({excerciseDetails, dispatch}){

    const deleteExcercise = (id) => {
        dispatch(deleteAnExcercise(id));
        dispatch(deleteAnExcerciseFromDB(id))
      }
     
      
    return(
        <div className="excercise-card">
        <i className="fa fa-trash delete-icon" onClick={()=>{deleteExcercise(excerciseDetails._id)}}></i>
        <h4 className="excercise-name">{excerciseDetails.excerciseName}</h4>
        <p className="excercise-duration"><span><strong>Minutes:</strong> </span>{excerciseDetails.duration} Minutes</p>
        <span className="excercise-category"><span><strong>Calories Burned:</strong> </span>{excerciseDetails.categoryInfo.category.categoryCalories} Kcal</span>

      </div>

    )
}