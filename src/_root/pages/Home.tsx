import { homePageData } from "../../constants";
import HomePageCard from "../../components/HomePageCard";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl mb-6 py-8 px-20 text-white w-full bg-gray-800">
        Popular Titles
      </h2>
      <div className="flex space-x-8 py-8 px-20">
        {homePageData.map((item) => (
          <HomePageCard
            key={item.id}
            type={item.type}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
