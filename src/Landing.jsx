import background from "./assets/background.png";
const Landing = () => {
  return (
    <div className=" flex gap-[20rem] justify-center lg:justify-start">
      <img src={background} alt="img" className="hidden lg:block h-[40rem]" />

      <div className="py-[10rem]   ">
        <h1 className="font-bold text-7xl mb-10">Say hello!</h1>
        <p className="w-[22rem] font-semibold text-[1.3rem] mb-10">
          I'd love to hear from you and always welcome any feedback - please
          don't hesitate to het in touch!
        </p>
        <button className="border border-black rounded-3xl px-16 py-[6px] text-lg  font-semibold hover:bg-black hover:text-white duration-500">
          Say hey!
        </button>
      </div>
    </div>
  );
};
export default Landing;
