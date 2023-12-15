import Landing from "./Landing";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./Context";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div className="">
      <Navbar />
      <Landing />
      {isSidebarOpen && (
        <div className="lg:hidden">
          <Sidebar />
        </div>
      )}
    </div>
  );
};
export default App;
