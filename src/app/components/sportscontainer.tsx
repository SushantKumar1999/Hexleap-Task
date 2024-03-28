'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const CollectionSpotlight = dynamic(() => import('./collectionspotlight'), { ssr: false });

interface SportsPlayer {
  id: number;
  name: string;
  image: string;
  totalEvents: number;
  sports: string;
}

const players: SportsPlayer[] = [
  { id: 1, name: "Sacramento Rivers cats", image: "/images/img1.jpeg",  totalEvents: 48, sports: "Baseball"},
  { id: 2, name: "Las Vegas Avaitors", image: "/images/img 2.jpeg", totalEvents: 28, sports: "Baseball"},
  { id: 3, name: "New Jersy Devils", image: "/images/img6.jpeg", totalEvents: 15, sports: "Ice Hockey"},
  { id: 4, name: "Las Vegas Avaitors", image: "/images/img 2.jpeg", totalEvents: 28, sports: "Baseball"},
];

const SportsContainer: React.FC = () => {
    const [showCollectionSpotlight, setShowCollectionSpotlight] = useState(false);

    const handleSeeMoreClick = () => {
      setShowCollectionSpotlight(true);
    };
  
    const handleClose = () => {
      setShowCollectionSpotlight(false);
    };
  return (
    <div className="container mx-auto p-4 ">
      <div className="text-2xl text-white font-bold mb-4">Sports</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Your cards go here */}
        {players.map((player) => (
          <div key={player.id} className="bg-custom p-3 rounded-lg shadow-2xl">
            <img src={player.image} alt={player.name} className="w-full mb-2 " style={{ width: "1080px", height: "400px" }}/>
            <p className='text-white'>{player.name}</p>
            <div className='bg-custom-1 flex justify-between mt-2 text-sm flex p-3'>
            <div className="flex justify-between mt-2 text-sm flex-col">
                <span className="text-white">Total Events</span>
                <span className="font-bold text-white">{`${player.totalEvents} Events`}</span>
            </div>
            <div className="flex justify-between mt-2 text-sm flex-col">
                <span className="text-white">Sports</span>
                <span className="font-bold text-white">{player.sports}</span>
            </div>
            </div>
          </div>
        ))}
        <div className='bg-white-100 p-3 shadow-2xl relative'>
            <img src="/images/img 3.jpeg" alt="advertisement"></img>
            <div className="absolute top-1 right-1 bg-black text-white px-2 py-1 m-2">AD</div>
            <h2 className='text-xl text-white mt-10 font-semibold p-1'> Advertisement title</h2>
            <p className='mt-2 text-sm text-white p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et eligendi saepe illum consequatur! Suscipit iste sapiente corrupti. Sunt eos dolores cupiditate delectus repudiandae facere illum mollitia obcaecati laboriosam esse?</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-10 mb-20" onClick={handleSeeMoreClick}>See More</button>
      </div>
      {showCollectionSpotlight && <CollectionSpotlight onClose={handleClose} />}
    </div>
  );
};

export default SportsContainer;
