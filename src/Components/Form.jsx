import { useState } from 'react'



// Controlled component
export default function Form ({ addEmployee }){
  
  const [form, setForm] = useState({
    name:'',
    title:'',
    phone:'',
    email:''
  });

  function handleChange(event){
    // setForm(event.target.value)
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  function handleSubmit(event){
    event.preventDefault()

    let employee = {
      ...form,
      headshot: '../images/headshot4.jpeg',
      borderColor: 'red',
      id: crypto.randomUUID()
    }

    addEmployee(employee)
  }

  return(
    <form onSubmit={handleSubmit}>

      <label htmlFor='name'>Name</label>
      <input id='name' value={form.name} onChange={handleChange} />
      
      <label htmlFor='title'>Title</label>
      <input id='title' value={form.title} onChange={handleChange} />

      <label htmlFor='phone'>Phone Number</label>
      <input id='phone' value={form.phone} onChange={handleChange} />

      <label htmlFor='email'>Email</label>
      <input id='email' value={form.email} onChange={handleChange} />

      <button>Submit</button>
    </form>
  )
}