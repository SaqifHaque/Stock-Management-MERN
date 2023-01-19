import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassoword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-pass' element={<ForgotPassoword/>}/>
        <Route path='/reset-pass/:resetToken' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
