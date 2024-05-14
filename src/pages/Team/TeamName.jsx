
const TeamName = ({ image, text }) => {
  return (
    <div
      className='w-[26rem] h-[25rem] p-12 mx-auto  '
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center', // Center the background image
        backgroundSize: 'cover', // Ensure the image covers the entire area
        backgroundRepeat: 'no-repeat', // Prevent repeating the background image
      }}
    >
      <div className='flex items-center justify-center w-full min-h-screen bg-[#22222280]'>
        <div className='text-center'>
          <h1 className='text-2xl font-medium text-[#fdcebc] lg:text-4xl animate__animated animate__fadeInRightBig'>
            {text}
          </h1>


        </div>
      </div>
    </div>
  )
};

export default TeamName;