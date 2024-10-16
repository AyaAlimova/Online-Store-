import React, { useState, useEffect } from 'react';
import './Css/loginSignUp.css';
import Header from '../components/Header';

function LoginSignup() {
    const initialFormData = {
        username: "",
        password: "",
        email: ""
    };

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        // Reset form data on component mount
        setFormData(initialFormData);
    }, [state]); // This will reset the form when state changes (to either Login or Sign Up)

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Login function executed", formData);
        let responseData;

        try {
            const response = await fetch('http://localhost:2020/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Login failed: ${errorResponse.errors || 'Unknown error'}`);
            }

            responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                setFormData(initialFormData); // Reset form data on successful login
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login error: ' + error.message);
        }
    };

    const signup = async () => {
        console.log("Sign Up function executed", formData);
        let responseData;

        try {
            const response = await fetch('http://localhost:2020/api/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Signup failed: ${errorResponse.errors || 'Unknown error'}`);
            }

            responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                setFormData(initialFormData); // Reset form data on successful signup
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup error: ' + error.message);
        }
    };

    return (
        <>
            <Header />
            <div className='loginSignUp'>
                <div className="loginSignUp-container">
                    <h1>{state}</h1>
                    <div className='loginSignUp-fields'>
                        {state === "Sign Up" && (
                            <input 
                                name='username' 
                                value={formData.username} 
                                onChange={changeHandler} 
                                type="text" 
                                placeholder='Your Name' 
                            />
                        )}
                        <input 
                            name='email' 
                            value={formData.email} 
                            onChange={changeHandler} 
                            type="email" 
                            placeholder='Email Address' 
                        />
                        <input 
                            name='password' 
                            value={formData.password} 
                            onChange={changeHandler} 
                            type="password" 
                            placeholder='Password' 
                        />
                    </div>
                    <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                    {state === "Sign Up" ? (
                        <p className="loginSignUp-login">
                            Already have an account? <span onClick={() => setState("Login")}>Login</span>
                        </p>
                    ) : (
                        <p className="loginSignUp-login">
                            Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
                        </p>
                    )}
                    <div className="loginSignUp-agree">
                        <input type="checkbox" name='' id='' />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginSignup;
