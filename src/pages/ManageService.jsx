import { useEffect, useState } from "react";
import { useAuth } from "../CustomHook/useAuth";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const ManageService = () => {

    const { user } = useAuth();
    const [bookServices, setBookServices] = useState([]);

    useEffect(() => {
        seviceBooked()
    }, [user])

    //for fully delete from ui
    const seviceBooked = async () => {
        const { data } = await axios(`${import.meta.env.VITE_APP_URL}/services/${user?.email}`)
        setBookServices(data)
    }

    const handleDelete = async id => {
        try {
            await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to get the service",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`${import.meta.env.VITE_APP_URL}/service/${id}`);
                    toast.success("Delete Successful");
                    seviceBooked();
                }
            });
        } catch (error) {
            console.error("Error deleting service:", error);
            toast.error("Error deleting service");
        }
    };


    return (
        <div className=" min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>Radiant Reverie || Manage Services </title>
            </Helmet>
            <section className='container px-4 mx-auto pt-12 mb-6'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-blue-400   '> Manage Service</h2>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-gray-100 rounded-full '>
                        {bookServices.length}
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Service Image </span>
                                                </div>
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Service Name</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                Service Description
                                            </th>



                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Service Area</span>
                                                </div>
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Price</span>
                                                </button>
                                            </th>
                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Edit
                                            </th>
                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Delete
                                            </th>



                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            bookServices.map(bookService => <tr key={bookService._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={bookService.photo} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <h2 className="font-medium text-gray-800 dark:text-white ">{bookService.serviceName}</h2>
                                                    </div>
                                                </td>
                                                <td
                                                    title=''
                                                    className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {bookService.description.substring(0, 40)}..
                                                </td>



                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <p
                                                            className='px-3 py-1 rounded-full text-blue-500 text-sm '>
                                                            {bookService.location}
                                                        </p>
                                                    </div>
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {bookService.price}
                                                </td>
                                                <td className='px-4 py-4 text-3xl text-gray-500  whitespace-nowrap'>
                                                    <Link to={`/updateService/${bookService._id}`}> {
                                                        <FaRegEdit />
                                                    }</Link>
                                                </td>
                                                <td className='px-4 py-4 text-3xl text-gray-500  whitespace-nowrap'>
                                                    {
                                                        <MdDelete onClick={() => handleDelete(bookService._id)} />
                                                    }
                                                </td>



                                            </tr>)
                                        }
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

export default ManageService;