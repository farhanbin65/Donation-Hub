import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/localStorage";


const Donation = () => {
    const donations = useLoaderData();

    const [donationReceived, setDonationReceived] = useState([]);

    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if(donations.length>0){
            const receivedDonation = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation=> donation.id === id);
                if(donation){
                    receivedDonation.push(donation);
                }
            }
            setDonationReceived(receivedDonation);
            // console.log(donations, storedDonationIds, receivedDonation)
        }
    },[])
    
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                donationReceived.map(gotDonation =>
                    <div  key={gotDonation.id}>
                        <div className="flex my-4 rounded-lg" style={{background:gotDonation.textColor}}>
                        <div ><img  className="h-44" src={gotDonation.image} alt="" /></div>
                        <div className="p-2">
                            <h2>{gotDonation.name}</h2>
                            <p className="text-2xl font-semibold">{gotDonation.title}</p>
                            <p className="text-base font-semibold">${gotDonation.price}.00</p>
                            <Link to={`/donation/${gotDonation.id}`}><button className="btn btn-primary px-4 p-1" >Details</button></Link>
                        </div>
                        </div>
                    </div>
                    )
            }
        
        </div>
    );
};

export default Donation;