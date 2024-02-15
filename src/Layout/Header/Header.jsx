import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import LOgo from "./../../assets/Icons/Logo";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import SearchIcon from "./../../assets/Icons/SearchIcon";
import CartIcon from "./../../assets/Icons/CartIcon";

const Header = () => {
  return (
    <div className="flex container items-center justify-between py-[60px]">
      <Link to="/">
        <LOgo />
      </Link>
      <Navbar />
      <div className="flex items-center gap-[30px]">
        <div className="flex items-center relative">
          <Input variant="secondary" className="border" />
          <div className="bg-secondary absolute rounded-full right-[2px] flex items-center p-[20px] justify-center">
            <SearchIcon />
          </div>
        </div>
        <div className="rounded-full border flex items-center p-[5px] w-[160px] justify-between">
          <div className="rounded-full bg-primary flex items-center p-[15px] justify-center">
            <CartIcon />
          </div>
          <p className="font-semibold text-lg text-primary pr-[15px]">
            Cart (0)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
