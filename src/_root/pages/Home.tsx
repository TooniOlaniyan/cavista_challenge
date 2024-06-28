import { homePageData } from "../../constants";
import HomePageCard from "../../components/HomePageCard";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl mb-6 md:py-8 md:px-20 px-5 py-5 text-white w-full bg-gray-800">
        Popular Titles
      </h2>
      <div className="flex space-x-8 py-8 px-5 md:px-20">
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
