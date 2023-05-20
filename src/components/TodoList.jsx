import React from "react";
const ListForm=(props)=>{
    const[formData,setFormData]=React.useState({todos:""});
    //function to handle form data
    const handleOnchange=(event)=>{
        //updating the state of form data variable
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    //function to handle submit
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onAdd(formData);
       
        setFormData({todos:""});
    }

    return(
      <div className="container">
      <form onSubmit={submitHandler}>
        <fieldset>
          <input type="text" name="todos"
           placeholder="Type your to-do items"
           className="form-control mt-2"
           value={formData.todos}
           onChange={handleOnchange}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary btn-sm mt-2"id="btn-add">Add To List</button>
      </form>
    </div>
    )

}
const ListOfTodos=(props)=>{
    
    return(
        <ul>
            {props.list.map((todos)=>(
                <li key={todos.todos}>
                  {todos.todos} <button 
                  className="btn btn-danger btn-sm"
                  onClick={()=>props.handleRemove(todos.todos)}
                  >X</button>
                </li>
            ))}
        </ul>
    )
}

const TodoList=()=>{
    const[allTodos,updateAllTodos]=React.useState([]);
    const addTodo=(todos)=>{
        updateAllTodos([...allTodos,todos]);
    }
    //deleting an item
    const handleRemove=(remove)=>{
        const newList=allTodos.filter((item)=>item.todos!==remove)
        updateAllTodos(newList);
    }
    return(
        <div className="App">
            <ListForm onAdd={addTodo}/>
            <ListOfTodos list={allTodos} handleRemove={handleRemove} />
        </div>
    )
}
export default TodoList;  