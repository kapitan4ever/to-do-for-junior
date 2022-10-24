import React from "react";
import { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
  {
    title: "Finish the essay collaboration",
    isCompleted: false,
    _id: "wef2",
  },
  {
    title: "Read next chapter of the book",
    isCompleted: false,
    _id: "wef3",
  },
  {
    title: "Send the finished assignment",
    isCompleted: false,
    _id: "wef4",
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

	//window.addTodo = addTodo // тестирование функции в консоле напиши addTodo('Приготовить оливье')

  return (
    <div className="h-screen text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo for junior</h1>
			<CreateTodoField setTodos={setTodos}/>
      {todos.map((todo) => (
        <TodoItem 
				todo={todo} 
				key={todo._id} 
				changeTodo={changeTodo}
				removeTodo={removeTodo}
				/>
      ))}
			
    </div>
  );
};

export default Home;
