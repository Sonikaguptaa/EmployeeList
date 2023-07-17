import { useState } from "react";

export default function SearchBar({ employees }) {

    const[input, setInput] = useState('')

    // console.log(employees)

    function handleChange(event){
        setInput(event.target.value)
    }

    function filterEmployees(employeeArr, searchValue){
        if (searchValue===''){
            return []
        }
        else {
        return (
            employeeArr.filter((employee)=>(
            employee.name.toLowerCase().includes(searchValue.toLowerCase()) || employee.title.toLowerCase().includes(searchValue.toLowerCase())
        )))
        }

    }

    let filteredArray = filterEmployees(employees,input);

    // console.log('input: '+input)
    // console.log(filteredArray);

    return (
      <div className="search">
        <input value={input} type="text" placeholder="search" onChange={handleChange} />
        {filteredArray.map((filteredEmployee)=>(
            <div>
                <h1>{filteredEmployee.name}</h1>
                <h3>{filteredEmployee.title}</h3>
                <h3>{filteredEmployee.phone}</h3>
                <h3>{filteredEmployee.email}</h3>
            </div>
        ))}
      </div>
    );
  }