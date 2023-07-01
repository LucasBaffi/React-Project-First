import React, { useState } from 'react';
import Formulario from './components/Formulario';
import ToDo from './components/ToDo';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <Formulario onAddTask={addTask} totalTasks={tasks.length} />
      <ToDo tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App;
