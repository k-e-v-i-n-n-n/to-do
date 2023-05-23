import ListHeader from "./components/ListHeader"
import Auth from "./components/Auth"
import { useContext, useState, useEffect } from "react"
import {AppContext} from "./Context"
import ListItem from "./components/ListItem"

const App = () => {
  const {user, setUser, tasks, setTasks} = useContext(AppContext) 

  const authToken = false

  useEffect(() => {

    fetch("/api/me")
    .then((r) =>{
      if (r.ok)
      {r.json().then((r) =>{setUser(r); setTasks(r.todos); console.log("user r", r)})}
      else
      {r.json().then(r => console.log("/api/me says", r))}})
  }, [])

  function signOut(){
    fetch("/api/logout", 
    {method: "DELETE"})
    .then(() => {setUser(null)})

    console.log("signout")
  }

  return (
    <div className="app" >
      {!user && <Auth/>}
      
      {user && <>
        <ListHeader signOut={signOut} listName={"Holiday List : )"}/>
      {tasks?.map((task) => <ListItem key={task.id} task={task}  />)}
      </>}
         
    </div>
  )
}

export default App