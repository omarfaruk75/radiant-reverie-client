import { Helmet } from "react-helmet-async";
import BannerText from "../../components/BannerText";
import Caruosel from "../../components/Caruosel";
import About from "./About";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";



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
                    <h2 className="text-2xl">
                        Service Provided
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

        </div>
    );
};

export default Home;