import "./taskForm.css"

export const TaksForm = ({ addTask }) => {

//manejar submit
  const submitForm = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      addTask(e.target[0].value)
      e.target[0].value = "";
    }
  };


  return (
    <>
      <form onSubmit={submitForm} className="form">
        <input className="add_task_input" type="text" placeholder="Ingresa una nueva tarea" required />
        <button className="add_task_btn">Enviar</button>
      </form>
    </>
  );
};
