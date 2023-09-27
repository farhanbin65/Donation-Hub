/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-const-assign */
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../Utility/localStorage';
import { PieChart, Pie,Legend, Tooltip} from 'recharts';


const Statistics = () => {
    const donatedData = getStoredDonation();
    const donateDataLength = donatedData.length;

    const allDonations = useLoaderData();
    const allDonationsLength = allDonations.length;

    
    const percentage1 = (donateDataLength/allDonationsLength)*100;
    const percentage2 = (100 - percentage1);

    const p1 = Math.round(percentage1);
    const p2 = Math.round(percentage2);
    
    const data01 = [
        { name: 'Total Donation', value: p1, fill:'#0088FE',},
        { name: 'Your Donation', value: p2, fill:'#00C49F',},
      ];
  
    // console.log(donateDataLength, allDonationsLength);
    console.log(p1, p2);
    return (
         <div>
            <PieChart width={600} height={600}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
           label
          />
          <Legend></Legend>
          <Tooltip />
        </PieChart>
        </div>

    );
};

export default Statistics;