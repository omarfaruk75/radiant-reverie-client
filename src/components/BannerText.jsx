import 'animate.css';

const BannerText = () => {
    return (
        <div className=" rounded-xl min-h-screen bg-[#efcec1] flex flex-col justify-center items-center p-8 text-center">


            <h1 className="text-5xl text-[#222222] font-bold animate__animated animate__pulse animate_delay_2s">Radiant Reverie Salon!</h1>
            <p className="py-6 px-8 font-light text-[#222222]">

                Radiant Reverie Salon offers a serene sanctuary for beauty and relaxation. With meticulous attention to detail and a skilled team, it provides personalized services tailored to each clients needs. From luxurious hair treatments to rejuvenating spa experiences, it is a haven where guests emerge feeling refreshed and radiant.</p>
            <button className="btn bg-[#333333] text-white px-12">Get Started</button>


        </div>
    );
};

export default BannerText;