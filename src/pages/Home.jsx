import React from 'react';
import { Link, useLoaderData } from 'react-router';
import PlantsCard from '../components/card/PlantsCard';
import Marquee from 'react-fast-marquee';
import PlantCareTips from '../components/PlantCareTips';
import Hero from '../components/header/Hero';
import GreenExperts from '../components/GreenExperts';
import EcoDecorIdeas from '../components/EcoDecorIdeas';
import PlantOfTheWeek from '../components/PlantOfTheWeek';

const Home = () => {
    const plantData = useLoaderData();
    const filterData = plantData.filter(plant => plant.rating == 4.9);
    // console.log(filterData)
    return (
        <div className='bg-green-100'>
            <div>
                <Hero></Hero>
            </div>
            <div className='my-12 p-5 w-11/12 mx-auto bg-accent rounded-3xl'>
                <h1 className='text-3xl font-semibold text-center'>Top Rated Indoor Plants</h1>
                {/* <div className='pt-3 md:pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'> */}
                <Marquee pauseOnHover={true} gradient={false} speed={50} className="py-8">
                    <div className="flex px-2 gap-4 md:gap-12">
                        {filterData.map((plant) => (
                            <PlantsCard key={plant.plantId} plant={plant} />
                        ))}
                    </div>
                </Marquee>
                <div className='text-center'>
                    <Link to={'/allPlants'} className='btn bg-green-800 text-accent'>All Plants</Link>
                </div>
                {/* </div> */}
            </div>
            <div>
                <PlantCareTips></PlantCareTips>
            </div>
            <div className='py-12'>
                <GreenExperts></GreenExperts>
            </div>
            <div>
                <EcoDecorIdeas></EcoDecorIdeas>
            </div>
            <div className='py-12'>
                <PlantOfTheWeek></PlantOfTheWeek>
            </div>
        </div>
    );
};

export default Home;