import React, { useState, useEffect, useRef } from 'react';

const Formulario = ({ onAddTask, totalTasks }) => {
  const [newTask, setNewTask] = useState('');
  const [errors, setErrors] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Total de Tarefas: ${totalTasks}`;
  }, [totalTasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask({ task: newTask, completed: false }); // Passando um objeto de tarefa completo
      setNewTask('');
      setErrors([]);
      inputRef.current.value = '';
    } else {
      setErrors(['O campo de tarefa não pode ficar em branco']);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">Adicionar</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Formulario;
