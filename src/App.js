import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage, LoginPage, SignupPage} from "../src/routes";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestComponent from './test_rough/TestComponent';
import ActivationPage from './pages/ActivationPage';
import { getUserAsync } from './redux/user/user-api';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    // axios.get(`${process.env.SERVER_URL}/user/get-user`,{withCredentials:true})
    dispatch(getUserAsync());
  },[dispatch])
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/signin' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='test' element={<TestComponent />}/>
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
