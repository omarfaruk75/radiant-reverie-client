import { Helmet } from "react-helmet-async";
import BannerText from "../../components/BannerText";
import Caruosel from "../../components/Caruosel";
import About from "./About";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Review from "../Review/Review";
import Team from "../Team/Team";





const Home = () => {

    //fetching data by usign axios
    const [services, setServices] = useState([]);
    // console.log(services)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_APP_URL}/service`)
            setServices(data);
        }
        getData()
    }, [])
    return (
        <div className=" min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>Radiant Reverie | Home</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center ">
                <div className="bg-[#fdcebc]"><BannerText></BannerText></div>
                <div><Caruosel></Caruosel></div>
            </div>
            <div className="my-20 ">
                <About></About>
            </div>
            <div>
                <div className="text-center space-y-6 mb-6">
                    <h2 className="text-2xl font-semibold">
                        Populer Services
                    </h2>
                    <p className="w-4/5 mx-auto">
                        Our parlour offers a range of professional services including haircuts, styling, coloring, facials, manicures, pedicures, and waxing. We prioritize client satisfaction by providing personalized treatments tailored to individual needs and preferences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between mx-auto my-12 ">

                    {services?.slice(0, 6).map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            </div>
            <div>
                <Review></Review>
            </div>
            <div className=" bg-[#f1e2dc] my-12 py-12 mb-12">
                <p className="text-xl font-medium text-[#6E6B58] text-center  ">Team</p>

                <h1 className="mt-2 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mb-8 dark:text-white">
                    Our Creative Member
                </h1>
                <div className="bg-[#f1e2dc]">
                    <Team></Team>
                </div>
            </div>

        </div>
    );
};

export default Home;