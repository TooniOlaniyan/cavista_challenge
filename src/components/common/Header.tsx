import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to='/' className="text-white text-lg font-bold">DEMO Streaming</Link>
      <div className="flex space-x-4">
        <button className="text-white">Log In</button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded">
          Start your free trial
        </button>
      </div>
    </header>
  );
};

export default Header;
