import React from 'react';

const EcoDecorIdeas = () => {
    return (
        <section className="py-16 bg-green-50">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                 Eco Decor Ideas — Style Your Space Naturally
            </h2>

            <div className="max-w-6xl mx-auto space-y-10 px-4">
                {/* Card 1 */}
                <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl">
                    <img
                        src="https://i.ibb.co.com/bj693mXS/eco-decor.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-64 object-cover"
                    />
                    <div className="p-6 md:w-1/2">
                        <h3 className="text-2xl font-semibold text-green-700 mb-3">1. Desk Mini Garden</h3>
                        <p className="text-gray-600">
                            Transform your work desk into a refreshing mini garden!
                            Add small succulents or cacti beside your laptop to keep your workspace bright and lively.
                            Perfect for low-light areas and busy schedules.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl">
                    <img
                        src="https://i.ibb.co.com/6Jtm3Fbp/eco-decor.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-64 object-cover"
                    />
                    <div className="p-6 md:w-1/2">
                        <h3 className="text-2xl font-semibold text-green-700 mb-3">2. Hanging Planters</h3>
                        <p className="text-gray-600 ">
                            Save space and create visual magic with hanging planters.
                            These are ideal for small apartments — letting your plants dance beautifully in natural light.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl ">
                    <img
                        src="https://i.ibb.co.com/QFtqN7yh/eco-decor-2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-64 object-cover"
                    />
                    <div className="p-6 md:w-1/2">
                        <h3 className="text-2xl font-semibold text-green-700 mb-3">3. Window Bloom Space</h3>
                        <p className="text-gray-600">
                            Turn your window sill into a bloom zone!
                            Use small pots with herbs or colorful flowers to keep your mornings cheerful and naturally scented.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcoDecorIdeas;
