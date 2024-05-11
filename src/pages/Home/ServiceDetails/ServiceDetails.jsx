import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../../CustomHook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, serviceName, price, description } = service;
    const { user } = useAuth();

    const handleSubmitForm = async event => {

        event.preventDefault();
        const form = event.target
        const serviceId = _id
        const photo = form.photo.value
        const price = parseFloat(form.price.value)
        const email = form.email.value
        const provider_email = user?.email
        if (email === provider_email) return toast.error('Action Not Permitted')


        const serviceData = {
            serviceId, serviceName, photo, email, price, description, provider_email
        }
        console.table(serviceData);
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_URL}/pservice`, serviceData)
            console.log(data);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4   items-center min-h-[calc(100vh-306px)]'>
            <Helmet>
                <title>Radiant Reverie | Service Details</title>
            </Helmet>


            {/* Service Details */}
            <div className='flex-1  ps-12 text-center py-7 rounded-md  md:min-h-[350px]'>

                <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                    <span className="font-bold"> Service Name</span>: {serviceName}
                </h1>

                <p className='mt-2 text-lg text-gray-600 '>
                    <span className="font-bold"> Description:</span> {description.substring(0, 30)}...
                </p>
                <p className='mt-6 text-sm font-bold text-gray-600 mb-4'>
                    Service Provider Details:
                </p>
                <div className='rounded-full object-cover overflow-hidden w-full flex flex-row justify-center items-center'>
                    <img className="border-4 h-12 w-12 border-cyan-500 font-bold rounded-full " src={user?.photoURL} alt='' />
                </div>
                <div className='text-center gap-5'>
                    <div>
                        <p className='mt-2 text-sm  text-gray-600 '>    <span className="font-bold">Name:</span> {user?.displayName}.</p>
                        <p className='mt-2 text-sm  text-gray-600 '>
                            <span className="font-bold"> Service Provider Email: </span> {user?.email}
                        </p>
                    </div>

                </div>
                <p className='mt-6 text-lg  text-gray-600 mb-4'>
                    <span className="font-bold  text-gray-600 "> Price:</span>  {price.substring(1, 1)}
                </p>
                <button className="btn w-48 bg-[#6e6b58] text-white">Show All</button>

            </div>
            {/* Add a Service  Form */}
            <section className=' p-2 md:p-6 mx-auto rounded-md w-full bg-[#eaf1f7] '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize text-center '>
                    Add a Service
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
                        <label className='text-gray-700 ' htmlFor='job_title'>
                            Price:
                        </label>
                        <input
                            id='price'
                            name='price'
                            type='price'
                            defaultValue={price}
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
                        <label className='text-gray-700'>User Email: </label>
                        <input
                            id='email'
                            type='email'
                            defaultValue={user?.email}
                            name='email'
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
                            defaultValue={description}
                        ></textarea>
                    </div>


                    <div className='  flex flex-row  mt-6'>
                        <button className='px-8 py-2.5 w-full  leading-5 text-white font-medium bg-[#6e6b58] transition-colors duration-300 transhtmlForm rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Add
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ServiceDetails;