import React ,{useState}from 'react';

import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {SuperTodolist} from "./Components/SuperTodolist";



function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

  return (
    <div className="App">
        <SuperTodolist task={tasks}><div>News</div></SuperTodolist>
        <SuperTodolist task={tasks}><div>Help</div></SuperTodolist>
        <SuperTodolist task={tasks}/>
      <SuperButton callback={()=>{}} color={'red'}>Red SuperButton</SuperButton>
      <SuperButton callback={()=>{}}>Default SuperButton</SuperButton>
      <SuperButton callback={()=>{}} color={'secondary'} disabled>Secondary_Disabled SuperButton</SuperButton>
    </div>
  );
}

export default App;
