import React from "react";
import { Link } from "react-router";

const About = () => {
    return (
        <div className="w-11/12 mx-auto py-16 space-y-24">

            {/*  HERO SECTION  */}
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold text-primary">About GreenNest</h1>
                <p className="text-base-300 mt-4 leading-relaxed">
                    GreenNest is an individual project designed to bring nature closer through
                    modern web development. The platform helps users explore indoor plants and
                    learn plant care with a simple, clean and responsive interface.
                </p>

                {/* Hero Placeholder Image */}
                <div className="mt-10 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
                        alt="Plants"
                        className="rounded-2xl shadow-lg w-full max-w-3xl object-cover"
                    />
                </div>
            </section>

            {/*  PROJECT PURPOSE  */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Purpose of This Project</h2>
                    <p className="text-base-300 leading-relaxed">
                        GreenNest was created to practice modern tools like React.js, Tailwind CSS,
                        DaisyUI, Firebase Authentication, and component-based development. The goal was
                        to build a beautiful, responsive application that provides a smooth user
                        experience and demonstrates professional frontend skills.
                    </p>

                    <p className="text-base-300 mt-4">
                        This project highlights clean UI design, structured code, user authentication,
                        protected routes, and dynamic content — all developed individually.
                    </p>
                </div>

                {/* Purpose Image */}
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                    alt="Purpose"
                    className="rounded-2xl shadow-xl object-cover"
                />
            </section>

            {/*  KEY FEATURES */}
            <section className="text-center">
                <h2 className="text-3xl font-bold text-primary">Key Features</h2>
                <p className="text-base-300 mt-2 max-w-xl mx-auto">
                    GreenNest comes with essential features that ensure usability and clean plant exploration.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary">Indoor Plant Listing</h3>
                        <p className="text-base-300 mt-2">
                            Organized and detailed plant card design for easy browsing.
                        </p>
                    </div>

                    <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary">Secure Authentication</h3>
                        <p className="text-base-300 mt-2">
                            Firebase-based login, register & private routes.
                        </p>
                    </div>

                    <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary">Responsive UI</h3>
                        <p className="text-base-300 mt-2">
                            Clean, modern, mobile-first design using Tailwind & DaisyUI.
                        </p>
                    </div>

                </div>
            </section>

            {/* ABOUT DEVELOPER */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Developer Placeholder Image */}
                <img
                    src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80"
                    alt="Developer"
                    className="rounded-2xl shadow-xl object-cover"
                />

                <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">About the Developer</h2>
                    <p className="text-base-300 leading-relaxed">
                        This project was created individually by <span className="font-semibold text-primary">Arif Billah</span>,
                        a frontend developer passionate about clean UI, smooth UX, and modern JavaScript frameworks.
                    </p>

                    <p className="text-base-300 mt-3">
                        I enjoy building visually appealing and functional applications that solve real problems.
                        GreenNest reflects my interest in combining technology with nature.
                    </p>

                    <ul className="mt-4 space-y-1 text-base-300">
                        <li>✔ React.js & Component Architecture</li>
                        <li>✔ Tailwind CSS & DaisyUI UI Development</li>
                        <li>✔ Firebase Authentication</li>
                        <li>✔ Git & GitHub Workflow</li>
                    </ul>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="text-center py-10">
                <h2 className="text-3xl font-bold text-primary">Start Your Green Journey </h2>
                <p className="text-base-300 mt-2">
                    Discover beautiful indoor plants and begin exploring GreenNest.
                </p>

                <Link
                    to="/allPlants"
                    className="btn bg-primary text-accent mt-5 px-8 hover:brightness-110"
                >
                    Explore Plants
                </Link>
            </section>

        </div>
    );
};

export default About;
