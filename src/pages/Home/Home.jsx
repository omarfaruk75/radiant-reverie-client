import BannerText from "../../components/BannerText";
import Caruosel from "../../components/Caruosel";



const Home = () => {
    return (
        <div className="grid grid-cols-2 gap-4  justify-between items-center bg-base-200">
            <div><BannerText></BannerText></div>
            <div><Caruosel></Caruosel></div>
        </div>
    );
};

export default Home;