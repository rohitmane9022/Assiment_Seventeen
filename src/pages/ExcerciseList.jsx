import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllExcercises, fetchExcercise } from "../actionCreators/actions"
import { FETCH_EXCERCISE_URL } from "../URLs"
import ExcerciseCard from "../components/ExcerciseCard"

export default function ExcerciseList(){

   const excerciseState =  useSelector((state)=>state.excerciseList)
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchAllExcercises())
   }, [])

   
   const excerciseCategory = excerciseState.reduce((acc, currentItem) => (
     !acc.includes(currentItem.categoryInfo.category.excerciseCategory)
    
      ?  [...acc, currentItem.categoryInfo.category.excerciseCategory] : acc
  ), []);
  
  
    return(
        <div>
        {excerciseCategory.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {excerciseState.map((exercise, index) =>
                exercise.categoryInfo.category.excerciseCategory === category ? (
                  <li key={index} style={{margin: "16px", listStyle: "none"}}>
                    <ExcerciseCard excerciseDetails={exercise} dispatch={dispatch} />
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ))}
      </div>
    )
}