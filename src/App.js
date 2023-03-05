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

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        return {...employee, name: newName, role: newRole }
      } else {
        return employee
      }
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>

      <div className="flex flex-wrap justify-center">
       {employees.map((employee) => {
        return (
        <Employee 
          key={employee.id}
          id ={employee.id}
          name={employee.name} 
          role={employee.role} 
          img={employee.img}
          updateEmployee={updateEmployee}
          />
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