import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login1 } from './Login/Login1';
import { AdminDashboard } from './Component/AdminDashboard';
import { UserDashboard } from './Component/UserDashboard';
import { SingUp } from './Login/SingUp';



function App() {



  

 
  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<Login1/>}/>
        <Route exact path='/admin-page'  element={<AdminDashboard/>}/>
        <Route exact path='/user-page' element={<UserDashboard/>}/>
        <Route exact path='/singup-page' element={<SingUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
