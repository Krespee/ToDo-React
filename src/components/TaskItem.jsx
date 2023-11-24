import "./taskItem.css"

export const TaskItem = ({ taskList, deleteTask, taskStatus }) => {
  const toggleClass =({target})=>{
    if (target.tagName == "LI") {
      if (target.className == "incompleto") {
        target.classList.remove("incompleto")
        target.classList.toggle("completado")
        taskStatus(true, target.id)
      }else{
        target.classList.remove("completado")
        target.classList.toggle("incompleto")
        taskStatus(false, target.id)
      }
    }
  }

  const deleteBtn = ({target}) => {
    deleteTask(target.parentNode.id)
  }

  return (
    <>
      {taskList.map((item) => (
        <li onClick={toggleClass} key={item.id} id={item.id} className={item.estado ? "completado" : "incompleto"}>
          {item.id} | {item.nombre} <button onClick={deleteBtn} className="delete">Eliminar</button>
        </li>
      ))}
    </>
  );
};

