import Button from './Button'
import ChevronDown from '../assets/icons/ChevronDown'
import ProcessListCard from './ProcessListCard'


const HeroSection = () => {
  return (
    <section className="pt-[120px] pb-[75px] bg-top relative" style={{backgroundImage: "url('../src/assets/img/stars.png')"}}>
      <div className="container">
        <div className='max-w-[920px] mx-auto flex flex-col items-center relative'>
            <h1 className='font-candal font-normal text-white text-center text-[50px] lg:text-[84px] leading-[108%] -tracking-[4%] pb-11'>Crafting Fairy Tales from Real Life</h1>
            <Button variant="primary" className='!w-auto'>Create Book</Button>
            <svg className='hidden lg:block absolute left-0 bottom-0'
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="127"
                fill="none"
                viewBox="0 0 137 127"
            >
                <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="2.8"
                d="M103.22 2.184c25.299 11.168 42.383 29.41 25.489 57.319C115.696 81 80.214 87.477 63.964 65.388c-3.893-5.292-.764-13.926 3.366-18.23 6.534-6.812 14.77-6.645 22.716-2.039 14.434 8.368 25.364 29.766 15.923 45.417-14.775 24.493-45.22 30.477-71.794 26.243-5.293-.844-43.33-13.688-20.798-13.621 4.09.013 16.326.531 12.244.775-6.768.406-10.588.352-17.303-1.447-1.333-.357-8.038-3.198-6.41.409 3.332 7.383 6.08 14.989 9.586 22.308"
                ></path>
            </svg>
            <svg className='hidden lg:block absolute right-0 bottom-0'
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="75"
                fill="none"
                viewBox="0 0 125 75"
            >
                <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="2.8"
                d="M123.338 72.823C107.822 53.455 89.67 38.4 66.02 42.254c-8.146 1.328-17.11 4.153-24.083 8.757-3.162 2.088-8.455 6.735-7.518 10.892 1.557 6.902 11.833 1.722 15.428-.339C56.346 57.838 60.2 45.504 56.2 38.99c-7.427-12.093-24.25-19.942-36.414-26.262-4.857-2.523-10.364-4.113-15.04-6.812-1.814-1.048 1.255 3.76 1.58 4.76 1.92 5.902 2.17 5.957-.93-.056-.429-.832-3.88-6.423-3.609-6.893.19-.329 12.334-1.684 13.674-2.207"
                ></path>
            </svg>
        </div>
      <div className='flex flex-col lg:flex-row  justify-between mt-[18px]'>
            <div className='w-full lg:w-[347px] lg:max-w-[347px] lg:order-2 mb-9 lg:mb-0'>
           <div className='relative'>
             <div className='flex gap-6 items-center mb-6'>
                <img src="../src/assets/img/dummy-2.png" alt="image" className='shrink-0' width="74px" height="74px"/>
                <h2 className='font-poppins font-semibold text-[26px] text-white'>
                    Adventure Awaits
                </h2>
            </div>
            <p className='font-poppins font-light text-white text-lg'>
                Lorem ipsum dolor consectetur. Potenti pharetra mi convallis dolor eu. Sit gravida pulvinar
            </p>
            <button className='bg-green text-primary font-poppins text-[16px] rounded-[60px] py-[6px] flex items-center gap-[23px] pl-[6px] pr-[30px] mt-[23px]'>
                <span className='inline-flex items-center justify-center size-[38px] rounded-full bg-primary'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                            fill="#EBEBEB"
                            fillRule="evenodd"
                            d="M13.131 3.26a7.07 7.07 0 0 0-11.082 7.038.965.965 0 0 1-1.896.357 9.002 9.002 0 0 1 14.355-8.773l.787-.787a.643.643 0 0 1 1.098.454V4.5a.643.643 0 0 1-.643.642h-2.948a.643.643 0 0 1-.454-1.097zm3.59 3.315a.965.965 0 0 1 1.126.77 9.003 9.003 0 0 1-9.343 10.641 9 9 0 0 1-5.014-1.87l-.787.789a.643.643 0 0 1-1.098-.455V13.5a.643.643 0 0 1 .643-.642h2.949a.642.642 0 0 1 .455 1.098l-.785.783A7.071 7.071 0 0 0 15.95 7.702a.964.964 0 0 1 .771-1.127m-8.775-1.39c.244-1.119 1.835-1.124 2.09-.01l.013.056a3.46 3.46 0 0 0 2.803 2.73c1.162.202 1.162 1.874-.001 2.076a3.46 3.46 0 0 0-2.783 2.642l-.032.145c-.255 1.115-1.846 1.108-2.09-.009l-.027-.124a3.45 3.45 0 0 0-2.772-2.655c-1.162-.202-1.162-1.87 0-2.072a3.45 3.45 0 0 0 2.768-2.643l.02-.091z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                </span>
                Regenerate Story
            </button>
            <svg className='hidden lg:block absolute right-0 bottom-0'
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="46"
                fill="none"
                viewBox="0 0 52 46"
            >
                <path
                fill="#EBEBEB"
                d="M2.107 36.674a1 1 0 0 0-1.294 1.524zM42.032.588a1 1 0 0 0-1.046.952l-.422 8.99a1 1 0 1 0 1.998.094l.375-7.991 7.991.375a1 1 0 1 0 .094-1.998zM1.46 37.436l-.647.762c13.27 11.267 29.01 7.657 38.74-1.52 4.863-4.589 8.288-10.614 9.18-16.966.898-6.38-.77-13.043-6.009-18.798l-.74.673-.739.673c4.826 5.301 6.325 11.364 5.508 17.173-.82 5.837-3.987 11.464-8.573 15.79-9.17 8.65-23.756 11.908-36.073 1.45z"
                ></path>
            </svg>
        </div>
           </div>
           <div className='w-full lg:w-[340px] lg:max-w-[340px] max-w-[100%] lg:order-1'>
            <div className='flex items-center gap-3 mb-6'>
                <h2 className='font-poppins font-bold text-[26px] text-white'>Process</h2>
                <ChevronDown/>
            </div>
            
            <div className='space-y-3'>
                <ProcessListCard countBoxColor="[#C96ADB]" countColor="brand-white" count={1} title="Share Your Story"/>
                <ProcessListCard countBoxColor="green" countColor="primary" count={2} title="We Bring it To Life"/>
                <ProcessListCard countBoxColor="[#0CA9F6]" countColor="brand-white" count={3} title="We Deliver it to You"/>
            </div>
            
        </div>
      </div>
        
      </div>
      
      <img src="../src/assets/img/LeftSideWave.png" className="absolute left-0 bottom-[20%] z-[-1]" alt="wave"/>
      <img src="../src/assets/img/RightSideWave.png" className="absolute right-0 bottom-[20%] z-[-1]" alt="wave"/>
    </section>
  )
}

export default HeroSection
