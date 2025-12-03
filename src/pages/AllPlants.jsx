import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from '../components/card/PlantsCard';
import { FaSearch } from 'react-icons/fa';
import LoaderSpinner from '../components/LoaderSpinner';

const AllPlants = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('');
    const [filterApps, setFilterApps] = useState(allData);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!allData) return;
        setLoading(true);
        const timer = setTimeout(() => {
            const filtered = search.trim()
                ? allData.filter(a => a.plantName.toLowerCase().includes(search.trim().toLowerCase()))
                : allData;
            setFilterApps(filtered);
            setLoading(false)
        }, 300);
        return () => clearTimeout(timer);
    }, [search, allData]);


    return (
        <div className='w-11/12 mx-auto py-20'>
            <title>Plants</title>
            <div className='flex flex-col md:flex-row gap-5 items-center mb-8'>
                <h1 className='text-xl font-bold'><span>({allData.length})</span> Plants Found</h1>
                <div className="relative w-60">
                    <FaSearch className='absolute top-2 w-[25px] left-2 z-10' />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Products"
                        className="input input-md w-full pl-8 pr-2 rounded-xl focus:ring-2 focus:ring-[#2ee34c]"
                    />
                </div>
            </div>
            {loading ? (
                <LoaderSpinner></LoaderSpinner>
            ) : (filterApps.length) === 0 ? (
                <div>
                    <h1 className='text-5xl font-bold text-center'>No app found</h1>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                    {
                        filterApps.map(plant => <PlantsCard key={plant.plantId} plant={plant}></PlantsCard>)
                    }
                </div>
            )
            }
        </div>
    );
};

export default AllPlants;