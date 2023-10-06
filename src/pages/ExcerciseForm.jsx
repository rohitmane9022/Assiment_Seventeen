import "../stylesheets/excerciseform.css"

import React, { useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialState } from "../reducer/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToExcercise, addToTrackedExcercise, fetchAllExcercises } from "../actionCreators/actions";
import toast from "react-hot-toast";


export default function ExcerciseForm (){
   const dispatch = useDispatch()
   const excerciseState =  useSelector((state)=>state.excerciseList)
  

   useEffect(()=>{
    dispatch(fetchAllExcercises())
   }, [])

   function calculateAutomatic (excerciseName, duration){
      const excercise = excerciseState.find((excercise)=>excercise.excerciseName === excerciseName)
      let calculated = 0;
      if(!excercise)
      toast.error("Oops! Excercise was not found.")
    else{
      const calories = excercise.categoryInfo.category.categoryCalories
      calculated = (calories/excercise.duration)*duration;
    }
      return calculated;
   }
   const setDuration = (e, values, setFieldValue) => {
    const duration = e.target.value;
    const exerciseName = values.excerciseName;
    
    const caloriesBurned = calculateAutomatic(exerciseName, duration);
    setFieldValue("duration", duration);
    setFieldValue("caloriesBurned", caloriesBurned);
  };

    return(
        <div className='container'>
            <h1 className="header">Excercise Tracker</h1>
            <div className='form-container'>
        <Formik initialValues={initialState.excerciseDetails} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        dispatch(addToTrackedExcercise(values))
        console.log(JSON.stringify(values));
      }}>
        {({ values, setFieldValue }) => (
            <Form> 
             <div className='form-group'> 
             <label htmlFor='excercise' className="textleft">Name of the Excercise</label>
             <Field type='text' id="excercise" name="excerciseName" placeholder='Excercise' />
             <ErrorMessage name="excercise" component="div" className='error'/>
             </div> 
             <div className='form-group' >
             <label htmlFor='duration' className="textleft">Duration of the Excercise</label>  
             <Field type='number' id='duration' name='duration' placeholder='10 mins' value={values.duration} onChange = {(e)=>{setDuration(e, values, setFieldValue)}} />
             <ErrorMessage name="duration" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='caloriesBurned' className="textleft">Calories Burned</label>  
             <span id='caloriesBurned' name='caloriesBurned'>{values.caloriesBurned} Kcal</span>
            
             </div>
             <button type="submit" className="basicbutton">Submit</button>
            </Form>
            )}
        </Formik>
        </div>
        </div>
    )
}