import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import EmployeeList from "../Components/EmployeeList";
import Form2 from '../Components/Form2'
import { useState } from "react";

export default function HomePage({addEmployee,employees}) {

    const [render, setRender] = useState(false)

    function handleClick(event){
        if (render===false){
            setRender(true);
        }else setRender(false)
    }

  return (
    <div className="container">
      <Header />
      <SearchBar employees={employees} />
      <EmployeeList employees={employees}/>
      {/* <Form addEmployee={addEmployee} /> */}
      <button onClick={handleClick}>Add Employee</button>
      {render && <Form2 addEmployee={addEmployee} />}
    </div>
  );
}
