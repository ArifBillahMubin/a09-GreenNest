import React from "react";
import { FaCut, FaLeaf, FaSun, FaTint } from "react-icons/fa";

const PlantCareTips = () => {
    return (
        <section className="py-12 w-11/12 mx-auto bg-green-200">
            <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
                Plant Care Tips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                    <div className="text-green-600 text-4xl mb-3 flex justify-center"><FaTint/></div>
                    <h3 className="text-xl font-semibold mb-2 text-green-700 text-center">
                        Watering Tips
                    </h3>
                    <p className="text-gray-600 text-center">
                        Water your plants 1-2 times a week depending on the season.
                        Make sure the soil is slightly dry before watering again.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                    <div className=" text-yellow-500 text-4xl mb-3 flex justify-center"><FaSun></FaSun></div>
                    <h3 className="text-xl font-semibold mb-2 text-green-700 text-center">
                        Sunlight Tips
                    </h3>
                    <p className="text-gray-600 text-center">
                        Keep your plants in bright, indirect sunlight.
                        Avoid harsh midday rays to prevent leaf burns.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                    <div className="text-green-500 text-4xl mb-3 flex justify-center"><FaLeaf /></div>
                    <h3 className="text-xl font-semibold mb-2 text-green-700 text-center">
                        Fertilizing Tips
                    </h3>
                    <p className="text-gray-600 text-center">
                        Fertilize every 2-4 weeks during growing seasons using organic
                        or slow-release fertilizer for best results.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                    <div className="text-4xl mb-3 flex justify-center text-red-500"><FaCut/></div>
                    <h3 className="text-xl font-semibold mb-2 text-green-700 text-center">
                        Pruning Tips
                    </h3>
                    <p className="text-gray-600 text-center">
                        Trim dead or yellow leaves regularly to encourage new growth
                        and maintain plant health.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PlantCareTips;
