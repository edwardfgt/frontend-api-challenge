import "./index.css";
import Employee from './components/Employee';
import { useState } from "react";

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Edward",
     role: "CEO",
      img: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga_warren_buffett_20210203_0001.jpg"
    },
    {
      id: 2,
      name: "Edward",
     role: "CEO",
      img: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga_warren_buffett_20210203_0001.jpg"
    },
    {
      id: 3,
      name: "Edward",
     role: "CEO",
      img: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga_warren_buffett_20210203_0001.jpg"
    },
    {
      id: 4,
      name: "Edward",
     role: "CEO",
      img: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga_warren_buffett_20210203_0001.jpg"
    },
    {
      id: 5,
      name: "Edward",
     role: "CEO",
      img: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga_warren_buffett_20210203_0001.jpg"
    },
    {
      id: 6,
      name: "Edward",
     role: "CEO",
      img: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga_warren_buffett_20210203_0001.jpg"
    }
  ])
  const testVariable = true;
  return (
    <div className="App">
      {testVariable ?
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>

      <div className="flex flex-wrap justify-center">
       {employees.map((employee) => {
        return (
        <Employee 
          id ={employee.id}
          name={employee.name} 
          role={employee.role} 
          img={employee.img} />
          );
       })}
      </div>
      </>
      :
      <p>You cannot see the test</p>
    }


      
    </div>
  );
}

export default App;