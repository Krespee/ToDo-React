import { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";
import { TaksForm } from "./TaksForm";
import "./taskList.css"

export const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  //obtener lista de la base de datos local
  const getDB = () => {
    const keys = Object.keys(localStorage);
    keys.sort();
    let item = [];
    keys.forEach((key) => {
      if (!isNaN(key)) {
        item.push(JSON.parse(localStorage.getItem(key)));
      }
    });
    setTaskList(item);
  };

  //mantener actualizada la lista de tareas
  useEffect(() => {
    getDB();
  }, []);

  //actualizar base de datos
  const updateDB = (arr) =>{
    localStorage.clear()
    for (const key in arr) {
      arr[key].id = key
      localStorage.setItem(key, JSON.stringify(arr[key]));
    }
    getDB()
  }


  //añadir tarea
  const addTask = (body)=>{
    const task = {
        id: localStorage.length,
        estado: false,
        nombre: body
    }
    setTaskList([...taskList, task])
    updateDB([...taskList, task])
  }

  //eliminar tarea
  const deleteTask = (id) =>{
    const currentTaskList = taskList;
    currentTaskList.splice(id, 1)
    localStorage.removeItem(id)
    updateDB(currentTaskList)
  }

  //cambiar estado de tarea
  const taskStatus = (status, id) =>{
    const currentStatus = JSON.parse(localStorage.getItem(id));
    currentStatus.estado = status;
    localStorage.setItem(id, JSON.stringify(currentStatus))
    getDB()
  }

  return (
    <>
    <h1>TaskList Con React</h1>
      <div className="container">
        <TaksForm addTask={addTask}></TaksForm>
        <ul className="task_list">
          {<TaskItem taskList={taskList} deleteTask={deleteTask} taskStatus={taskStatus}></TaskItem>}
        </ul>
      </div>
      <br />
    </>
  );
};
