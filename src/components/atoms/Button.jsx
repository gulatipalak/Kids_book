import { clsx } from "clsx";
import ArrowUp from "../../assets/icons/ArrowUp";

const Button = ({
    children,
    type = 'button',
    onClick,
    className='',
    variant='primary',
}) => {
    const baseStyles ="flex text-primary font-poppins font-medium rounded-full items-center group transition duration-300";

    const variants = {
        primary : "bg-green py-2 pl-11 pr-2 gap-[44px] border-8 border-secondary text-lg",
        secondary: "bg-brand-white text-base pl-[34px] gap-[18px] py-1.5 pr-1.5"
    }
    const iconSize = variant === 'primary' ? 'size-[52px]' : 'size-[42px]';
    const iconRotate = variant === 'secondary' && 'rotate-45';
    return (
        <button type={type} onClick={onClick} className={clsx(baseStyles,className,variants[variant])}>
           <span className="">{children}</span> <div className={`flex justify-center items-center bg-primary rounded-full ${iconSize} ${iconRotate}`}><ArrowUp className=""/></div>
        </button>
    )
}

export default Button;