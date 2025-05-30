import logo from "../../assets/img/logo.png";

const BrandLogo = ({w ='168px'}) => {
    return(
        <a href="/" className="inline-block">
          <img src={logo} width={w} alt="brand-logo" />
        </a>
    );
}

export default BrandLogo;