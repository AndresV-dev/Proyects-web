import {useContext} from 'react'
import {MainContext} from '../context/mainContext'

function TaskCard(props) {

    const {deleteTask} = useContext(MainContext)

    return (
    <div className='bg-gray-800 text-white p-4 rounded-md grid grid-cols-1'>
        <button type='button' className='bg-black px-2 mr-6 rounded-md h-6 w-6 justify-self-end hover:bg-neutral-800' onClick={() => deleteTask(props.task.id)}>X</button>
        <h1 className='py-4 text-xl font-bold capitalize justify-self-center'>{props.task.title}</h1>
        <p className='py-4 text-gray-500 text-sm justify-self-center'>{props.task.descripcion}</p>
    </div>
  );
}

export default TaskCard;
