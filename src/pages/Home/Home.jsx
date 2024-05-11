import BannerText from "../../components/BannerText";
import Caruosel from "../../components/Caruosel";
import About from "./About";



const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-2 justify-between items-center ">
                <div className="bg-[#fdcebc]"><BannerText></BannerText></div>
                <div><Caruosel></Caruosel></div>
            </div>
            <div className="my-20 ">
                <About></About>
            </div>
        </div>
    );
};

export default Home;