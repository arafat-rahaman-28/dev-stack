import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="md:container md:mx-auto md:flex md:justify-between md:items-center">
      <div className="left-content">
        <h1 className="md:mt-0 md:text-5xl md:w-[500px] md:text-left font-bold mt-8 mb-0 text-4xl text-center">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="md:w-[450px] md:ml-0 md:text-[16px] md:text-left text-center text-[#4B5563] text-[12px] w-[286px] mx-auto mt-4">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="hero-buttons flex gap-2 mt-6 mb-0 md:justify-start justify-center">
          <button className="brand-gradient py-2 font-semibold md:text-[16px] md:w-[220px] md:px-7 md:font-medium md:py-2 text-[12px] px-6 rounded-md text-white w-[168px]">
            Explore Technologies
          </button>

          <button className="md:text-[16px] md:w-[220px] md:px-7 md:font-medium md:py-2 py-2 font-semibold text-[12px] px-6 rounded-md text-[#4B5563] border border-[#4B5563] w-[168px]">
            Learn More
          </button>
        </div>
      </div>

      <div className="right-image md:mt-0 -mt-[48px]">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Hero;
