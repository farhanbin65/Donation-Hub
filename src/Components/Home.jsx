import { useEffect, useState } from "react";
import Donations from "./Donations";
import "../App.css";

const Home = () => {
    const [donations, setDonations] = useState([]);
    
    useEffect(()=>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    },[])
    return (
        <div className="text-center mx-auto mt-20 space-y-10 bg-image bg-no-repeat"> 
            <h1 className="font-bold text-5xl">I GROW BY HELPING PEOPLE IN NEED</h1>
            <div className="flex md:m-[300px]">
                <input type="text" placeholder="Search here..." className="border p-2 w-96  rounded-l-lg" />
                <button className="bg-[#FF444A] font-semibold text-white p-2 px-6 rounded-r-lg">Search</button>
            </div>
           <div className="grid md:grid-cols-4 gap-3 ">  
           {
               donations.map(donation => <Donations key={donation.id} donation={donation}></Donations>)
            }
           </div>
        </div>
    );
};

export default Home;