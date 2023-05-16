import './App.css';

import { useState , useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';

import stud from './pages/stud';


function App() {
  const [employees , setEmployees] = useState([])

  useEffect(()=>{
    async function getAllEmployee(){
      try{
          const employees = await axios.get("http://127.0.0.1:8000/api/employee")
          console.log(employees.data)
          setEmployees(employees.data)
      }catch{
          console.log("error")
      }
    }
    getAllEmployee()
  }, [])

  

  

  return (
    <div className="App">
      <h1> Connected React JS with Laravel </h1>
      {
        employees.map((employees , i)=>{
          return(
            <h2> {employees.name} : {employees.email}</h2>
          )
        })
      }
      <Router>
        <Routes>
          <Route exact path="/" Component={stud}/>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
