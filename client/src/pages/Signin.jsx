import React from 'react'
import image from '../assets/signup.png';
import './styles/Signin.scss';
import { Link } from 'react-router-dom';
const Signin = () => {
    return (
        <>
            <div className='signin'>
                <div className='signin-left'>
                    <div className='signin-left-container'>
                        <div className='signin-left-container-top'>
                            <h1>Sign In</h1>
                            <p>Don't have an account? <Link to='/signup'><span> Sign up</span></Link></p>
                        </div>
                        <div>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' id='email' placeholder='Enter your email' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' id='password' placeholder='Enter your password' />
                                </div>
                                <div>
                                    <input type='checkbox' name='remember' id='remember' />
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
