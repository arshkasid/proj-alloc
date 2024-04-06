import Login from "./components/Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
