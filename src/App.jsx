import TodoForm from "./TodoForm"

function App() {

  return (
    <div style = {{display : "flex", justifyContent : "center", flexDirection : "column", alignItems : "center", marginTop : "100px"}}>
      <h1>Add Your Daily Todo's</h1>

      <TodoForm> </TodoForm>

    </div>
  )
}

export default App
