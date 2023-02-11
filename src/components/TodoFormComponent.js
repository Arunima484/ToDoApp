import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
// import { useState } from 'react'
import useForm from './read'
// import React, { useState } from 'react'


const TodoFormComponent = () => {
    var [ToDo,setToDo] = useForm({title:"",Quantity:"",Description: "" })
    var [List,setList] = useState([])

    // const PushValue = () =>{
    //  setList(current => [...current, ToDo])
    //  setToDo("")
    // }
    const SubmitTodo =(e) =>{
      e.preventDefault();
      const data = ToDo
      setList((ls)=>[...ls,data])
      
    }
  return (
    <div className='Container'>
       <br></br>
      <br></br>
        <Typography variant='h3' className='MainHead'>ToDo Application</Typography>
         <br></br>
      <br></br>
      <TextField name='title' value={ToDo.title} onChange={setToDo} variant='outlined' label='Title'></TextField>
      <br></br>
      <br></br>
      <TextField name='Quantity' value={ToDo.Quantity} onChange={setToDo} variant='outlined' label='Quantity'></TextField>
      <br></br>
      <br></br>
      <TextField name='Description' value={ToDo.Description} onChange={setToDo} variant='outlined' label='Description'></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='error' onClick={SubmitTodo}>Submit</Button>
      <br></br>
      <br></br>
      <Typography variant='h5'>Title: {ToDo.title}</Typography>
      <Typography variant='h5'>Quantity: {ToDo.Quantity}</Typography>
      <Typography variant='h5'>Description: {ToDo.Description}</Typography>
      <table className='TodoTable'>
          <th>Title</th>
          <th>Quantity</th>
          <th>Description</th>
        </table>
      {
        
        List.map((a)=>
          <div>
            {/* <li>{a.title}</li> */}
            <table className='TodoTableData'>
             
              <tr>
                <td>{a.title}</td>
                <td>{a.Quantity}</td>
                <td>{a.Description}</td>
              </tr>
            </table>
          </div>
        )
      }

    </div>
  )
}

export default TodoFormComponent
