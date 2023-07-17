import HomePage from "./Pages/HomePage";
import { useState } from 'react'
import { data } from './data'
import './index.css'

export default function App() {

  let [employee, setEmployee] = useState(data);

  function addEmployee(emp){
    setEmployee([...employee,emp])
  }

  return <HomePage employees={employee} addEmployee={addEmployee}/>;
}
