




const TeamName = ({ image, text }) => {
  return (
    <div
      className='w-3/4 p-12 mx-auto bg-center bg-cover '
      style={{
        backgroundImage: `url(${image})`,
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