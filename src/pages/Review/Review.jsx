import bgImage1 from "../../assets/images/jake-nackos-.jpg"

const Review = () => {
    return (
        <div>
            <div className="text-center space-y-2 mb-6">


                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-6xl px-6 py-10 mx-auto">
                        <p className="text-xl font-medium text-[#6E6B58] ">Review</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Our Special Client
                        </h1>

                        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                            <div className="absolute w-full bg-[#cca291] -z-10 md:h-96 rounded-2xl"></div>

                            <div className="w-full p-6  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[28rem] lg:w-[26rem] md:rounded-2xl" src={bgImage1} alt="client photo" />

                                <div className="mt-2 md:mx-6">
                                    <div>
                                        <p className="text-xl font-medium tracking-tight  text-white">Jack Nicos</p>
                                        <p className=" text-[#351b11]">CEO at JMG Airelines</p>
                                    </div>

                                    <p className="mt-4 text-sm font-light leading-relaxed text-[#222222] "> “
                                        Radiant Reverie Parlour garners praise for its attentive staff and personalized service. Clients appreciate the high-quality products and trendy treatments, alongside the inviting atmosphere that fosters relaxation. ItIs a go-to destination for quality beauty services and a refreshing experience.”.</p>

                                    <div className="flex items-center justify-between mt-6 md:justify-start">

                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Review;