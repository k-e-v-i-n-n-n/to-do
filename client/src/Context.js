import {useState, createContext} from "react"


const AppContext = createContext()

const UserProvider = ({children}) => {
const [user, setUser] = useState()
const [tasks, setTasks] = useState()

    return(

        <AppContext.Provider value={{user, setUser, tasks, setTasks}} >
            {children}
        </AppContext.Provider>
    )

}

export {AppContext, UserProvider}