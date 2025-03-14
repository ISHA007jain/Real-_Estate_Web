import LeasePropertyData from "../api/Lease_Properties.json";
import { LeaseCard } from "../components/UI/LeaseCard";


export const Home = () => {
  return (
    <>
    <div className="px-16 py-8">
      {/* Title & Subtitle */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Properties</h2>
        <span className="text-gray-400 text-lg font-semibold">For Lease</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {LeasePropertyData.map((data) => (
          <LeaseCard data={data} key={data.id}/>
        ))}
      </div>
    </div>

    
    </>

  );
};
