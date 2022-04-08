import { Link } from "react-router-dom";
import Logo from "../../assets/img/HotCoffee.png";
// import {ReactComponent as InstaIcon} from "../../assets/icons/InstagramIcon.svg";
// import {ReactComponent as TwitterIcon} from "../../assets/icons/TwitterIcon.svg";
import * as Icons from "../../assets/icons/index.js"

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <img src={Logo} className="" alt="" />
                </div>
                <div>
                    <input type="text" className="" placeholder="Search..." />
                    <Link to="/">Home</Link>
                    <Link to="/article">Article</Link>
                    <img src={Icons.InstagramIcon} alt="" />
                    <img src={Icons.TwitterIcon} alt="" />
                    <img src={Icons.LinkedinIcon} alt="" />
                    {/* <Icons.InstagramIcon />
                    <Icons.TwitterIcon />
                    <Icons.LinkedinIcon /> */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;