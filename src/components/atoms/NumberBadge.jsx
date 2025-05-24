const NumberBadge = ({count, size, textColor="bg-primary"}) => {
  return (
    <div className={`relative shrink-0 bg-no-repeat flex items-center justify-center font-semibold text-[28px] font-poppins ${textColor}`} style={{backgroundImage: "url('../src/assets/img/number-badge-bg.png')",backgroundSize:"100%",width: `${size}px`,height: `${size}px`,}}>
      {count}
      <svg className="absolute w-full"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    fill="none"
    viewBox="0 0 64 64"
  >
    <path
      stroke="#000"
      strokeOpacity="0.04"
      strokeWidth="20"
      d="M5.492-31.663C-8.826 2.516-11.31 36.239 34.607 34.087c45.916-2.15 57.432 37.454 47.844 60.342"
    ></path>
  </svg>
    </div>
  )
}

export default NumberBadge
