const Modal = () => {
    
  const mode = "Edit"
  return (
      <div className="overlay">
        <div className="modal">
          <h3>{mode} your task</h3>
          <button>x</button>

        </div>
           
      </div>
    )
  }
  
  export default Modal