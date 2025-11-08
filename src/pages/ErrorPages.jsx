import React from 'react';
import { useNavigate, useRouteError } from 'react-router';

// Replace with your GreenNest-relevant image
import errorImg from '../assets/logo.png'
import Navbar from '../components/header/Navbar';
import Footer from '../components/header/Footer';

const ErrorPages = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>

            <div className="flex flex-col justify-center items-center py-16 px-4 space-y-6 text-center bg-green-50">
                <div className="w-64 md:w-96">
                    <img src={errorImg} alt="Page not found - GreenNest" className="w-full" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-green-800">
                    Oops! Page not found
                </h1>

                <p className="text-gray-600 max-w-md">
                    The page you are looking for might have been moved, deleted, or never existed. 
                </p>

                {error?.message && (
                    <p className="text-red-400 font-medium">{error.message}</p>
                )}

                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-6 py-2 rounded-lg font-semibold text-white hover:from-green-700 hover:to-green-500 transition"
                >
                    Back to Home
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default ErrorPages;
