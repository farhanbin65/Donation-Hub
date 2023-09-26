import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='max-w-5xl mx-auto my-10'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="https://i.ibb.co/yF74LNv/Logo.png" alt="" />
        </div>
        <div className="flex gap-4">
            <Link to="/" className=" focus:text-red-500 focus:underline font-semibold">Home</Link>
            <Link className=" focus:text-red-500 focus:underline font-semibold" to="/donation">Donation</Link>
            <Link className=" focus:text-red-500 focus:underline font-semibold" to="/statistics">Statistics</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
