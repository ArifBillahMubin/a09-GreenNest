import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Message Sent!",
            text: "Thanks for contacting us. We will get back to you soon.",
            icon: "success",
            confirmButtonColor: "#2E7D32",
        });

        e.target.reset();
    };

    return (
        <div className="w-11/12 mx-auto py-16 space-y-20">

            {/* HERO SECTION */}
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
                <p className="text-base-300 mt-4 leading-relaxed">
                    Have questions about plants, need support, or want to connect?
                    We're always here to help you grow your indoor nature journey.
                </p>

            </section>

            {/* CONTACT GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* ---------- CONTACT INFO ---------- */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Get in Touch</h2>

                    <div className="space-y-4">
                        <div className="p-5 bg-accent rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-primary flex gap-2 items-center"><FaLocationArrow></FaLocationArrow> <span>Address</span></h3>
                            <p className="text-base-300 mt-2">Dhaka, Bangladesh</p>
                        </div>

                        <div className="p-5 bg-accent rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-primary">📧 Email</h3>
                            <p className="text-base-300 mt-2">arifbillahmubin@gmail.com</p>
                        </div>

                        <div className="p-5 bg-accent rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-primary flex gap-2 items-center"><FaPhone></FaPhone> Phone</h3>
                            <p className="text-base-300 mt-2">+880 1405428933</p>
                        </div>
                    </div>
                </div>

                {/* ---------- CONTACT FORM ---------- */}
                <div className="bg-accent p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Send Us a Message
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>

                        {/* Name */}
                        <div>
                            <label className="text-base-300 font-semibold">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-base-300 rounded-lg focus:outline-primary mt-1"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-base-300 font-semibold">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-base-300 rounded-lg focus:outline-primary mt-1"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-base-300 font-semibold">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 border border-base-300 rounded-lg focus:outline-primary mt-1"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn bg-primary text-accent w-full mt-3"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </section>

        </div>
    );
};

export default Contact;
