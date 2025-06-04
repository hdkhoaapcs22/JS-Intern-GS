import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Search Score", path: "/searchscore" },
    { name: "Report", path: "/report" },
    { name: "Setting", path: "/setting" },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex px-9 mt-6 mb-8"></div>
      <div className="px-6">
        <h2 className="text-2xl font-bold px-3 mb-4">Main Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center space-x-3 px-3 py-4 rounded-md cursor-pointer 
                                    ${
                                      location.pathname === item.path
                                        ? "text-black text-xl font-bold"
                                        : "text-black text-lg font-semibold"
                                    }`}
              onClick={() => navigate(item.path)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
