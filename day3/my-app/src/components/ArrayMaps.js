import React from "react";

const Examples = () => {
    const participants = ["sona","prashna","jyoti","tina"];

    const students= {
        name : "alice",
        roll : 3,
        address : "ratopul",
        age : 22,
        college : "Hcoe"
    }
    const {name, roll,age} = students;
     
    const extraInfo = {
        gender : "female", 
        favcolor : "red"
    }
    const updatedInfo = {...students,...extraInfo}
    console.log(updatedInfo);

    return (
    <div> 
        Examples of Map: {participants.map((items,index)=>{
        return(
            <div>{index} {items}</div>
        )
    })}
    /* displaying the age of the students */ 
    <div>{age}</div>
    </div>
    );

    

}
export default Examples;
