
import { deleteAFood, deleteFoodFromDB } from "../actionCreators/actions";
import "../stylesheets/foodcard.css"
import 'font-awesome/css/font-awesome.min.css';

export default function FoodCard({foodDetails, dispatch}){

    const deleteFood = (id) => {
        dispatch(deleteAFood(id));
        dispatch(deleteFoodFromDB(id))
      }
      
    return(
        <div className="goal-card">
        <i className="fa fa-trash delete-icon" onClick={()=>{deleteFood(foodDetails._id)}}></i>
        <h4 className="food-name">{foodDetails.foodName}</h4>
        <p className="food-calories"><span><strong>Food Calories:</strong> </span>{foodDetails.calories} Kcal</p>
        <span className="food-protein"><span><strong>Protein:</strong> </span>{foodDetails.protein}</span>
        <span className="food-carbohydrate"><span><strong>Carbohydrate:</strong> </span>{foodDetails.carbohydrate} </span>
        <span className="food-fat"><span><strong>Fat:</strong> </span>{foodDetails.fat}</span>
      </div>

    )
}