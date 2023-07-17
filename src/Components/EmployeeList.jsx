import { useState } from "react";
import { data } from "../data";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({employees}) {

    // const[employee,setEmployee] = useState(employees);

    // function 

    // function filterClassNames(employees){
    //     employees.filter((employee)=>(
    //         employee.id
    //     ))
    // }

    // let newEmployeeArr=filterClassNames(employees)
    // console.log(newEmployeeArr);

  return (
    <div className="home">
      {employees.map((employee) => (
        <EmployeeListItem
            key={employee.id}
            id={employee.id}
            headshot={employee.headshot}
            title={employee.title}
            name={employee.name}
        />
      ))}
    </div>
  );
}
