import React from 'react'

const noteCard = ({note,deleteNote,noteForUpdate}) => {
  return (
    <div className='flex flex-col gap-2 w-[30%] border border-black p-4 rounded-xl'>
      <h1 className='font-semibold'>{note.title}</h1>
      <p >{note.description.length>20?note.description.substring(0,20):note.description}</p>
      <div className='flex justify-between'>
        <button
        onClick={()=>noteForUpdate(note)}
         className='rounded-lg cursor-pointer p-2 bg-yellow-600 text-white'>Update</button>
        
        <button  onClick={()=>deleteNote(note._id)} className='rounded-lg cursor-pointer p-2 bg-red-600 text-white'>Delete</button>
      </div>
    </div>
  )
}

export default noteCard