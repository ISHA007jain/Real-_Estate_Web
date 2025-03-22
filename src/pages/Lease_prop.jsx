import { useState } from "react";
import LeasePropertyData from "../api/Lease_Properties.json";
import { LeaseCard } from "../components/UI/LeaseCard";

function Lease_prop() {
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="px-16 py-8">
      {/* Title & Subtitle */}
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-gray-900">Properties</h1>
        <span className="text-gray-400 text-lg font-semibold">For Lease</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {LeasePropertyData.slice(0, visible).map((data) => (
          <div 
            key={data.id} 
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <LeaseCard data={data} />
          </div>
        ))}
      </div>

      {visible < LeasePropertyData.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={showMoreItems}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Lease_prop;
