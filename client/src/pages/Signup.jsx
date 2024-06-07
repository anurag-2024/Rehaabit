import React from 'react'
import image from '../assets/signup.png';
import './styles/Signin.scss';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <>
            <div className='signin'>
                <div className='signin-left'>
                    <div className='signin-left-container'>
                        <div className='signin-left-container-top'>
                            <h1>Sign In</h1>
                            <p>Don't have an account? <Link to='/signin'><span> Sign up</span></Link></p>
                        </div>
                        <div>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='name'>User Name</label>
                                    <input type='text' name='username' id='username' placeholder='Enter User Name' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' id='email' placeholder='Enter your email' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' id='password' placeholder='Enter your password' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Confirm Password</label>
                                    <input type='password' name='confirm-password' id='confirm-password' placeholder='Confirm your password' />
                                </div>
                                <div>
                                    <input type='checkbox' name='remember' id='remember' />
                                    <label className='remember' htmlFor='remember'>Accept the <span>Terms</span> and <span>Privacy Policy</span></label>
                                </div>
                                <div className='form-group'>
                                    <button type='submit'>SIGN UP</button>
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

export default Signup
