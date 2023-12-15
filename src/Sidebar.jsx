import { useGlobalContext } from "./Context";
import { Cross, Ball, Mail } from "./Icons";

const Sidebar = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <aside className="absolute top-0 h-full w-[20rem] bg-black duration-500 ">
      <button
        className="ml-[85%] pt-5 "
        onClick={() => setIsSidebarOpen(false)}
      >
        <Cross />
      </button>
      <article className="my-28">
        <div className="flex flex-col w-full ">
          <button className="h-16 text-2xl font-medium text-white capitalize duration-300 hover:text-gray-400">
            portfolio
          </button>
          <button className="h-16 text-2xl font-medium text-white capitalize duration-300 hover:text-gray-400">
            blog
          </button>
          <button className="h-16 text-2xl font-medium text-gray-400 capitalize duration-300 ">
            about
          </button>
        </div>

        <div className="flex justify-center gap-8 mt-28">
          <Ball />
          <Mail />
        </div>
      </article>
    </aside>
  );
};
export default Sidebar;
