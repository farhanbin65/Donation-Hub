import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonations } from "../Utility/localStorage";

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);
    const {image, title, description, price} = detail;
    const handleDonate =() =>{
        saveDonations(idInt);
        toast('You Have Donated Successfully')
    }
    // console.log()
    return (
        <div>
            <div className="static">
                <img className="w-full static" src={image} alt="" />
                <div className="bg-black">
                    <Link><button onClick={handleDonate} className="btn btn-primary font-bold border-none absolute md:top-[720px] top-[490px] left-12 md:left-48">Donate ${price}</button></Link>
                </div>
            </div>
            <div className="space-y-4 my-10">
                <h2 className="font-bold text-4xl">{title}</h2>
                <p className="text-[#b6a9a9] font-normal text-base">{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;