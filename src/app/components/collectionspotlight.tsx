import React from 'react';

interface CollectionSpotlightProps {
  onClose: () => void;
}

interface Collections {
  id: number;
  name: string;
  image: string;
  date: string;
  day: string;
  time: string;
  address: string;
  collectionname: string;
}

const collectionsData: Collections[] = [
  {
    id: 1,
    name: "Las Vegas Avaitors",
    image: "/images/img 4.jpeg",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    address: "Las Vegas Ballpark, Las Vegas, Nevda",
    collectionname: "Take Flight Collection",
  },
  {
    id: 2,
    name: "Sacramento Rivers cats",
    image: "/images/img. 5.jpeg",
    day: "SUN",
    date: "OCT 15",
    time: "4:30 PM",
    address: "Shutter Health Park, Sacramento, California ",
    collectionname: "Orange Collection",
  },
  {
    id: 3,
    name: "Las Vegas Avaitors",
    image: "/images/img 4.jpeg",
    day: "SUN",
    date: "OCT 15",
    time: "4:30 PM",
    address: "Las Vegas Ballpark, Las Vegas, Nevda",
    collectionname: "Take Flight Collection",
  },
];

const CollectionSpotlight: React.FC<CollectionSpotlightProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-custom container mx-auto p-4">
      <h2 className="text-6xl text-white font-bold mb-10 text-center ">Collection Spotlight</h2>
      <p className="text-center text-white m-10 p-5">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20">
        {collectionsData.map((collection) => (
          <div key={collection.id} className="bg-custom bg-white-100 p-3 shadow-2xl relative">
            <img src={collection.image} alt={collection.name} className="w-full mb-2 " style={{ maxWidth: "100%", height: "auto" }} />
            <div className='flex justify-between'>
            <span className="bg-gradient-custom absolute left-0 -ml-5 h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full"></span>
            <span className="border-t border-dashed border-gray-400 ml-5 mr-5 mt-5 block w-full h-10"></span>
            <span className="bg-gradient-custom absolute right-0 -mr-5 h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full"></span>
            </div>
            <p className="font-semibold text-white text-center text-xl">{collection.name}</p>
            <div className="flex gap-1 mx-auto p-2 justify-center items-center text-sm text-white" >  
            <div >{collection.date}</div> |
            <div >{collection.day}</div> |
            <div >{collection.time}</div>
            </div>
            <p className='text-center p-4 text-white'>{collection.address}</p>
            <div className='text-center bg-black text-white p-3 m-2'>{collection.collectionname}</div>
            
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CollectionSpotlight;