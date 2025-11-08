import React from "react";
import Marquee from "react-fast-marquee";

const GreenExperts = () => {
    return (
        <section className="py-10 w-11/12 mx-auto bg-white">
            <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
                Meet Our Green Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 max-w-7xl mx-auto">
                {/* Expert 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-5 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://i.ibb.co.com/m5TXMS28/expart1.jpg"
                        alt=""
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300 shadow-sm"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-green-700">
                        Sophia Greenleaf
                    </h3>
                    <p className="text-gray-600">Indoor Plant Specialist</p>
                </div>

                {/* Expert 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-5 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://i.ibb.co.com/bgzR8Wz0/expart2.jpg"
                        alt=""
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300 shadow-sm"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-green-700">
                        James Bloom
                    </h3>
                    <p className="text-gray-600">Soil & Fertilizer Expert</p>
                </div>

                {/* Expert 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-5 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://i.ibb.co.com/jPgsdwBq/expart3.jpg"
                        alt=""
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300 shadow-sm"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-green-700">
                        Lily Fern
                    </h3>
                    <p className="text-gray-600">Succulent & Cactus Expert</p>
                </div>

                {/* Expert 4 */}
                <div className="bg-white rounded-2xl shadow-lg p-5 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://i.ibb.co.com/gF3gDNGy/expart4.jpg"
                        alt=""
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300 shadow-sm"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-green-700">
                        Noah Woods
                    </h3>
                    <p className="text-gray-600">Outdoor Gardening Advisor</p>
                </div>
            </div>
        </section>
    );
};

export default GreenExperts;
