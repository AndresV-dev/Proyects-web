import {useContext} from 'react'
import {MainContext} from '../context/mainContext'

function TasksForm() {

  const {crearTarea, dataLenght} = useContext(MainContext)

    const handleSubmit = (e) => {

        e.preventDefault();
        const newTask = {
            id: dataLenght,
            title: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }
        console.log(newTask);
        e.target.titulo.value = '';
        e.target.descripcion.value = '';

        crearTarea(newTask);
    } 
  return (
    <form className='px-4 py-16 w-auto grid grid-cols-1 max-w-md mx-auto' onSubmit={handleSubmit}>
        <h2 className='text-white capitalize font-bold justify-self-center py-2'>Crea Nueva Tarea</h2>
        <input className='rounded-lg px-2 my-3 py-2' type="text" name='titulo' placeholder='Titulo'/>
        <textarea className='px-2 rounded-lg my-3 py-2' type="text" name='descripcion' placeholder='Descripcion'/>
        <button className='bg-cyan-900 hover:bg-cyan-800 text-white rounded-lg my-3 py-1 w-3/4 justify-self-center'>save</button>
    </form>
  )
}

export default TasksForm;