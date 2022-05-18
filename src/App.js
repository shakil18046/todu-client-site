import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoApp from './Component/Pages/TodoApp';
import RequierAuth from './RequierAuth';
import Login from './Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebaseinit';
import { ToastContainer } from 'react-toastify';


function App() {
  const [user, loading, error] = useAuthState(auth);
   
    if(loading){
        return <p>loading......</p>
     }
  return (
    <div className="App">
       <ToastContainer />
      <Routes>
        <Route path='/' element={<RequierAuth><TodoApp></TodoApp></RequierAuth>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
