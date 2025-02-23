
import { useEffect, useState } from "react";
import { useAuth } from "../CustomHook/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";

const ServiceToDo = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/bookedService`);
                const filteredData = data.filter(bookService => bookService.providerEmail === user.email);
                setServices(filteredData);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        if (user?.email) {
            getData();
        }
    }, [user]);

    const updateServiceStatus = async (serviceId, newStatus) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_APP_URL}/bookedService/update/${serviceId}`, { status: newStatus });
            if (response.data.modifiedCount > 0) {
                toast.success("Service status updated successfully");
                // Update the status in the local state
                setServices(prevServices =>
                    prevServices.map(service =>
                        service._id === serviceId ? { ...service, status: newStatus } : service
                    )
                );
            } else {
                toast.error("Failed to update service status");
            }
        } catch (error) {
            console.error("Error updating service status:", error);
            toast.error('Failed to update service status');
        }
    };

    const handleStatusChange = (serviceId, newStatus) => {
        updateServiceStatus(serviceId, newStatus);
    };



    if (!services || services.length === 0) {
        return <p>No services where you are the provider.</p>;
    }

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed in JS
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    return (
        <div className="min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>Radiant Reverie || Service To Do </title>
            </Helmet>
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-blue-400'>Service To Do</h2>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
                        {services.length}
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center text-gray-500">
                                                Service Image
                                            </th>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-center text-gray-500'>
                                                Service Name
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                Booked Service User Name
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                Booked Service User Email
                                            </th>
                                            <th className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                View Details
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center text-gray-500">
                                                Service Provider image
                                            </th>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-center text-gray-500'>
                                                Service Provider Name
                                            </th>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-center text-gray-500'>
                                                Deadline
                                            </th>

                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                Price
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {services.map(service => (
                                            <tr key={service._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                                                    <img className="w-10 h-10 rounded-full" src={service.serviceImage} alt="" />
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                                                    {service.serviceName}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500'>
                                                    {service.userName}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500'>
                                                    {service.userEmail}
                                                </td>
                                                <td className='px-4 py-4'>
                                                    <Link to={`/service/details/${service.serviceId}`} className="text-blue-500">
                                                        View More Details
                                                    </Link>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                                                    <img className="w-10 h-10 rounded-full" src={service.providerPhoto} alt="" />
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                                                    {service.providerName}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500'>
                                                    {formatDate(service.serviceDate)}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500'>
                                                    {service.price}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500'>
                                                    <select
                                                        value={service.status}
                                                        onChange={(e) => handleStatusChange(service._id, e.target.value)}
                                                        className='border p-2 rounded-md'
                                                    >
                                                        <option value='pending'>Pending</option>
                                                        <option value='working'>Working</option>
                                                        <option value='complete'>Complete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceToDo;

