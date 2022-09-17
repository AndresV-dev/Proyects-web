import TaskCard from './TaskCard'
import {useContext} from 'react'
import {MainContext} from '../context/mainContext'

function TasksList() {

  const {tareas} = useContext(MainContext)

  if (tareas.length === 0) {
    return <h1 className='text-white font-bold text-center text-4xl'>No hay Tareas</h1>
  }

  return (
    <div className='grid grid-cols-3 gap-4 w-3/5 justify-center mx-auto'>
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} task={tarea}/>
      ))}
    </div>
  );
}

export default TasksList;
