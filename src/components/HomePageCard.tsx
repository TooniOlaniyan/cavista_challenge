import { Link } from "react-router-dom";
import { IHomeCard } from "../types";

const HomePageCard = ({ type, description, image }: IHomeCard) => {
  return (
    <div className="flex flex-col gap-6">
      <Link
        to={`/${type}`}
        className="flex flex-col items-center justify-center  bg-gray-900 p-6 h-[15rem] w-40 opacity-90 relative"
      >
        <img
          src={image}
          alt={type}
          className=" absolute top-0 h-full w-full object-contain"
        />
        <h3 className="text-2xl uppercase text-white">{type}</h3>
      </Link>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePageCard;
