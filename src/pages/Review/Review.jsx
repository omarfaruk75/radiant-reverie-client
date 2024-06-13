import ReviewSlide from "./ReviewSlide";


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
                        <ReviewSlide />
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Review;