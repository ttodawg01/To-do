import Form from "./components/Form"
import Navbar from "./components/Navbar";

  function App() {
    let MyName = 'tony'
    let form = [
      {}
    ]
    return (
      <>
          <Navbar name={MyName}/>
          <div className="container">
              {form.map(form => <Form />)}
          </div>
      </>
  )
}

export default App;
