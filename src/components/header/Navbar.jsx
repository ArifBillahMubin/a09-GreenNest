import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    // console.log(user);

    const handleLogout = () => {
        logout().then(() => {
            Swal.fire({
                title: 'Sign-out Successful!',
                text: 'You have been logged out successfully.',
                icon: 'success',
                confirmButtonColor: '#16a34a',
                confirmButtonText: 'OK'
            });
        })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonColor: '#dc2626'
                });
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    confirmButtonColor: '#dc2626',
                });
            });
    }

    const links = <>
        <li className='text-base-300 font-semibold'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-base-300 font-semibold'><NavLink to={'/allPlants'}>Plants</NavLink></li>
        <li className='text-base-300 font-semibold'><NavLink to={'/myProfile'}>My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-[999] mt-3 w-52 p-2 shadow">

                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={'/'} className="flex items-center">
                    <img className='w-35  object-contain' src={logo} alt="GreenNest Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full">
                                <img src={user?.photoURL ? user.photoURL : "m"} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} onClick={(e) => e.stopPropagation()} className="mt-3 p-5 shadow menu menu-compact dropdown-content bg-green-300 rounded-box w-52 flex flex-col items-center justify-center gap-3">
                            <li><figure><img className='w-40 rounded-full' src={user.photoURL} alt="" /></figure></li>
                            <li className='text-center'><span>Name: {user.displayName}</span></li>
                            <li><button className='bg-primary text-accent' onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-primary btn-sm mr-2">Login</Link>
                        <Link to="/register" className="btn btn-sm btn-primary">Register</Link>
                    </>
                )}

            </div>
        </div>
    );
};

export default Navbar;