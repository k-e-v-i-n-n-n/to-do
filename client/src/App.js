import ListHeader from "./components/ListHeader"
import { useContext, useState, useEffect } from "react"
import {AppContext} from "./Context"
import ListItem from "./components/ListItem"

const App = () => {
  const {user, setUser, tasks, setTasks} = useContext(AppContext) 

  useEffect(() => {

    fetch("/api/me")
    .then((r) =>{
      if (r.ok)
      {r.json().then((r) =>{setUser(r); setTasks(r.todos); console.log("user r", r)})}
      else
      {r.json().then(r => console.log("/api/me says", r))}})
  }, [])

  return (
    <div className="app" >
         <ListHeader listName={"Holiday List : )"}/>
      {tasks?.map((task) => <ListItem key={task.id} task={task}  />)}
    </div>
  )
}

export default App