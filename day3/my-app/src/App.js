import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    

       <h1>Welcome to my app</h1>
        {/* </class_name  then it will it self import the things*/}
       <Greet name = "sona" lastname ="angdembe"/>  
       <Greet name = "jyoti" lastname="Joshi"/>  
       <Greet name ="prasana" lastname="maharjan"/>  
      {/* after using props we have to changes the names */}
      </header>
    </div>
  );
}

export default App;
