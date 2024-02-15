import { Link } from "react-router-dom";
import { navData } from "../../../Data/HeaderData/HeaderData";

const Navbar = () => {
  return (
    <ul className="flex items-center gap-[18px]">
      {navData.map(({ name, path }) => (
        <li key={name}>
          <Link className="font-bold text-xl text-primary" to={path}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
