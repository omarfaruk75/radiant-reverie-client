


const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover min-h-screen '
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full min-h-screen bg-[#22222280]'>
                <div className='text-center'>
                    <h1 className='text-2xl font-medium text-[#fdcebc] lg:text-4xl animate__animated animate__fadeInUp'>
                        {text}
                    </h1>


                </div>
            </div>
        </div>
    )
};

export default Slide;