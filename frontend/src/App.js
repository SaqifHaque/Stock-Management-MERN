import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassoword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Sidebar from './component/sidebar/Sidebar';
import Layout from './component/layout/Layout';
import Dashboard from './component/dashboard/Dashboard';
import axios from 'axios';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={
          <Sidebar>
            <Layout>
              <Dashboard/>
            </Layout>
          </Sidebar>
          } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-pass' element={<ForgotPassoword/>}/>
        <Route path='/reset-pass/:resetToken' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
