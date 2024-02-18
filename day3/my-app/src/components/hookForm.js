import React, { useState } from "react";

const ExamplesStates = ()=>{
    const [color,setColor] = useState('red');
    const [msg,SetMsg] = useState("");
    const changeColor=()=>{
        setColor("yellow")
    };

    const handleChanged = (event) =>{
       const userFavColor = event.target.value;
       setColor(userFavColor);
    };

    const checkColor=()=>{
        // to check the color
        var message = "";
        if (color == "red" || color =="green" || color == "blue"){
             message = "enter color is primary color";
        }
        else{
            message ="enter color is not primary";
        }
         SetMsg(message);
    };

    return (
        <div>
            <div>

            <label>Enter fav color </label>
            <input type="text" value={color} onChange ={handleChanged}/>
           
            </div>
            your fav color {color}
            {/* <button onClick={findColor}>Click</button> */}
        <div>
            
            <button onClick={changeColor}>Change Color</button>
           <button type="text" onClick={checkColor} >Check Button</button>
           your message is {msg}
        </div>
        </div>
    );
    
}
export default ExamplesStates;