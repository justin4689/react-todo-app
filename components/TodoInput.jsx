
import React, { useState } from 'react';
export default function TodoInput({handleAddTodo,todoValue,setTodoValue}) {

  
  return (
    <div className="container mx-auto flex justify-center my-4">
    <div className="w-full max-w-3xl">
        <div className="flex items-center justify-center">
            <input value={todoValue} onChange={(e)=> {setTodoValue(e.target.value)}} className="border border-gray-500 rounded px-3 py-2 m-1 w-full focus:ring-1 focus:outline-none" type="text" placeholder="Entrer la tache ..." />
            <button className="px-3 py-2 rounded bg-blue-400 text-white" onClick={()=>{handleAddTodo(todoValue) ; 
              setTodoValue('')}} >Ajouter</button>
        </div>
    </div>
</div>

  )
}
