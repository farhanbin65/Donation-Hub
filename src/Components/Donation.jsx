import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/localStorage";

const Donation = () => {
    const donations = useLoaderData();

    const [donationReceived, setDonationReceived] = useState([]);

    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if(donations.length>0){
            const receievedDonation = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation=> donation.id === id);
                if(donation){
                    receievedDonation.push(donation);
                }
            }
            setDonationReceived(receievedDonation);
            // console.log(donations, storedDonationIds, receievedDonation)
        }
    },[])
    return (
        <div>
            <h1>Allah will bless you: {donationReceived.length}</h1>
        </div>
    );
};

export default Donation;