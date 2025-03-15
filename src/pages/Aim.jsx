export const Aim = () => {
      return (
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen px-10 py-10 gap-10">
          {/* Left Section (Heading) */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl font-semibold text-black leading-tight">
              We'll help you make <br /> the right decisions.
            </h1>
          </div>
    
          {/* Center Section (Image with Hover Effect) */}
          <div className="lg:w-1/3 flex justify-center">
            <img
              src="/ami_jsx.jpg"
              alt="aim photo"
              className="w-[300px] lg:w-[350px] h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
    
          {/* Right Section (Content) */}
          <div className="lg:w-1/3 space-y-4 text-gray-600 text-center lg:text-left">
            <p>We have the expertise and experience to get you the best deals.</p>
            <p>We stay in constant communication every step of the way.</p>
            <p>We stay updated with industry news, trends, and technology.</p>
            <p>We provide personalized services to our clients.</p>
          </div>
        </div>
      );
    };
    