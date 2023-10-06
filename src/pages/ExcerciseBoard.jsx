import { useState } from "react";
import ExcerciseForm from "./ExcerciseForm"
import ExcerciseList from "./ExcerciseList"
import TrackedExcercise from "./TrackedExcercise";

export default function ExcerciseBoard(){

    const [selectedContent, setSelectedContent] = useState(null);

    const handleChangeAddExcercise = () =>{
        setSelectedContent(<ExcerciseForm/>)
    }



    const handleChangeTrackedExcercise = () =>{
        setSelectedContent(<TrackedExcercise/>)
    }


    const handleChangeAllExcercise = () =>{
        setSelectedContent(<ExcerciseList/>)
    }

    return(
        <div>
    <button style={{margin: "16px"}} onClick={() => handleChangeAddExcercise()}>Add Excercise</button>
      <button style={{margin: "16px"}}  onClick={() => handleChangeTrackedExcercise()}>Tracked Excercise</button>
      <button style={{margin: "16px"}}  onClick={() => handleChangeAllExcercise()}>All Excercise</button>
      <div>
        {selectedContent}
      </div>
      </div>
    )
}