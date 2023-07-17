import { useState } from "react";

export default function EmployeeListItem(props) {

    const[mouseEnter,setMouseEnter]=useState(false);

    function handleMouseEnter(){
        setMouseEnter(true);
    }

    function handleMouseLeave(){
        setMouseEnter(false)
    }

    function handleDelete(event){
        console.log(event)
        // event.target.className='visibility'
        // console.log(event.target.className);
    }

    return (
      <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} key={props.id} className="emp">
        <div>
          <img src={props.headshot} />
        </div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.title}</p>
        </div>
        {mouseEnter && <button id='clicked' onClick={handleDelete}>X</button>}
      </div>
    );
  }
  