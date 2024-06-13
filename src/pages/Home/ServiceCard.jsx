import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png"
import PropTypes from 'prop-types';


const ServiceCard = ({ service }) => {
    const { _id, photo, serviceName, price, description, provider } = service;
    return (
        <div >
            <div className="w-full p-2  overflow-hidden bg-[#fcf4f1]  rounded-lg shadow-sm drop-shadow shadow-[#fdcebc] dark:bg-gray-800">
                <img className="object-cover object-center w-full h-60" src={photo} alt="avatar" />

                <div className="flex flex-row justify-between items-center px-6 py-3 bg-[#fff7f4]">
                    <div className="flex flex-row justify-start items-center">
                        <img className="w-6 h-6" src={logo} alt="" />

                        <h1 className="mx-3  text-[#222222]"><span className="text-lg  ">Service Name : </span><span className="text-xl font-medium">{serviceName}</span></h1>
                    </div>

                </div>

                <div className="px-6 py-2">


                    <p title={description} className="py-2 text-gray-700 dark:text-gray-400 text-center">
                        <span className="font-bold">Description</span>
                        <p className="text-light">{description.substring(0, 100)}...</p>

                        <Link to={`/service/details/${_id}`} className="text-blue-500">View More Details</Link></p>

                    <h1 className="px-2 text-lg text-center ">Service Price: ${price}</h1>
                    <div className="flex flex-col items-center mt-2 mb-3 ">
                        <img className="rounded-full w-12 h-12 border-2 border-cyan-400" src={provider?.photo} alt="" />

                        <p className="text-base  text-gray-800 dark:text-white">{provider?.name}</p>
                    </div>



                    <Link to={"/allServices"} className="flex flex-row justify-center items-center"><button className="btn bg-[#333333] text-white px-14 py-1 ">Show All</button></Link>

                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;