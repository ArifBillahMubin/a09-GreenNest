import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const PlantsDetails = () => {
    const [plant, setPlant] = useState([]);
    const { id } = useParams();
    const allData = useLoaderData();

    useEffect(() => {
        const findPlant = allData.find(plant => plant.plantId == id);
        setPlant(findPlant);
    }, [allData, id])

    const handleFromSubmit = (e)=>{
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
    }

    return (
        <section className="py-16 bg-green-50 p-4">
            <title>{plant.plantName}</title>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex hover:shadow-2xl">
                {/* --- Left Side Image --- */}
                <div className="md:w-1/2">
                    <img
                        src={plant.image}
                        alt=''
                        className="w-full h-80 md:h-full object-cover"
                    />
                </div>

                {/* --- Right Side Info --- */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-3">{plant.plantName}</h2>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="font-semibold">Category:</span> {plant.category}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                        <span className="font-semibold">Care Level:</span> {plant.careLevel}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-5">{plant.description}</p>

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
                    <p className="text-yellow-500 font-medium flex items-center gap-2"><span className='text-gray-600 font-semibold'>Rating:</span> <FaStar></FaStar> {plant.rating} / 5</p>

                    <p className="text-sm text-gray-500 mb-5">
                        Provided by:
                        <span className="text-green-700 font-semibold">  {plant.providerName}</span>
                    </p>

                    <Link to={'/allPlants'} className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors text-center">
                        All plants
                    </Link>
                </div>
            </div>

            <div className="bg-green-50 flex justify-center items-center py-10">
                <form onSubmit={handleFromSubmit} className="bg-white shadow-xl rounded-2xl p-6 w-[320px] flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-green-700 text-center">
                        Book Consultation
                    </h2>

                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />

                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />

                    <button type="submit" className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 ">
                        Book Now
                    </button>
                </form>
            </div>
        </section >
    );
};

export default PlantsDetails;