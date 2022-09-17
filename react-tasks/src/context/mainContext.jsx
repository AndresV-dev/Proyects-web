import {createContext, useState, useEffect} from 'react'
import { tasks } from "../assets/tasks";

export const MainContext = createContext();

export function MainContextProvider(props) {

  const [tareas, setTareas] = useState([]);
  const [dataLenght, setDataLenght] = useState([])
  let onlyOne = false;

  useEffect(() => {
    setTareas(tasks);
    setDataLenght(tasks.length)
  }, [])

  function crearTarea(tarea){
    setTareas([...tareas,tarea])
    setDataLenght(dataLenght + 1)
  }
  
  function deleteTask(tareaId){
    setTareas(tareas.filter(task => task.id !== tareaId))
  }

  const objectVariables = {
    tareas,
    dataLenght,
    crearTarea,
    deleteTask
  }
  
  return (
    <MainContext.Provider value={objectVariables}>
      {props.children}
    </MainContext.Provider>
  )
}