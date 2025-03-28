import './App.css'
import Task1 from './Component/Task1'
import Task10 from './Component/Task10'
import Task11 from './Component/Task11'
import Task12 from './Component/Task12'
import Task2 from './Component/Task2'
import Task3 from './Component/Task3'
import Task4 from './Component/Task4'
import Task5 from './Component/Task5'
import Task6 from './Component/Task6'
import Task7 from './Component/Task7'
import Task8 from './Component/Task8'
import Task9 from './Component/Task9'



const App = () => {

  const userLoggedIn = false; 

  return (
    <>
     {/* <Task1 />
     <Task2 /> */}
     {/* <Task3 name="Arnav"/> */}
     {/* <Task4 name='Arnav'/>
     <Task4 /> */}
     {/* <Task5 />
    <Task6/> */}
    {/* <Task7/> */}
    {/* <Task8 /> */}
    {/* <Task9 /> */}
    {/* <Task10 /> */}
    {/* <Task11 /> */}
    <Task12 isLoggedIn={userLoggedIn}/>
    </>
    
  )
}


export default App
