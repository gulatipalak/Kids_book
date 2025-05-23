import NumberBadge from "./NumberBadge"

const ProcessCards = ({count, heading, description}) => {
  return (
    <div className='bg-white pt-[94px] px-6 pb-11 rounded-[34px] relative'>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <NumberBadge count={count} size={100} textColor="text-brand-white"/>
        </div>
      <h3 className="font-poppins font-semibold text-[22px] mb-6 text-center">Step {count}: {heading}</h3>
      <p className="font-poppins font-normal text-lg text-center">{description}</p>
    </div>
  )
}

export default ProcessCards
