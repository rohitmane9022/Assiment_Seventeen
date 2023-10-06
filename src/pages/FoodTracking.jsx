import "../stylesheets/excerciseform.css"

import React, { useReducer } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import formReducer, { initialState } from "../reducer/formReducer";
import { useDispatch } from "react-redux";
import { addToFoods } from "../actionCreators/actions";

export default function FoodTracking (){

   const dispatch = useDispatch()

    return(
        <div className='container'>
            <h1 className="header">Food Tracker</h1>
            <div className='form-container'>
        <Formik initialValues={initialState.foodDetails} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        dispatch(addToFoods(values))
      }}>
            <Form> 
             <div className='form-group'> 
             <label htmlFor='foodName' className="textleft">Name of the Food</label>
             <Field type='text' id="foodName" name="foodName" placeholder='Name of the Food' />
             <ErrorMessage name="foodName" component="div" className='error'/>
             </div> 
             <div className='form-group' >
             <label htmlFor='calories' className="textleft">Calories</label>  
             <Field type='number' id='calories' name='calories' placeholder='100 Kcal' />
             <ErrorMessage name="calories" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='protein' className="textleft">Protein</label>  
             <Field type='number' id='protein' name='protein' placeholder='92' />
             <ErrorMessage name="protein" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='carbohydrate' className="textleft">Carbohydrate</label>  
             <Field type='number' id='carbohydrate' name='carbohydrate' placeholder='92' />
             <ErrorMessage name="carbohydrate" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='fat' className="textleft">Fat</label>  
             <Field type='number' id='fat' name='fat' placeholder='92' />
             <ErrorMessage name="fat" component="div" className='error'/>
             </div>
             <button type="submit" className="basicbutton">Submit</button>
            </Form>
        </Formik>
        </div>
        </div>
    )
}