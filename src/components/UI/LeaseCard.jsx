export const LeaseCard = ({ data }) => {
  const { image, title, description, header } = data;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-5 w-[320px] h-[400px] flex flex-col justify-between transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 space-y-2 flex flex-col flex-grow">
        {header && (
          <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {header}
          </h5>
        )}
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};
