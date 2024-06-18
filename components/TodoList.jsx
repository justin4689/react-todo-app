

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



export default function TodoList({todos ,handleDeleteTodo,handleEditTodo}) {

  
  return (
    <div className='container mx-auto flex justify-center'>
        <ul className='w-full max-w-3xl'>
            {todos.map( (todo,todoIndex) => {
                return(
                    <li key={todoIndex} className='p-2 bg-gray-100 rounded-md my-3 flex justify-between'>
                    
                        {todo} 
                        
                        <div>
                                <button className='ml-2'>
                                    <FontAwesomeIcon icon={faEdit} onClick={()=>handleEditTodo(todoIndex)} />
                                </button>
                                <button className='ml-2' onClick={()=>handleDeleteTodo(todoIndex)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                        </div>
                        
                    </li>
                   
                )
            })}
        </ul>
        
    </div>
  )
}
