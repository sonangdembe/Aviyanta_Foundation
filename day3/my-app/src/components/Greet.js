import react from "react";

function Greet(props){
    return  <h1>Hello {props.name} {props.lastname}</h1>
}
//props is used for dynamic
export default Greet;