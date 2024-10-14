import './App.css';
import { useState, createContext } from 'react';
import Main from './Components/Main';
import Login from './Components/Login';
const userContext = createContext();
function App() {
  const [islogin , setlogin] = useState(false);

  return (
    <userContext.Provider value={islogin}>
    {islogin? <Main/> : <Login/>}
    </userContext.Provider>
  );
}

export default App;
