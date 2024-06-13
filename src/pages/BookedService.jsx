// import { useEffect, useState } from "react";
// import { useAuth } from "../CustomHook/useAuth";
// import axios from "axios";
// import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";


// const BookedService = () => {
//     const { user } = useAuth();
//     const [bookServices, setBookServices] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     console.log(bookServices);


//     useEffect(() => {
//         const fetchBookedServices = async () => {
//             try {
//                 const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/bookedServices/${user?.email}`);
//                 setBookServices(data);
//             } catch (error) {
//                 console.error("Error fetching booked services:", error);
//                 toast.error('Failed to fetch booked services');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (user?.email) {
//             fetchBookedServices();
//         }

//     }, [user]);

//     if (isLoading) return <p>Loading...</p>;
//     if (!bookServices) return toast.error('There is no servie')
//     return (
//         <div className=" min-h-[calc(100vh-306px)]">
//             <Helmet>
//                 <title>Radiant Reverie || Booked Services </title>
//             </Helmet>
//             <section className='container px-4 mx-auto pt-12'>
//                 <div className='flex items-center gap-x-3'>
//                     <h2 className='text-lg font-medium text-blue-400  '> Booked Service</h2>
//                     <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
//                         {bookServices.length}
//                     </span>
//                 </div>

//                 <div className='flex flex-col mt-6'>
//                     <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
//                         <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
//                             <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
//                                 <table className='min-w-full divide-y divide-gray-200'>
//                                     <thead className='bg-gray-50'>
//                                         <tr>
//                                             <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
//                                                 <div className="flex items-center gap-x-3">
//                                                     <span>Service Image </span>
//                                                 </div>
//                                             </th>
//                                             <th
//                                                 scope='col'
//                                                 className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 <div className='flex items-center gap-x-3'>
//                                                     <span>Service Name</span>
//                                                 </div>
//                                             </th>

//                                             <th
//                                                 scope='col'
//                                                 className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 Service Description
//                                             </th>
//                                             <th className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 View Details
//                                             </th>
//                                             <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
//                                                 <div className="flex items-center gap-x-3">
//                                                     <span>Service Provider</span>
//                                                 </div>
//                                             </th>
//                                             <th
//                                                 scope='col'
//                                                 className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 <div className='flex items-center gap-x-3'>Service Provider Name
//                                                 </div>
//                                             </th>

//                                             <th
//                                                 scope='col'
//                                                 className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 <div className='flex items-center gap-x-3'>
//                                                     <span>Service Area</span>
//                                                 </div>
//                                             </th>
//                                             <th
//                                                 scope='col'
//                                                 className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 <button className='flex items-center gap-x-2'>
//                                                     <span>Price</span>
//                                                 </button>
//                                             </th>
//                                             <th
//                                                 scope='col'
//                                                 className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
//                                                 <button className='flex items-center gap-x-2'>
//                                                     <span>Status</span>
//                                                 </button>
//                                             </th>



//                                         </tr>
//                                     </thead>
//                                     <tbody className='bg-white divide-y divide-gray-200 '>
//                                         {
//                                             bookServices.map(bookService => <tr key={bookService._id}>
//                                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                                     <div className="flex items-center gap-x-2">
//                                                         <img className="object-cover w-10 h-10 rounded-full" src={bookService.serviceImage} alt="" />
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                                     <div className="flex items-center gap-x-2">
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">{bookService.serviceName}</h2>
//                                                     </div>
//                                                 </td>
//                                                 <td
//                                                     title=''
//                                                     className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
//                                                     {bookService.description?.substring(0, 20)}..
//                                                 </td>
//                                                 <td className='px-4 py-4  whitespace-nowrap'>
//                                                     <span className="px-2 py-2 text-sm font-medium text-gray-600   sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
//                                                         <Link to={`/service/details/${bookService.serviceId}`} className="text-blue-500">View More Details</Link>
//                                                     </span>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                                     <div className="flex items-center gap-x-2">
//                                                         <img className="object-cover w-10 h-10 rounded-full" src={bookService.providerImage} alt="" />
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                                     <div className="flex items-center gap-x-2">
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">{bookService.providerName}</h2>
//                                                     </div>
//                                                 </td>


//                                                 <td className='px-4 py-4 text-sm whitespace-nowrap'>
//                                                     <div className='flex items-center gap-x-2'>
//                                                         <p
//                                                             className='px-3 py-1 rounded-full text-blue-500 text-sm '>
//                                                             {bookService.location}
//                                                         </p>
//                                                     </div>
//                                                 </td>

//                                                 <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
//                                                     {bookService.price}
//                                                 </td>

//                                                 <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
//                                                     {bookService.status}
//                                                 </td>


//                                             </tr>)
//                                         }
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default BookedService;


import { useEffect, useState } from "react";
import { useAuth } from "../CustomHook/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const BookedService = () => {
    const { user } = useAuth();
    const [bookServices, setBookServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBookedServices = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/bookedServicesByProvider/${user?.email}`);
                setBookServices(data);
            } catch (error) {
                console.error("Error fetching booked services:", error);
                toast.error('Failed to fetch booked services');
            } finally {
                setIsLoading(false);
            }
        };

        if (user?.email) {
            fetchBookedServices();
        }

    }, [user]);

    if (isLoading) return <LoadingSpinner />;
    if (!bookServices || bookServices.length === 0) {
        return <p>No services where you are the provider.</p>;
    }

    return (
        <div className="min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>Radiant Reverie || Booked Services </title>
            </Helmet>
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-blue-400'>Booked Service</h2>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
                        {bookServices.length}
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Service Image</span>
                                                </div>
                                            </th>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Service Name</span>
                                                </div>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                Booked Service User Name
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center text-gray-500'>
                                                Booked Service User Email
                                            </th>
                                            <th className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                View Details
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Service Provider</span>
                                                </div>
                                            </th>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>Service Provider Name</div>
                                            </th>

                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Price</span>
                                                </button>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Status</span>
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {bookServices.map(bookService => (
                                            <tr key={bookService._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={bookService.serviceImage} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{bookService.serviceName}</h2>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500 wrap whitespace-nowrap'>
                                                    {bookService.userName}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500 wrap whitespace-nowrap'>
                                                    {bookService.userEmail}
                                                </td>
                                                <td className='px-4 py-4 whitespace-nowrap'>
                                                    <Link to={`/service/details/${bookService.serviceId}`} className="px-2 py-2 text-sm font-medium text-gray-600 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                                                        View More Details
                                                    </Link>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={bookService.providerPhoto} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{bookService.providerName}</h2>
                                                    </div>
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {bookService.price}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {bookService.status}
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

export default BookedService;
