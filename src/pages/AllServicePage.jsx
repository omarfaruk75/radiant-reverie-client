
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllServicePage = () => {
    const serviceDetail = useLoaderData();
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('');

    // Fetch services based on the search term
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/service`, {
                    params: { search }
                });
                console.log(data);
                setServices(data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        getData();
    }, [search]);

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value.trim();
        setSearch(text);
    };

    return (
        <div className="min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>Radiant Reverie || All Services</title>
            </Helmet>
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-blue-400'>Posted Service</h2>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
                        {services?.length}
                    </span>
                </div>

                <form onSubmit={handleSearch} className="input input-bordered flex w-1/2 justify-center items-center ">
                    <input type="text" name="search" className="grow" placeholder="Search Your Service " />
                    <button type="submit" className=" bg-[#333333] p-3  text-white ">Search</button>
                </form>

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
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                Service Description
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
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Service Area</span>
                                                </div>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Price</span>
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {services.map(bookService => (
                                            <tr key={bookService._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={bookService.photo} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{bookService.serviceName}</h2>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {bookService.description.substring(0, 100)}..
                                                </td>
                                                <td className='px-4 py-4 whitespace-nowrap'>
                                                    <button className="px-2 py-2 text-sm font-medium text-gray-600 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                                                        <Link to={`/service/details/${bookService._id}`} className="text-blue-500">View More Details</Link>
                                                    </button>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={bookService.provider.photo} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{bookService.provider.name}</h2>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <p className='px-3 py-1 rounded-full text-blue-500 text-sm'>{bookService.serviceArea}</p>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {bookService.price}
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

export default AllServicePage;
