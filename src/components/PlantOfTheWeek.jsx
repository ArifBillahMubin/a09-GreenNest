import React from "react";

const PlantOfTheWeek = () => {
    return (
        <section className="w-11/12 mx-auto bg-accent py-12 px-4 md:px-12 rounded-2xl shadow-md mt-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.ibb.co.com/2Y1J7BKB/lily.jpg"
                        alt=""
                        className="w-full object-contain rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-3xl font-bold text-green-700">
                        Plant of the Week
                    </h2>
                    <h3 className="text-2xl font-semibold text-gray-800">Peace Lily</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Known for its elegant white blooms and air-purifying qualities, the
                        Peace Lily is the perfect companion for calm, refreshing interiors.
                        It thrives in low light and only needs watering once a week — ideal
                        for busy plant parents!
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 pt-2">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Low Light
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Easy Care
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Air Purifier
                        </div>
                    </div>

                    <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition duration-200 shadow">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PlantOfTheWeek;
