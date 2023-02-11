import { Button, TextField, Typography } from '@mui/material'
import useForm from './read'
// import React, { useState } from 'react'


const TodoFormComponent = () => {
    var [ToDo,setToDo] = useForm({title:"",Quantity:"",Description: "" })
  return (
    <div>
       <br></br>
      <br></br>
        <Typography variant='h3'>ToDo Application</Typography>
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
      <Button variant='contained' color='error'>Submit</Button>
      <br></br>
      <br></br>
      <Typography variant='h5'>{ToDo.title}</Typography>
      <Typography variant='h5'>{ToDo.Quantity}</Typography>
      <Typography variant='h5'>{ToDo.Description}</Typography>

    </div>
  )
}

export default TodoFormComponent
