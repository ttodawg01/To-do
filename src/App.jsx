import React from "react";
import Nav from "./components/Nav";
import Students from "./components/Students";
import StudentsDisplay from "./components/StudentsDisplay";
import ToDo from "./components/ToDo";


  function App() {
    // const [FirstName] = useState('tony')
    // calling the useEffect
    // useEffect(() => {
    //   console.log('use effect is now possible')
    //   fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)

    //     })
    // })

    return (
      <>
        <Nav/>
        <div className="container">
          <ToDo/>
          <StudentsDisplay />
          <Students />
        </div>
      </>
  )
}

export default App;
