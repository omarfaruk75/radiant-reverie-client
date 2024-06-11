import { Helmet } from "react-helmet-async";
import { useAuth } from "../../CustomHook/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";



const AddService = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmitForm = async event => {
        event.preventDefault();
        const form = event.target
        const photo = form.photo.value
        const serviceName = form.serviceName.value
        const deadline = startDate
        const price = parseFloat(form.price.value)
        const description = form.description.value
        const email = form.email.value
        const serviceArea = form.serviceArea.value
        const serviceProviderData = {
            photo, serviceName, price, description, serviceArea, deadline,
            provider: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }

        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_URL}/postService`, serviceProviderData)
            console.log(data);
            toast.success('Service Posted Successfully')
            navigate('/manageService')
        } catch (err) {
            console.log(err)
            toast.error('err:message')
        }
    }




    return (

        <section className=' p-2 md:p-6 rounded-md  bg-[#eaf1f7] w-1/2 mx-auto '>
            <Helmet>
                <title>Radiant Reverie | Post Service</title>
            </Helmet>
            <h2 className='text-lg font-semibold text-gray-700 capitalize text-center '>
                Post a Service
            </h2>

            <form onSubmit={handleSubmitForm} className="text-[#6E6B58] ">
                <div>
                    <label className='text-gray-700 ' htmlFor='job_title'>
                        Service Image:
                    </label>
                    <input
                        id='photo'
                        name='photo'
                        type='text'
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
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    />
                </div>
                <div className='flex flex-col gap-2 '>
                    {/* Date */}
                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700'>Service Taking Date</label>

                        <DatePicker className=" p-2 w-full  focus:border-blue-400 focus:ring rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className='flex flex-col gap-2 '>
                    <label className='text-gray-700'>Price: </label>
                    <input
                        id='price'
                        type='text'
                        name='price'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    />

                </div>
                <div className='flex flex-col gap-2 '>
                    <label className='text-gray-700'>Service Area: </label>
                    <input
                        id='serviceArea'
                        type='text'
                        name='serviceArea'
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
                        id='description'
                    ></textarea>
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


                <div className='  flex flex-row  mt-6'>
                    <button className='px-8 py-2.5 w-full  leading-5 text-white font-medium bg-[#6e6b58] transition-colors duration-300 transhtmlForm rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                        Add
                    </button>
                </div>
            </form>
        </section>

    );
};

export default AddService;