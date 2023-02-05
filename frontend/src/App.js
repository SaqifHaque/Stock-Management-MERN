import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassoword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Layout from './component/layout/Layout';
import Dashboard from './component/dashboard/Dashboard';
import axios from 'axios';
import { ToastContainer  } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoginStatus } from './api/authAPI';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import AddProduct from './pages/addProduct/AddProduct';

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loginStatus(){
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  },[dispatch])
  
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={
          <Layout>
            <Dashboard/>
          </Layout>
          } />
          <Route path='/add-product' element={
            <Layout>
              <AddProduct/>
            </Layout> 
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
