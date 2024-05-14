import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../../CustomHook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const ServiceDetails = () => {
    const service = useLoaderData();
    const [isOpen, setIsOpen] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const { _id, serviceName, price, description, photo } = service;
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(user.location);


    const handleSubmitForm = async event => {
        event.preventDefault();
        const form = event.target
        const serviceId = _id
        const photo = form.photo.value
        const price = parseFloat(form.price.value)
        const email = form.email.value
        const deadline = startDate
        const location = form.area.value
        const provider_email = user?.email
        const provider_name = user?.displayName
        const status = "pending"
        if (email === provider_email) return toast.error('Action Not Permitted')


        const serviceData = {
            serviceId, serviceName, deadline, status, photo, provider_name, email, price, description, provider_email, location
        }
        // console.table(serviceData);
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_URL}/bookedService`, serviceData)
            console.log(data);
            toast.success('Service Booked Successfully')
            navigate('/bookedService')
        } catch (err) {
            console.log(err)
            toast.error('err:message')
        }
    }

    return (
        <div className='bg-[#fdcebc] min-h-[calc(100vh-306px)] pb-12'>
            <Helmet>
                <title>Radiant Reverie | Service Details</title>
            </Helmet>


            {/* Service Details */}
            <div className='  rounded-md  md:min-h-[350px] '>
                <div >
                    <img className="object-center object-cover w-full h-[80vh] " src={photo} alt="avatar" />
                </div>

                <h1 className='mt-12 ps-12 text-2xl font-medium text-gray-800  '>
                    <span className="text-lg"> Service Name</span>: {serviceName}
                </h1>

                <p className='mt-2 px-12 text-sm text-gray-600 '>
                    <span className="font-bold "> Description:</span> {description}
                </p>

                <div className="flex px-12 flex-row justify-between items-center">
                    <p className='mt-6  text-lg  text-gray-600 mb-4'>
                        <span className="font-bold  text-gray-600 "> Price:</span>  {price}
                    </p>
                    <p className='mt-2  text-lg text-gray-600 '>
                        <span className="font-bold text-sm">Service Location:   </span>
                    </p>

                </div>

                <p className='mt-6 px-12 text-sm font-bold text-gray-600 mb-4'>
                    Service Provider Details:
                </p>
                <div className='ps-12 rounded-full object-cover overflow-hidden w-full '>
                    <img className="border-4 h-12 w-12 border-cyan-500 font-bold rounded-full " src={user?.photoURL} alt='' />
                </div>
                <div className=' flex ps-12 flex-row justify-between items-center'>
                    <div>
                        <p className='mt-2 text-sm  text-gray-600 '>    <span className="font-bold">Name:</span> {user?.displayName}.</p>
                        <p className='mt-2 text-sm  text-gray-600 '>
                            <span className="font-bold"> Email: </span> {user?.email}
                        </p>
                    </div>
                    {/* Modals  */}
                    <div className=" pr-12 relative flex justify-center">
                        <button onClick={() => setIsOpen(true)} className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#6e6b58] rounded-md hover:bg-[#a19e8d] focus:outline-none  focus:ring-opacity-80">
                            Book Now
                        </button>

                        {isOpen && (
                            <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                    <div className="relative inline-block w-1/2 p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl  rounded-xl dark:bg-gray-900 sm:my-8  sm:p-6">
                                        <div className="flex flex-row justify-end">
                                            <button onClick={() => setIsOpen(false)} className="px-4  sm:mx-2  py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40  bg-red-300">
                                                Cancel
                                            </button>
                                        </div>
                                        <section className=' p-2 mt-2 md:p-6 mx-auto rounded-md w-full bg-[#eaf1f7] '>
                                            <h2 className='text-lg font-semibold text-gray-700 capitalize text-center '>
                                                Make A Purchase
                                            </h2>

                                            <form onSubmit={handleSubmitForm} className="text-[#6E6B58] ">
                                                <div>
                                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                                        Service Id:
                                                    </label>
                                                    <input
                                                        id='serviceId'
                                                        name='serviceId'
                                                        type='serviceId'
                                                        defaultValue={_id}
                                                        readOnly
                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>
                                                <div>
                                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                                        Service Image:
                                                    </label>
                                                    <input
                                                        id='photo'
                                                        name='photo'
                                                        type='text'
                                                        defaultValue={photo}
                                                        readOnly
                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>
                                                <div>
                                                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                                                        Service Name:
                                                    </label>
                                                    <input
                                                        id='serviceName'
                                                        type='text'
                                                        name='serviceName'
                                                        defaultValue={serviceName}
                                                        readOnly
                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>
                                                <div>
                                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                                        Price:
                                                    </label>
                                                    <input
                                                        id='price'
                                                        name='price'
                                                        type='text'
                                                        readOnly
                                                        defaultValue={price}
                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>


                                                <div>
                                                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                                                        User Name:
                                                    </label>
                                                    <input
                                                        id='name'
                                                        type='text'
                                                        name='name'
                                                        defaultValue={user?.displayName}

                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>
                                                <div className='flex flex-col gap-2 '>
                                                    <label className='text-gray-700'>User Email: </label>
                                                    <input
                                                        id='email'
                                                        type='email'
                                                        defaultValue={user?.email}
                                                        name='email'

                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />

                                                </div>
                                                {/* Date */}
                                                <div className='flex flex-col gap-2 '>
                                                    <label className='text-gray-700'>Service Taking Date</label>

                                                    <DatePicker className=" p-2 w-full  focus:border-blue-400 focus:ring rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                </div>
                                                <div>
                                                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                                                        Location:
                                                    </label>
                                                    <input
                                                        id='area'
                                                        type='text'
                                                        name='area'
                                                        defaultValue={location}


                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>



                                                <div className='  flex flex-row  mt-6'>


                                                    <button className='px-8 py-2.5 w-full text-center  leading-5 text-white font-medium bg-[#6e6b58] transition-colors duration-300 transhtmlForm rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                                        Make A Purchase
                                                    </button>

                                                </div>
                                            </form>
                                        </section>

                                        {/* 
                                        <button onClick={() => setIsOpen(false)} className="px-4 sm:mx-2  py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                            Cancel
                                        </button> */}

                                        {/* <button className="px-8 py-2.5 w-full  leading-5 text-white font-medium bg-[#6e6b58] transition-colors duration-300 transhtmlForm focus:bg-gray-600 sm:mx-2  mt-3 sm:mt-0 text-sm  tracking-wide capitalize  transform  rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                                Confirm
                                            </button> */}

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>




            </div>

        </div >
    );
};

export default ServiceDetails;