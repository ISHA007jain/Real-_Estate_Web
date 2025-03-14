export const LeaseCard = ({ data }) => {
    const { id, description, image, title, header } = data;
  
    return (
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 w-[320px]">
        {/* Image Section */}
        <div className="w-full h-48 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={id}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Content Section */}
        <div className="mt-5 space-y-2">
          <h5 className="text-sm font-semibold text-gray-500 uppercase">{header}</h5>
  
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
  
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  