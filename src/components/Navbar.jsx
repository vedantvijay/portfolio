import logo from "../assets/kevinRushLogo.png";
import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0 ">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};
export default Navbar;
