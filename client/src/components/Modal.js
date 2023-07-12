import {useState} from 'react'

const Modal = () => {

  const [data, setData] = useState({
    user_email:"",
    username:"",
    title:"",
    progress:"",
    date:"",
  })
    
  const mode = "Edit"
console.log("datat", data)
  function popForm(e){
    e.preventDefault()
    const {name, value} = e.target
    setData({...data, [name]: value})


  }

  return (
      <div className="overlay">
        <div className="modal">
          <div className="form-title-container">
            <h3>{mode} your task</h3>
            <button>x</button>
          </div>
            <form>
              <input
              required
              maxLength={30}
              placeholder="Enter task..."
              name="title"
              value={data.title}
              onChange={(e) => popForm(e)}
              />
              <br/>
              <label for="range">Drag to indicate progress</label>
              <input
              required
              type="range"
              min="0"
              max='100'
              id="range"
              name="progress"
              value={data.progress}
              onChange={(e) => popForm(e)}/>
              <input className={mode} type="submit"/>
            </form>
        </div>
      </div>
    )
  }
  
  export default Modal