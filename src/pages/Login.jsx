import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const { login, passwordRest, googleSignIn, setUser } = use(AuthContext);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // console.log(email);

    const location = useLocation();
    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        login(email, password)
            .then(() => {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                }).then(() => {
                    navigate(`${location.state ? location.state : '/'}`);
                });
                e.target.reset();
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or password does not match...!',
                    confirmButtonColor: '#d33',
                })
                setError(err.message);
            });
    }

    const handleForgetPassword = (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Please enter your email first!',
                confirmButtonColor: '#3085d6',
            });
            return;
        }

        passwordRest(email)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Password reset email sent!',
                    text: 'Check your Gmail inbox to reset your password.',
                    showCancelButton: true,
                    confirmButtonText: 'Go to Gmail',
                    cancelButtonText: 'OK',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#6c757d',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.open('https://mail.google.com', '_blank');
                    }
                });
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error sending reset email',
                    text: err.message,
                });
            });
    };

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn(googleProvider)
            .then(result => {
                setUser(result.user)
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                }).then(() => {
                    navigate(`${location.state ? location.state : '/'}`);
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Field sign in try again',
                    confirmButtonColor: '#d33',
                })
                setError(err.message);
            });
    }

    return (
        <div className="hero bg-green-50 min-h-screen">
            <title>Login</title>
            <div className="hero-content flex flex-col bg-base-200 rounded-3xl p-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-green-800 font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-[350px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <div className='relative'>
                                <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" required />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-600 hover:text-green-600"
                                >
                                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </button>
                            </div>
                            <div><button onClick={handleForgetPassword} className="link link-hover">Forgot password?</button></div>
                            <h2 className='text-red-400 text-sm'>{error}</h2>
                            <button type='submit' className="btn btn-primary mt-4">Login</button>

                            <button onClick={handleGoogleSignIn} type='submit' className="btn btn-primary mt-4">Sign in With Google</button>

                            <h1 className='text-sm text-center'>Don't have an account ?<Link className='text-secondary' to={'/register'}>SignUp</Link></h1>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;