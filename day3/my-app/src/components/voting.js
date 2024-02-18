import React, {useState} from "react";

const VoteChecker = ()=>{
   const [age,SetAge] = useState("");
   const [msg , setMsg] = useState("");


const checkAge= () =>{
    
    var message="";
    if(age >= 18){
        message = "Your are elligible";
    }
    else{
        message = "you are not elligible";
    }
    setMsg(message)
    };

const handleChanged =(event)=>{
    const ages = event.target.value;
    SetAge(ages);
}
     return(
        
        <div>
            <label>Enter your age:</label>
            <input type="text" placeholder="age" value={age} onChange={handleChanged}/>
        
        <button onClick={checkAge}>Click</button>
        Hi! {msg}
        </div>
     );


}

export default VoteChecker;