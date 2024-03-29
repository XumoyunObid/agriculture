import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import bg from "../assets/Home/newsletter.png";

const Newsletter = () => {
  return (
    <div className="container px-[50px] pt-[140px]">
      <div
        className="rounded-[30px] bg-cover bg-center bg-no-repeat py-[105px] px-[70px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-[50px] text-white font-extrabold">
            Subscribe to <br /> our Newsletter
          </h1>
          <div className="flex gap-[6px]">
            <Input variant="primary" placeholder="Your Email Address" />
            <Button variant="primary" className="px-[50px]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
