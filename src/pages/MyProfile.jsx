import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router';

const MyProfile = () => {
    const {user} = use(AuthContext);
    // console.log(user);
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4">
            <title>My profile</title>
            {/* Profile Card */}
            <div className="bg-base-200 rounded-3xl shadow-2xl p-10 w-full max-w-md text-center transform transition duration-300 hover:scale-105 hover:shadow-3xl">


                {/* Profile Image */}
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-green-300 shadow-md mb-6">
                    <img
                        src={user?.photoURL || 'No image found'}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* User Info */}
                <h2 className="text-2xl font-bold text-gray-800">
                    {user?.displayName || 'No Name'}
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    {user?.email || 'No Email Provided'}
                </p>

                <Link to={'/updateProfile'} className='btn bg-green-700 text-accent mt-3'>Update profile</Link>
            </div>
        </div>
    );
};

export default MyProfile;