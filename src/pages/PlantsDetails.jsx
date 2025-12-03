import React, { useEffect, useState } from 'react';
import { FaStar, FaSun, FaTint, FaThermometerHalf, FaLeaf, FaPaw, FaCheckCircle } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const PlantsDetails = () => {
    const [plant, setPlant] = useState({});
    const { id } = useParams();
    const allData = useLoaderData();

    useEffect(() => {
        const findPlant = allData.find(plant => plant.plantId == id);
        setPlant(findPlant);
    }, [allData, id]);

    const handleFromSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;

        if (!name || !email) {
            Swal.fire({
                icon: 'warning',
                title: 'Please fill in all fields!',
                confirmButtonColor: '#3085d6'
            });
            return;
        }

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Consultation booked successfully!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        });

        e.target.reset();
    };

    return (
        <section className="py-16 bg-green-50 p-4">
            <title>{plant.plantName}</title>

            {/* MAIN CARD */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex hover:shadow-2xl transition">
                {/* IMAGE */}
                <div className="md:w-1/2">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="w-full h-80 md:h-full object-cover"
                    />
                </div>

                {/* BASIC INFO */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-3">{plant.plantName}</h2>

                    <p className="text-gray-600 text-sm mb-2">
                        <span className="font-semibold">Category:</span> {plant.category}
                    </p>

                    <p className="text-gray-600 text-sm mb-4">
                        <span className="font-semibold">Care Level:</span> {plant.careLevel}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-5">{plant.description}</p>

                    {/* PRICE + STOCK */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold text-green-700">${plant.price}</p>
                        <p
                            className={`text-sm font-semibold ${plant.availableStock > 0 ? 'text-green-600' : 'text-red-500'
                                }`}
                        >
                            {plant.availableStock > 0
                                ? `In Stock (${plant.availableStock})`
                                : 'Out of Stock'}
                        </p>
                    </div>

                    {/* RATING */}
                    <p className="text-yellow-500 font-medium flex items-center gap-2 mb-3">
                        <span className='text-gray-600 font-semibold'>Rating:</span>
                        <FaStar /> {plant.rating} / 5
                    </p>

                    {/* PROVIDER */}
                    <p className="text-sm text-gray-500 mb-5">
                        Provided by:
                        <span className="text-green-700 font-semibold"> {plant.providerName}</span>
                    </p>

                    <Link to={'/allPlants'} className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors text-center">
                        All Plants
                    </Link>
                </div>
            </div>

            {/* EXTRA DETAILS SECTION */}
            <div className="max-w-5xl mx-auto bg-white mt-10 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Plant Care & Details</h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Sunlight */}
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
                        <FaSun className="text-yellow-500 text-2xl" />
                        <div>
                            <p className="font-semibold">Sunlight</p>
                            <p className="text-gray-600 text-sm">{plant.sunlight}</p>
                        </div>
                    </div>

                    {/* Water */}
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
                        <FaTint className="text-blue-500 text-2xl" />
                        <div>
                            <p className="font-semibold">Watering</p>
                            <p className="text-gray-600 text-sm">{plant.water}</p>
                        </div>
                    </div>

                    {/* Temperature */}
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
                        <FaThermometerHalf className="text-red-400 text-2xl" />
                        <div>
                            <p className="font-semibold">Temperature</p>
                            <p className="text-gray-600 text-sm">{plant.temperature}</p>
                        </div>
                    </div>

                    {/* Soil */}
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
                        <FaLeaf className="text-green-600 text-2xl" />
                        <div>
                            <p className="font-semibold">Soil Type</p>
                            <p className="text-gray-600 text-sm">{plant.soilType}</p>
                        </div>
                    </div>

                    {/* Pet Friendly */}
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
                        <FaPaw className={`text-2xl ${plant.petFriendly ? 'text-green-700' : 'text-gray-400'}`} />
                        <div>
                            <p className="font-semibold">Pet Friendly</p>
                            <p className="text-gray-600 text-sm">
                                {plant.petFriendly ? 'Yes, safe for pets' : 'Not safe for pets'}
                            </p>
                        </div>
                    </div>

                    {/* Origin */}
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
                        <FaCheckCircle className="text-green-500 text-2xl" />
                        <div>
                            <p className="font-semibold">Origin</p>
                            <p className="text-gray-600 text-sm">{plant.origin}</p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                {plant.benefits && (
                    <div className="mt-8">
                        <h4 className="font-semibold text-lg mb-3">Benefits</h4>
                        <ul className="list-disc pl-6 text-gray-700 text-sm">
                            {plant.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Care Tips */}
                <div className="mt-8">
                    <h4 className="font-semibold text-lg mb-2">Care Tips</h4>
                    <p className="text-gray-700 text-sm">{plant.careTips}</p>
                </div>
            </div>

            {/* CONSULTATION FORM */}
            <div className="bg-green-50 flex justify-center items-center py-10">
                <form onSubmit={handleFromSubmit} className="bg-white shadow-xl rounded-2xl p-6 w-[320px] flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-green-700 text-center">
                        Book Consultation
                    </h2>

                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />

                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />

                    <button type="submit" className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700">
                        Book Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PlantsDetails;
