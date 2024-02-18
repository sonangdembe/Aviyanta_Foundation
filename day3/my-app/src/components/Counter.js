/* useEffect() -> whenever page c=renders useeffect function render value every times if no dependency
-> [] first render ma matrai run hunxa ; website bata first time data linu paryo vane
->[value] runs everytime when dependency value change teo useEffect ko function run hunxa
*/

import React, { useEffect, useState } from "react";

const Counter1=()=>{
    const [count , setCount] = useState(0);
    // const[input, setInput] =useState();

    useEffect(()=>{
       
        console.log("count :", count );
    },);

    useEffect(()=>{
        console.log("[] count: ", count);
    },[])

    useEffect(()=>{
        console.log("[count]  count", count%2==0?"even":"odd");
    },[count])



const increaseCount = (e ,value) =>{
        e.preventDefault();
            setCount(count + value);
    };
//     const handleChange = (e) =>{
// const num = e.target.value;
//             setInput(num);
//     }
   

    return(
        <div>
            Counter value : {count}
            <br/>
            {/* <input type="number" value={input} onChange={handleChange} />
            <button onClick={(e) => increaseCount(e, {input})}>Increment by 1 </button>
            <button onClick={(e) => increaseCount(e, {input})}>Increment by 10</button>
            <button onClick={(e) => increaseCount(e, {input})}>Increment by 5</button> */}
            
            <button onClick={(e) => increaseCount(e, 1)}>Increment by 1 </button>
            <button onClick={(e) => increaseCount(e, 10)}>Increment by 10</button>
            <button onClick={(e) => increaseCount(e, 5)}>Increment by 5</button>
            
        </div>
    )
};
export default Counter1;