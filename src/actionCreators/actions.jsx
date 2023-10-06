import toast from "react-hot-toast";
import { ADD_EXCERCISE_URL, ADD_FOOD_URL, ADD_GOAL_URL, ADD_TO_TRACKED_EXCERCISE_URL, DELETE_EXCERCISE_URL, DELETE_FOOD_URL, DELETE_GOAL_URL, DELETE_TRACKED_EXCERCISE_URL, FETCH_ALL_EXCERCISE_URL, FETCH_EXCERCISE_URL, FETCH_FOOD_URL, FETCH_GOAL_URL, FETCH_TRACKED_EXCERCISE_URL } from "../URLs";

export const fetchGoalList = (goalsList) => ({
  type: "ADD_TO_GOALS_LIST",
  payload: goalsList,
});

export const fetchFoodList = (foodList) =>({
  type: "ADD_TO_FOOD_LIST", 
  payload: foodList
})

export const fetchExcerciseList = (excerciseList) =>(
  {
    type: "ADD_TO_EXCERCISE_LIST", 
    payload: excerciseList
  }
)

export const fetchTrackedExcerciseList = (excerciseList) =>(
  {
    type: "ADD_TO_TRACKED_LIST", 
    payload: excerciseList
  }
)

export const deleteAGoal = (idToBeDeleted) =>(
  {
   type: "DELETE_A_GOAL",
   payload: idToBeDeleted
  }
)

export const deleteAnExcercise = (idToBeDeleted) =>(
  {
   type: "DELETE_A_EXCERCISE",
   payload: idToBeDeleted
  }
)


export const deleteATrackedExcercise = (idToBeDeleted) =>(
  {
   type: "DELETE_A_TRACKED_EXCERCISE",
   payload: idToBeDeleted
  }
)

export const deleteAFood = (idToBeDeleted) =>(
  {
   type: "DELETE_A_FOOD",
   payload: idToBeDeleted
  }
)
export const addToExcercise = (excerciseDetails) =>async() =>{

  try{
   const response = await fetch(ADD_EXCERCISE_URL,{
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(excerciseDetails),
   })

   if (response.ok) {
    const data = await response.json();
    //console.log("Added Excercise ", data)
    const addedExcercise = data.added
    toast.success("Successfully added to the database!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}

export const addToFoods = (foodDetails) =>async() =>{
  try{
   const response = await fetch(ADD_FOOD_URL, {
     method: "POST",
     headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(foodDetails),
   })
   if (response.ok) {
    const data = await response.json();
    const addedFood = data.added
    toast.success("Successfully added to the database!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}

export const addToGoals = (goalDetails) =>async () =>{
  try{
  const response = await fetch(ADD_GOAL_URL, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    }, 
    body: JSON.stringify(goalDetails),
  })
  
  if (response.ok) {
    const data = await response.json();
    const addedGoals = data.added
    toast.success("Successfully added to the database!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}
export const fetchExcercise = () =>async (dispatch)=>{
  try{
    const response = await fetch(
        FETCH_EXCERCISE_URL
      );
      const receivedData = await response.json();
      const excerciseList = receivedData.excercise
      dispatch(fetchExcerciseList(excerciseList))
  }
  catch(error){
    console.error("Error", error)
  }
}


export const fetchAllExcercises = () =>async (dispatch)=>{
  try{
    const response = await fetch(
        FETCH_ALL_EXCERCISE_URL
      );
      const receivedData = await response.json();
      const excerciseList = receivedData.excercise
      dispatch(fetchExcerciseList(excerciseList))
  }
  catch(error){
    console.error("Error", error)
  }
}

export const fetchTrackedExcercises = () =>async (dispatch)=>{
  try{
    const response = await fetch(
        FETCH_TRACKED_EXCERCISE_URL
      );
      const receivedData = await response.json();
      const excerciseList = receivedData.excercise
      dispatch(fetchTrackedExcerciseList(excerciseList))
  }
  catch(error){
    console.error("Error", error)
  }
}

export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await fetch(
      FETCH_GOAL_URL
    );
    const receivedData = await response.json();
    const goalsList = receivedData.goals;
    dispatch(fetchGoalList(goalsList));
  } catch (error) {
    console.error("Error", error);
  }
};

export const fetchFoods = () => async (dispatch) =>{
  try{
   const response = await fetch(FETCH_FOOD_URL)
   const receivedData = await response.json()
   const foodList = receivedData.foods;
   dispatch(fetchFoodList(foodList))
  }
  catch(error){
    console.error("Error ", error)
  }
}


export const deleteAGoalFromDB = (idOfTheGoalToBeDeleted) =>async() =>{

  try{
   const response = await fetch(`${DELETE_GOAL_URL}/${idOfTheGoalToBeDeleted}`,{
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json", 
    },
    
   })
   
   if (response.ok) {
    const data = await response.json();
    const deletedGoal = data.deleted
    toast.success("Successfully deleted!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}



export const deleteAnExcerciseFromDB = (idOfTheGoalToBeDeleted) =>async() =>{

  try{
   const response = await fetch(`${DELETE_EXCERCISE_URL}/${idOfTheGoalToBeDeleted}`,{
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json", 
    },
    
   })
   
   if (response.ok) {
    const data = await response.json();
    const deletedGoal = data.deleted
    toast.success("Successfully deleted!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}



export const deleteATrackedExcerciseFromDB = (idOfTheGoalToBeDeleted) =>async() =>{

  try{
   const response = await fetch(`${DELETE_TRACKED_EXCERCISE_URL}/${idOfTheGoalToBeDeleted}`,{
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json", 
    },
    
   })
   
   if (response.ok) {
    const data = await response.json();
    const deletedGoal = data.deleted
    toast.success("Successfully deleted!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}

export const deleteFoodFromDB = (idOfTheGoalToBeDeleted) =>async() =>{

  try{
   const response = await fetch(`${DELETE_FOOD_URL}/${idOfTheGoalToBeDeleted}`,{
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json", 
    },
    
   })
   
   if (response.ok) {
    const data = await response.json();
    const deletedGoal = data.deleted
    toast.success("Successfully deleted!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}


export const addToTrackedExcercise = (excerciseDetails) => async() =>{
  try{
   const response = await fetch(ADD_TO_TRACKED_EXCERCISE_URL,{
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(excerciseDetails),
   })

   if (response.ok) {
    const data = await response.json();
    console.log("Added Excercise ", data)
    const addedExcercise = data.added
    toast.success("Successfully added to the database!")
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}