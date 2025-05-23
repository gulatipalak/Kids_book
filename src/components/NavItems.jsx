const NavItems = ({className,Items}) => {
    return (
    <ul className={`flex flex-wrap items-center ${className}`}>
      {Items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="font-poppins text-lg font-light text-white hover:text-green transition-colors duration-300"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
    )
}

export default NavItems;