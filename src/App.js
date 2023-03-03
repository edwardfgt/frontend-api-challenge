import "./App.css";
import Title from './components/Title';
import { useState } from "react";

function App() {
  const [role, setRole] = useState('dev')
  const testVariable = true;
  return (
    <div className="App">
      {testVariable ?
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
        <Title name="Chitter" role="user"/>
        <Title name="Twitter"/>
        <Title name="Facebook" role={role}/>
      </>
      :
      <p>You cannot see the test</p>
    }


      
    </div>
  );
}

export default App;