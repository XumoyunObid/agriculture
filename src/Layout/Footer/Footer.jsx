import LOgo from "../../assets/Icons/Logo";
import InstaIcon from "./../../assets/Icons/InstaIcon";
import FaceBookIcon from "./../../assets/Icons/FaceBookIcon";
import Twitter from "./../../assets/Icons/Twitter";
import PinterestIcon from "./../../assets/Icons/PinterestIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex py-[50px] justify-center container px-[50px] mt-[50px]">
        <ul className="flex flex-col items-end border-r px-[50px] gap-[30px]">
          <li className="text-3xl text-bold text-primary">Contact Us</li>
          <li className="flex flex-col text-end text-cityRain">
            <span className="text-base font-bold text-primary">Email</span>
            needhelp@Organia.com
          </li>
          <li className="flex flex-col text-end text-cityRain">
            <span className="text-base font-bold text-primary">Phone</span>
            666 888 888
          </li>
          <li className="flex flex-col text-end text-cityRain">
            <span className="text-base font-bold text-primary">Address</span>
            88 road, Brooklyn street, USA
          </li>
        </ul>
        <ul className="p-[50px] flex flex-col items-center gap-[50px]">
          <li>
            <LOgo />
          </li>
          <li className="text-center text-cityRain text-lg">
            Simply dummy text of the printing and typesetting industry. <br />{" "}
            Lorem Ipsum simply dummy text of the printing{" "}
          </li>
          <li>
            <ul className="flex items-center gap-[15px]">
              <li className="rounded-full p-[20px] bg-heavySugar flex items-center justify-center">
                <InstaIcon />
              </li>
              <li className="rounded-full p-[20px] bg-heavySugar flex items-center justify-center">
                <FaceBookIcon />
              </li>
              <li className="rounded-full p-[20px] bg-heavySugar flex items-center justify-center">
                <Twitter />
              </li>
              <li className="rounded-full p-[20px] bg-heavySugar flex items-center justify-center">
                <PinterestIcon />
              </li>
            </ul>
          </li>
        </ul>
        <ul className="flex flex-col items-start border-l px-[50px] gap-[30px]">
          <li className="text-3xl text-bold text-primary"><Link>Utility Pages</Link></li>
          <li className="text-base text-cityRain"><Link>Style Guide</Link></li>
          <li className="text-base text-cityRain"><Link>404 Not Found Page</Link></li>
          <li className="text-base text-cityRain"><Link>Password Protected</Link></li>
          <li className="text-base text-cityRain"><Link>Licences</Link></li>
          <li className="text-base text-cityRain"><Link>Changelog</Link></li>
        </ul>
      </div>
      <div className="p-[20px] flex justify-center border-t-2">
        <p className="text-cityRain text-lg text-bold">
          Copyright ©{" "}
          <span className="text-primary font-extrabold">Organick</span> |
          Designed by{" "}
          <span className="text-primary font-extrabold">VictorFlow</span>{" "}
          Templates - Powered by{" "}
          <span className="text-primary font-extrabold">Webflow</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
