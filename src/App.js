import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

const App = () => {
  const [tasklist, setTaskList] = useState({
    data: [],
  }); 
  const [newTaskValue, setNewTaskValue] = useState("");

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    const newData = tasklist.data;
    newData.push(newTaskValue);
    setTaskList({ rand: Math.random(), data: newData });
    setNewTaskValue("");
  };
  
  return (
    <div> 
      <br />
      <div> 
        <Input newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue}/>
        <Button text="Add Task" onClick={actionAddTask} /> 
      </div>
      <div>
        <ul>
          <ListItem tasklist={tasklist} />
        </ul>
      </div>
      <Button 
        backgroundColor="red" 
        text="Hapus"
        onClick={() => setTaskList({ data: [] })} />
    </div> 
  );
}

export default App;
