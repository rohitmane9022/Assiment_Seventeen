export const initialState = {

    excerciseDetails: {excerciseName: "", 
                      duration: "", 
                      caloriesBurned: ""}, 
    foodDetails: {foodName: "", 
                 calories: 0, 
                 protein: 0, 
                 carbohydrates: 0, 
                fat: 0}, 
    goalDetails: {goalName: "", 
                  description: "",
                  targetDate: "",
                  targetCalories: 0,
                  status: ""
                }      , 
    excerciseList: [], 
    foodList: [], 
    goalsList: [], 
    trackedExcercise: []                                 

}


const formReducer = (state = initialState, action) =>{
   switch(action.type){
    case "EXCERCISE_FORM_VALUES": 
    return {...state, excerciseDetails: {...state.excerciseDetails, [action.payload]: action.payload}}
    case "FOOD_TRACKER_FORM_VALUE": 
    return {...state, foodDetails: {...state.foodDetails, [action.payload]: action.payload}}
    case "GOAL_TRACKER_FORM_VALUE": 
    return {...state, goalDetails: {...state.goalDetails, [action.payload]: action.payload}}
    case "ADD_TO_EXCERCISE_LIST": 
    return {...state, excerciseList: action.payload }
    case "ADD_TO_GOALS_LIST": 
    return {...state, goalsList:  action.payload }
    case "ADD_TO_FOOD_LIST": 
    return {...state, foodList:  action.payload}
    case "ADD_TO_TRACKED_LIST": 
    return {...state, trackedExcercise:  action.payload}
    case "DELETE_A_GOAL": 
    return {...state, goalsList: state.goalsList.filter((goal)=>goal._id!==action.payload)}
    case "DELETE_A_EXCERCISE": 
    return {...state, excerciseList: state.excerciseList.filter((excercise)=>excercise._id!==action.payload)}
    case "DELETE_A_TRACKED_EXCERCISE": 
    return {...state, trackedExcercise: state.trackedExcercise.filter((excercise)=>excercise._id!==action.payload)}
    case "DELETE_A_FOOD":
    return {...state, foodList: state.foodList.filter((food)=>food._id!==action.payload)}
    default:
    return state
   }
}


export default formReducer
