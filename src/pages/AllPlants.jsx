import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from '../components/card/PlantsCard';
import { FaSearch } from 'react-icons/fa';
import LoaderSpinner from '../components/LoaderSpinner';

const AllPlants = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState("All");
    const [filterApps, setFilterApps] = useState(allData);
    const [loading, setLoading] = useState(false);

    // Extract unique categories
    const categories = ["All", ...new Set(allData.map(p => p.category))];

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            let filtered = allData;

            // Category filter
            if (activeCategory !== "All") {
                filtered = filtered.filter(p => p.category === activeCategory);
            }

            // Search filter
            if (search.trim()) {
                filtered = filtered.filter(p =>
                    p.plantName.toLowerCase().includes(search.toLowerCase())
                );
            }

            setFilterApps(filtered);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);

    }, [search, activeCategory, allData]);

    return (
        <div className="w-11/12 mx-auto py-20">
            <title>Plants</title>

            {/* Header + Search */}
            <div className="flex flex-col md:flex-row gap-5 items-center mb-8">
                <h1 className="text-xl font-bold">
                    <span>({filterApps.length})</span> Plants Found
                </h1>

                <div className="relative w-60">
                    <FaSearch className='absolute top-2 w-[25px] left-2 z-10 text-gray-500' />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Plants"
                        className="input input-md w-full pl-10 pr-2 rounded-xl focus:ring-2 focus:ring-[#2ee34c]"
                    />
                </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
                {
                    categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all
                                ${activeCategory === cat
                                    ? "bg-green-600 text-white border-green-600"
                                    : "bg-white border-gray-300 text-gray-700 hover:bg-green-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))
                }
            </div>

            {/* Content Section */}
            {loading ? (
                <LoaderSpinner />
            ) : filterApps.length === 0 ? (
                <h1 className="text-5xl font-bold text-center text-gray-400">
                    No plant found
                </h1>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {filterApps.map(plant => (
                        <PlantsCard key={plant.plantId} plant={plant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllPlants;
