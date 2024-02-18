import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Examples from './components/ArrayMaps';
import ExamplesStates from './components/hookForm';
import VoteChecker from './components/voting';
import TakeName from './components/changeName';
import Counter1 from './components/Counter';
import AxiosExamples from './components/Axios';
import FormAxios from './components/dayClassAssAxiox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    

       <h1>Welcome to my app</h1>

        {/* </class_name  then it will it self import the things*/}
       {/* <Greet name = "sona" lastname ="angdembe"/>  
       <Greet name = "jyoti" lastname="Joshi"/>  
       <Greet name ="prsana" lastname="maharjan"/>   */}
      {/* after using props we have to changes the names */}
{/* 
Examples of map
      <Examples/> */}

{/* hooks examples   */}
      {/* <ExamplesStates/> */}

{/* voteChecker */}
           {/* <VoteChecker/>     */}

 {/* Assignment           */}
 {/* <TakeName/> */}
 
 {/* day2 */}
    {/* <Counter1/> */}

          {/* <AxiosExamples/> */}

          <FormAxios/>

      </header>
    </div>
  );
}

export default App;
