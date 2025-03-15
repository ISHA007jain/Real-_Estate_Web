import LeasePropertyData from "../api/Lease_Properties.json";
import { LeaseCard } from "../components/UI/LeaseCard";

function Lease_prop() {
  return (
    <div className="px-16 py-8">
      {/* Title & Subtitle */}
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-gray-900">Properties</h1>
        <span className="text-gray-400 text-lg font-semibold">For Lease</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {LeasePropertyData.map((data) => (
           <div 
                        key={data.id} 
                        className="transform transition-transform duration-300 hover:scale-105"
                      >
                        <LeaseCard data={data} />
                      </div>
        ))}
      </div>
    </div>
  )
}

export default Lease_prop