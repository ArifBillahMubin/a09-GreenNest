import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const UpdateProfileForm = () => {
    const { updateUser, user, setUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        // console.log('click', name, photoURL);
        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL })
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Update profile Successful!',
                    showConfirmButton: false,
                    timer: 1800,
                    timerProgressBar: true,
                }).then(() => {
                    navigate('/myProfile');
                });
            })
            .catch((error) => {
                console.log(error)
                setUser(user);
            })

    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-green-50">
            <form onSubmit={handleSubmit} className="min-w-sm md:min-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
                <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
                    Update Profile
                </h2>

                {/* Display Name */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        Display Name
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
                </div>

                {/* Photo URL */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter photo URL"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mb-3 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                    Update
                </button>

                <Link to={'/myProfile'} className="block w-full text-center bg-green-600 font-semibold py-2 rounded-lg text-accent hover:bg-green-700 transition-all duration-200">My Profile</Link>
            </form>
        </div>
    );
};

export default UpdateProfileForm;
