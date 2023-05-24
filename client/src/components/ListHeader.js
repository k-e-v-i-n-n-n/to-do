import Modal from "./Modal"

const ListHeader = ({listName, signOut}) => {

  
    return (
      <div className="list-header" >

        <h1>{listName}</h1>
        <div className="button-container">
          <button className="create">Create</button>
          <button className="signout" onClick={signOut} >Signout</button>

        </div>
           <Modal/>
      </div>
    )
  }
  
  export default ListHeader