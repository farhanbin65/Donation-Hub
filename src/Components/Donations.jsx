import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const Donations = ({donation}) => {
  const {title, image, name, backgroundColor, textColor, id} = donation;
  return (
    <Link to={`/donation/${id}`}>
      <div style={{background:backgroundColor}} className={"card shadow-xl mt-10"}>
        <figure><img src={image}/></figure>
        <div className="p-4 text-left">
          <p style={{textColor:textColor}}>{name}</p>
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Donations;
