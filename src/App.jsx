import Calculator from "./components/Calculator";
import TodoList from "./components/TodoList";
function App() {


  return (
    <div className="container"  id="main">
      <div className="row">
        <div className="col-6">
          <Calculator/>
        </div>
        <div className="col-6">
          <TodoList/>
        </div>
      </div>
    </div>
  )
}

export default App
