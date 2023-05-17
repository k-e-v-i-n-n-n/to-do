const ListHeader = ({listName}) => {

  function signOut(){

    console.log("signout")
  }
    return (
      <div className="list-header" >

        <h1>{listName}</h1>
        <div className="button-container">
          <button className="create">Create</button>
          <button className="signout" onClick={signOut} >Signout</button>

        </div>
           
      </div>
    )
  }
  
  export default ListHeader