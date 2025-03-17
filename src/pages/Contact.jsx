import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/success");
        },3000);
    };

    return (
      <div className="w-full h-screen flex justify-between items-center px-16">
        {/* Left Section */}
        <div className="w-1/3 h-screen p-16">
          <h1 className="text-black text-6xl font-bold whitespace-nowrap">CONTACT US</h1>
          <p className="mt-8 text-2xl font-semibold ">
            📍 <strong>Main Office</strong>
            <br /> 123 Anywhere St., Any City, ST 12345
          </p>
          <p className="mt-4 text-xl">
            📞 <strong>Tel:</strong> (123) 456-7890 <br />
            📧 <strong>Email:</strong> hello@reallygreatsite.com <br />
            🔗 <strong>Social:</strong> @reallygreatsite
          </p>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="w-1/2 p-16">
          {/* Contact Options */}
          <div className="flex space-x-4">
            <button className="w-1/2 py-3 bg-black text-white font-semibold rounded-lg">
              Via Support Chat
            </button>
            <button className="w-1/2 py-3 bg-black text-white font-semibold rounded-lg">
              Via Call
            </button>
          </div>

          {/* Large Mail Button */}
          <button className="w-full py-4 mt-4 bg-white text-black font-semibold border-2 border-black rounded-lg">
            Via Mail
          </button>

          {/* Contact Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-black rounded-lg bg-white text-black"
              required 
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-black rounded-lg bg-white text-black"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-black rounded-lg bg-white text-black"
              required
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg 
              hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Contact;
