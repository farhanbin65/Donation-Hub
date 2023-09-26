const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return[];
}
const saveDonations = id =>{
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonations))
    }
}

export { saveDonations, getStoredDonation }