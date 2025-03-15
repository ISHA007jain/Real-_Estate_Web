import SalePropertyData from "../api/Sale_Properties_Details.json";
import { Salecard } from "../components/UI/Salecard";

function Lease_prop() {
  return (
    <div className="px-16 py-8 w-full h-screen flex flex-col justify-center items-center">
      {/* Title & Subtitle */}
      <div className="flex justify-between items-center gap-[66vw] p-8">
        <h2 className="text-5xl font-bold text-gray-900">Properties</h2>
        <span className="text-gray-400 text-lg font-semibold">For Sale</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[4vw] ">
        {SalePropertyData.map((data) => (
          <Salecard data={data} key={data.id}/>
        ))}
      </div>
    </div>
  )
}

export default Lease_prop