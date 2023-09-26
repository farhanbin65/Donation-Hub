import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="m-20 mt-40 text-center space-y-7">
            <p>Click Below</p>
            <Link to="/" className="font-bold text-5xl mx-auto">GO BACK TO HOME</Link>
            <h1 className="text-center  font-extrabold text-7xl"> This page is Unavailable!!!</h1>
        </div>
    );
};

export default Error;