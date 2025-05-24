const ProcessListCard = ({count,title,countColor,className}) => {
  return (
    <div className='flex items-center gap-5 group hover:bg-[#ffffff1a] rounded-[24px] py-2 pl-2 pr-[18px] transition-all duration-300'>
        <div className={`size-[72px] text-${countColor} flex items-center justify-center rounded-[18px] shrink-0 ${className}`}>
            <span className='font-poppins font-semibold text-[32px]'>{count}</span>
        </div>
        <div className='flex items-center justify-between w-full gap-3'>
            <p className='font-poppins font-bold text-lg text-white'>{title}</p>
            <span className='size-[34px] bg-transparent rounded-lg group-hover:bg-green rotate-45 transition-all group-hover:rotate-0 flex items-center justify-center'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="none"
                    viewBox="0 0 38 38"
                >
                    <path className="group-hover:stroke-primary transition duration-300"
                    stroke="#EBEBEB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="m12.055 25.946 13.89-13.891m0 0v13.119m0-13.12H12.827"
                    ></path>
                </svg>
            </span>
        </div>
    </div>
  )
}

export default ProcessListCard
