import { Link } from "react-router-dom";
import notFoundImage from "../assets/images/notfound.png"


const ErrorPage = () => {
    return (
        <section className='bg-white '>
            {/* <div className='container min-h-screen   '>
                <img
                    className=' w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover '
                    src={notFoundImage}
                    alt=''
                />
                <Link
                    to='/'
                    
                    className=' px-5  py-2 text-sm bg-gray-400 hover:bg-gray-600'
                >
                    <button> Take me home</button>
                </Link>


            </div>

            <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>

            </div> */}
            <div
                className='w-full bg-center bg-cover min-h-screen '
                style={{
                    backgroundImage: `url(${notFoundImage})`,
                }}
            >
                <div className='flex place-items-end pb-12 justify-center w-full min-h-screen '>
                    <div className='text-center'>
                        <Link to='/'><button className="btn bg-[#7b5d52] text-white font-medium " > Take me home</button></Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ErrorPage;