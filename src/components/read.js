import React, { useState } from 'react'

const useForm = (Book) => {
    var [val,setval] = useState(Book);
  return [val,(event)=>{
    setval(
        {
            ...val,[event.target.name]:event.target.value
        }
    )
  }]

}

export default useForm
