import { useGlobalContext } from "./Context";
import { Bars, Ball, Mail } from "./Icons";
const Navbar = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <nav className=" h-20 flex md:pl-[30%] items-center lg:pl-[50%]">
      <button className=" md:hidden" onClick={() => setIsSidebarOpen(true)}>
        <Bars />
      </button>
      <article className="justify-between hidden w-full md:flex">
        <div className="">
          <button className="mr-10 font-medium text-gray-400 capitalize duration-300 hover:text-black">
            portfolio
          </button>
          <button className="mr-10 font-medium text-gray-400 capitalize duration-300 hover:text-black">
            blog
          </button>
          <button className="mr-10 font-medium text-black capitalize duration-300 hover:text-black">
            about
          </button>
        </div>

        <div className="flex justify-between gap-4 mr-24 ">
          <Ball />
          <Mail />
        </div>
      </article>
    </nav>
  );
};
export default Navbar;
