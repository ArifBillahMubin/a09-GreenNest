import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../components/header/Hero';
import Home from '../pages/Home';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/header/Footer';
import LoaderSpinner from '../components/LoaderSpinner';

const MainLayout = () => {
    const { state } = useNavigation();
    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar></Navbar>
                {/* <Hero></Hero> */}
            </header>
            <main className='flex-1'>
                {state == "loading" ? <LoaderSpinner></LoaderSpinner> : <Outlet></Outlet>}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;