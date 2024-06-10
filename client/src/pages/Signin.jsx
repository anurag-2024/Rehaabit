import React,{useState} from 'react'
import image from '../assets/signup.png';
import './styles/Signin.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/api';
const Signin = () => {
    const navigate=useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    }); 
    const [isRemember, setIsRemember] = useState(false);
    const handleRemember = (e) => {
        setIsRemember(e.target.checked);
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`${API_URL}/signin`, user)
                .then((res) => {
                    if(isRemember) localStorage.setItem('token',res.data.token);
                    else sessionStorage.setItem('token',res.data.token);
                    toast.success(res.data.message);
                    setTimeout(() => {
                        navigate('/');
                    }, 1200);
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                })
        }
        catch (err) {
            toast.error(err.response.data.message);
        }
    }
    return (
        <>
            <div className='signin'>
            <ToastContainer/>
                <div className='signin-left'>
                    <div className='signin-left-container'>
                        <div className='signin-left-container-top'>
                            <h1>Sign In</h1>
                            <p>Don't have an account? <Link to='/signup'><span> Sign up</span></Link></p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' id='email' placeholder='Enter your email' onChange={handleChange}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' id='password' placeholder='Enter your password' onChange={handleChange}/>
                                </div>
                                <div>
                                    <input type='checkbox' name='remember' id='remember' onChange={handleRemember} />
                                    <label className='remember' htmlFor='remember'>Remember me</label>
                                </div>
                                <div>
                                    <a href='#'>Forgot password?</a>
                                </div>
                                <div className='form-group'>
                                    <button type='submit'>SIGN IN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='signin-right'>
                    <div className='signin-right-container'>
                        <img src={image} alt='signin' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
