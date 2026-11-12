import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import NoteCard from "./components/noteCard"

const App = () => {

  const [formValues, setFormValues] = useState({
    title:"",
    description:""
  })
  
  const [updateNoteId, setUpdateNoteId] = useState(null)
  const [allNotes, setAllNotes] = useState([])

  const handleChange = (e)=>
  {
    setFormValues((prev)=>({...prev,[e.target.name]:e.target.value}))
  }


  let getAllNotes = async() =>
  {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes")
      console.log(res);
      setAllNotes(res.data.data)
    } catch (error) {
      console.log("Error in getting all notes API",error);
    }
  }
  useEffect(()=>
  { 
    getAllNotes()
  },[])
  
  let isDataForUpdate = null

  const handleSubmit = async(e)=>
  {
    e.preventDefault()

    if (updateNoteId){
      //update api call
      let res = await axios.put(`http://localhost:3000/notes/${updateNoteId}`,formValues)
      console.log(res);   
      setUpdateNoteId(null)
    }
    else
    {
      //api for update note
          let res = await axios.post("http://localhost:3000/notes/create",formValues)
    console.log(res);
    }
    setFormValues({
      title:"",
      description:""
    })  
    getAllNotes()
  }

  let deleteNote = async(id)=>
  {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes()
    } catch (error) {
      console.log("Error while delting note",error);
      
    }
  }

let noteForUpdate = (note)=>
{
  console.log(note)
  setUpdateNoteId(note._id)
  setFormValues({
    title:note.title,
    description:note.description
  })
}


  return (
    <div className='h-screen p-5 flex flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>Notes App</h1>
    <form onSubmit={handleSubmit} className='gap-5 p-4 w-70 border border-black rounded-xl flex flex-col '>
      <input  
      onChange={handleChange} 
      name="title"
      value={formValues.title}
      className='p-2 outline-none text-xl rounded border border-black ' type="text" placeholder='Title'/>
      <input  onChange={handleChange} 
      minLength={20}
      required
      name="description"
      value={formValues.description}
      className='p-2 outline-none text-xl rounded border border-black ' type="text" placeholder='Description'/>
      <button className='cursor-pointer bg-blue-600 text-white p-2 rounded'>
        {
          updateNoteId?"Update Note":"Add Note"
        }
      </button>
    </form>
    <div className='flex gap-4 flex-wrap'>
      {
        allNotes.map((val)=>
        (
          <NoteCard key={val._id} note={val} noteForUpdate={noteForUpdate} deleteNote={deleteNote}/>
        ))
      }
    </div>
    </div>
    
  )
}

export default App