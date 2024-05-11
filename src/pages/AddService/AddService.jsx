

const AddService = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12 '>
            <section className=' p-2 md:p-6 mx-auto rounded-md shadow-md bg-[#fdcebc] '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize text-center '>
                    Add a Service
                </h2>

                <form className="text-[#6E6B58] ">
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Image URL:
                            </label>
                            <input
                                id='photo'
                                name='phot'
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
                            <label className='text-gray-700'>Price: </label>
                            <input
                                id='price'
                                type='text'
                                name='price'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />

                        </div>

                        <div >
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>

                    </div>
                    <div className='  flex w-full items-center justify-center mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white font-medium bg-[#806358] transition-colors duration-300 transhtmlForm rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Add
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
};

export default AddService;