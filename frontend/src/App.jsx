
import Home from "./components/Home";
import Login from "./components/Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='Login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      
      </Routes>
      </BrowserRouter>


      
    </div>
  );
}

export default App;
