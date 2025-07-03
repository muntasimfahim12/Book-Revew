import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-[800px] flex items-center rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-6 lg:px-12 gap-16">
        <img
          src="https://i.ibb.co/3mMbSCV1/pngwing-1.png"
          alt="User Illustration"
          className="max-w-[500px] h-[400px] rounded-2xl shadow-2xl"
        />
        <div className="max-w-xl mt-10 lg:mt-0 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Books to freshen up your bookshelf
          </h1>
          <button
            onClick={() => navigate("/listed")}
            className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
