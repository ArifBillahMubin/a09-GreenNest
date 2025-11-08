import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantsCard = ({ plant }) => {
    const { image, plantName, price, rating, plantId } = plant;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)){
            stars.push(<FaStar key={i} className="text-yellow-500" />)
        } else if (i - rating < 1){
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />)
        }
        else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
    // console.log(stars)

    return (
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl hover:scale-105 ease-in-out transition duration-300">
            <figure>
                <img
                    src={image}
                    alt={plantName}
                    className="h-28 md:38 lg:h-48 w-full object-cover rounded-t-xl"
                />
            </figure>
            <div className="card-body p-2 md:p-4 lg:p-6">
                <h2 className="card-title md:text-2xl text-green-800 font-semibold">{plantName}</h2>
                <div className='flex justify-between'>
                    
                    <div className="flex items-center">
                        {stars}
                        <span className="ml-2 text-sm text-gray-600">{rating}</span>
                    </div>
                    <div className="text-gray-700 text-xl font-semibold">${price}</div>

                    
                </div>

                <div className="card-actions justify-end mt-3">
                    <Link to={`/plantsDetail/${plantId}`} className="btn btn-sm bg-green-600 text-white hover:bg-green-900">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantsCard;
