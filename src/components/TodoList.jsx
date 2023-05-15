
const TodoList=()=>{
  const submitHandler=(event)=>{
    
  }
  const handleOnchange=(event)=>{

  }
  return(
    <div className="container">
      <form onSubmit={submitHandler}>
        <fieldset>
          <input type="text" name="listtodos"
           placeholder="Type your to-do items"
           className="form-control"
           value={''}
           onChange={handleOnchange}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary btn-sm mt-2"id="btn-add">Add To List</button>
      </form>
    </div>
  )
}
export default TodoList;