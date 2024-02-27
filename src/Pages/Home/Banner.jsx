import './Banner.css';

const Banner = () => {
    return (
        <div className="h-fit md:flex justify-between">

            <div data-aos="fade-right"
            data-aos-duration="1000" className='lg:w-1/2 pt-8 lg:pt-56 text-[#2D5661] p-5'>

                <h2 className='font-bold text-5xl lg:text-7xl'>WhyVent</h2>
                <p className='text-2xl lg:text-5xl mt-4'>Empower your event  <br />  with power with us</p>
                
            </div>

            <img  data-aos="fade-left"
            data-aos-duration="1000" className='lg:w-2/3 md:w-1/2 lg:pt-40' src="https://i.ibb.co/Ryrvm27/144588-gym-man-fitness-free-png-hq-removebg-preview.png" alt="" />

        </div>
    );
};

export default Banner;