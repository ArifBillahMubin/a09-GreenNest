import React from "react";
import Swal from "sweetalert2";
import { MdEmail, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";

const Support = () => {
    const handleSupportSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Request Submitted!",
            text: "Our support team will respond soon.",
            icon: "success",
            confirmButtonColor: "#2E7D32",
        });

        e.target.reset();
    };

    return (
        <div className="w-11/12 mx-auto py-16 space-y-20">

            {/*  HERO SECTION */}
            <section className="text-center">
                <BiSupport className="text-primary text-6xl mx-auto" />
                <h1 className="text-5xl font-bold text-primary mt-4">Support Center</h1>
                <p className="text-base-300 mt-3 max-w-2xl mx-auto">
                    Need help? We're here to support you with any questions or issues you have.
                </p>
            </section>

            {/* SUPPORT OPTIONS */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <MdEmail className="text-primary text-4xl mx-auto" />
                    <h3 className="text-xl font-semibold text-primary mt-3">Email Support</h3>
                    <p className="text-base-300 mt-2">support@greennest.com</p>
                </div>

                <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <MdPhoneInTalk className="text-primary text-4xl mx-auto" />
                    <h3 className="text-xl font-semibold text-primary mt-3">Phone Support</h3>
                    <p className="text-base-300 mt-2">+880 1234 567 890</p>
                </div>

                <div className="bg-accent p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                    <MdLocationOn className="text-primary text-4xl mx-auto" />
                    <h3 className="text-xl font-semibold text-primary mt-3">Office Location</h3>
                    <p className="text-base-300 mt-2">Dhaka, Bangladesh</p>
                </div>

            </section>

            {/* FAQ SECTION */}
            <section>
                <div className="text-center mb-10">
                    <FaRegQuestionCircle className="text-primary text-5xl mx-auto" />
                    <h2 className="text-3xl font-bold text-primary mt-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">

                    <div className="collapse collapse-arrow bg-accent">
                        <input type="radio" name="faq" defaultChecked />
                        <div className="collapse-title text-xl font-medium text-primary">
                            How can I create an account?
                        </div>
                        <div className="collapse-content text-base-300">
                            Go to the Register page and fill out your information. It takes less than 1 minute.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-accent">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium text-primary">
                            I forgot my password. What should I do?
                        </div>
                        <div className="collapse-content text-base-300">
                            Click “Forgot Password” on the Login page. You’ll receive reset instructions via email.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-accent">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium text-primary">
                            Can I update my profile?
                        </div>
                        <div className="collapse-content text-base-300">
                            Yes, go to My Profile and update your information anytime.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-accent">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium text-primary">
                            Is GreenNest a team project?
                        </div>
                        <div className="collapse-content text-base-300">
                            No. GreenNest is a fully individual project created for learning and development.
                        </div>
                    </div>

                </div>
            </section>

            {/* sUPPORT FORM */}
            <section className="bg-accent p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary text-center mb-6">
                    Submit a Support Request
                </h2>

                <form className="space-y-5" onSubmit={handleSupportSubmit}>

                    <div>
                        <label className="text-base-300 font-semibold">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:outline-primary mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-base-300 font-semibold">Your Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:outline-primary mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-base-300 font-semibold">Your Issue</label>
                        <textarea
                            rows="5"
                            placeholder="Describe your issue..."
                            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:outline-primary mt-1"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn bg-primary text-accent w-full mt-3"
                    >
                        Submit Request
                    </button>
                </form>
            </section>

        </div>
    );
};

export default Support;
