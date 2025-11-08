import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const Register = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setUser, createUser, updateUser, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter!");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl })
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Signup Successful!',
                            showConfirmButton: false,
                            timer: 1800,
                            timerProgressBar: true,
                        }).then(() => {
                            navigate('/');
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user);
                    })
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Signup Failed!",
                    text: err?.message || "Something went wrong! Please try again.",
                    confirmButtonText: "OK"
                });
                setError(err?.message)
            })
    }

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
            <title>Register</title>
            <div className="hero-content flex flex-col bg-base-200 rounded-3xl p-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-green-800 font-bold">Signup now!</h1>
                </div>
                <div className="card bg-base-100 w-[350px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" required />
                            {/* email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />
                            {/* photo url */}
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input" placeholder="Photo Url" required />
                            {/* password */}
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

                            <div><a className="link link-hover">Forgot password?</a></div>

                            {error && <p className="text-red-600 mt-2">{error}</p>}

                            <button type='submit' className="btn btn-primary mt-4">Sign Up</button>

                            <button onClick={handleGoogleSignIn} type='submit' className="btn btn-primary mt-4">Sign in With Google</button>

                            <h1 className='text-sm text-center'>You Have An Account ? <Link className='text-secondary' to={'/login'}>Login</Link></h1>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;