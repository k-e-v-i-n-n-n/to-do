import { useState } from "react"

const Auth = () => {
  const [error, setError] = useState(null)
  const [isLogIn, setIsLogIn] = useState(false)

  const goLogin = (isIt) => {

    setError(null)
    setIsLogIn(isIt)
  }

    return (
      <div className="auth-container" >
           <div className="auth-container-box">
              <form>
                <h2>{isLogIn? "Please log in" : "Please sign up"}</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                {!isLogIn && <input type="password" placeholder="password confirmation"/>}
                <input type="submit" className="create"/>
                {error && <p>{error}</p>}
              </form>
              <div className="auth-options">
                <button onClick={() => {goLogin(false)}} 
                style={{backgroundColor : isLogIn ? 'rgb(200, 200, 200)' : 'rgb(255, 255, 255)'}}
                >Signup</button>
                <button onClick={() => {goLogin(true)}}
                style={{backgroundColor : !isLogIn ? 'rgb(200, 200, 200)' : 'rgb(255, 255, 255)'}}
                >Login</button>
              </div>
           </div>
      </div>
    )
  }
  
  export default Auth