
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../CustomHook/useAuth";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateService = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, serviceName, price, description, photo, provider, serviceArea } = service;
    // const { email: providerEmail, name: providerName, photo: providerPhoto } = provider;
    const { user } = useAuth();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmitForm = async event => {
        event.preventDefault();
        const form = event.target
        const photo = form.photo.value
        const serviceName = form.serviceName.value
        const price = parseFloat(form.price.value)
        const description = form.description.value
        const deadline = startDate
        const serviceArea = form.serviceArea.value
        const serviceProviderData = {
            photo, serviceName, price, description, serviceArea, deadline,
        }

        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_APP_URL}/service/${_id}`, serviceProviderData
            )
            console.log(data)
            toast.success('Service Data Updated Successfully')
            navigate('/manageService')
        } catch (err) {
            console.log(err.message)
            toast.error(err.message)

        }
    }

    return (
        <div className='bg-[#eaf1f7] min-h-[calc(100vh-306px)]  pb-12'>
            <Helmet>
                <title>Radiant Reverie | Service Details</title>
            </Helmet>


            {/* Service Details */}
            <h2 className="text-center font-bold text-[#6E6B58]  py-6 text-2xl ">Update The Service Data</h2>

            <div>
                <form onSubmit={handleSubmitForm} className="text-[#6E6B58] space-y-4 w-3/5 mx-auto ">
                    <div>
                        <label className='text-gray-700 ' htmlFor='job_title'>
                            Service Id:
                        </label>
                        <input
                            id='serviceId'
                            name='serviceId'
                            type='serviceId'
                            defaultValue={_id}

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

                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>
                    <div >
                        <label className='text-gray-700 ' htmlFor='description'>
                            Service Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            defaultValue={description}
                            id='description'
                        ></textarea>
                    </div>
                    <div>
                        <label className='text-gray-700 ' htmlFor='job_title'>
                            Price:
                        </label>
                        <input
                            id='price'
                            name='price'
                            type='text'
                            defaultValue={price}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>


                    <div>
                        <label className='text-gray-700 ' htmlFor='emailAddress'>
                            Service Provider Name:
                        </label>
                        <input
                            id='name'
                            type='text'
                            name='name'
                            defaultValue={provider.name}

                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700'>Provider Email: </label>
                        <input
                            id='email'
                            type='email'
                            defaultValue={provider.email}
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
                            Service Area:
                        </label>
                        <input
                            id='serviceArea'
                            type='text'
                            name='serviceArea'
                            defaultValue={serviceArea}


                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>



                    <div className='  flex flex-row  mt-6'>


                        <button className='px-8 py-2.5 w-full text-center  leading-5 text-white font-medium bg-[#6e6b58] transition-colors duration-300 transhtmlForm rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Update Your Service
                        </button>

                    </div>
                </form>
            </div>



        </div>





    );
};

export default UpdateService;