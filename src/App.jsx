import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./components/App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name:"Buy Milk",
      dueDate:"16/12/2023"
    },
    {
      name:"Go to College",
      dueDate:"16/12/2023"
    },
    
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    const newTodoItems = [...todoItems1,{name: itemName, dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems);

  }


  return (
    <center className="todo-container">
       <AppName />
       <AddTodo  onNewItem={handleNewItem} />
       <todoItems todoItems={todoItems}></todoItems>
     
       <TodoItem1 />
       <TodoItem2 />
     
   </center>
  );
}
export default App;