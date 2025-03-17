export const Success = () => {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white">
        <h2 className="text-6xl font-bold text-balck-600">
          We'll Contact You Soon! 🎉
        </h2>
        <p className="text-2xl mt-2">Thank you for reaching out.</p>
        <img src="/thankyou.jpg" alt="success" className="w-[300px] h-[300px] mx-auto mt-4" />
      </div>
    );
  };
  
  export default Success;
  