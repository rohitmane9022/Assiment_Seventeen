import "../stylesheets/excerciseform.css"

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import formReducer, { initialState } from "../reducer/formReducer";
import { addToGoals } from "../actionCreators/actions";
import { useDispatch } from "react-redux";

export default function GoalTracking (){
  const dispatch = useDispatch()

    return(
        <div className='container'>
            <h1 className="header">Goal Tracker</h1>
            <div className='form-container'>
        <Formik initialValues={initialState.goalDetails} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        dispatch(addToGoals(values))
      }}>
            <Form> 
             <div className='form-group'> 
             <label htmlFor='goalname' className="textleft">Name of the Goal</label>
             <Field type='text' id="goalname" name="goalName" placeholder='Goal' />
             <ErrorMessage name="goal" component="div" className='error'/>
             </div> 
             <div className='form-group' >
             <label htmlFor='description' className="textleft">Description </label>  
             <Field type='text' id='description' name='description' placeholder='Gain weight' />
             <ErrorMessage name="description" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='targetDate' className="textleft">Target Date</label>  
             <Field type='date' id='targetDate' name='targetDate' placeholder='26-09-2023' />
             <ErrorMessage name="targetDate" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='targetCalories' className="textleft">Target Calories</label>  
             <Field type='number' id='targetCalories' name='targetCalories' placeholder='260' />
             <ErrorMessage name="targetCalories" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='status' className="textleft">Goal Status</label>  
             <Field type='text' id='status' name='status' placeholder='In Progress' />
             <ErrorMessage name="status" component="div" className='error'/>
             </div>
             <button type="submit" className="basicbutton">Submit</button>
            </Form>
        </Formik>
        </div>
        </div>
    )
}