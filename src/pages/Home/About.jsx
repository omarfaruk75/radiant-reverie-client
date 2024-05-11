import aboutImage from "../../assets/images/pexels-pixabay-458766.jpg"

const About = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-8  items-center ">
                <div className="flex justify-start items-center">
                    <img className=" " src={aboutImage} alt="" />
                </div>
                <div className="space-y-8 w-full">
                    <h2 className="text-2xl font-medium text-center ">About <span className="text-[#a916c5] text-3xl">Radiant Reverie Salon</span></h2>
                    <div className="text-base bg-base-100 w-5/6 mx-auto font-normal text-center space-y-4">
                        <p>
                            Radiant Reverie Salon offers a sanctuary where beauty meets relaxation. Our team delivers precision haircuts, vibrant color treatments, and luxurious spa experiences like facials, massages.</p>
                        <p>
                            Step into our serene oasis and immerse yourself in pampering tranquility. Our skilled professionals cater to your every need, ensuring you leave feeling refreshed and renewed. Whether it is a simple haircut or a full day of spa treatments... <span className="text-blue-400 cursor">Read More</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;