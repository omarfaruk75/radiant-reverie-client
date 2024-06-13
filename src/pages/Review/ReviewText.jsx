

const ReviewText = ({ name, designation, description, image }) => {
    return (
        <div>
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-[#cca291] -z-10 md:h-96 rounded-2xl"></div>

                <div className="w-full p-6 item-center  md:flex   md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                    <img className="h-24 w-24 item-center md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[28rem] lg:w-[26rem] md:rounded-2xl " src={image} alt="client photo" />

                    <div className="mt-2 md:mx-6">
                        <div>
                            <p className="text-xl font-medium tracking-tight  text-white">{name}</p>
                            <p className=" text-[#351b11]">{designation}</p>
                        </div>

                        <p className="mt-4 text-sm font-light leading-relaxed text-[#222222] "> “
                            {description}</p>

                        <div className="flex items-center justify-between mt-6 md:justify-start">

                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default ReviewText;