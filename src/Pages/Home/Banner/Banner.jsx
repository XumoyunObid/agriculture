import NextButton from "../../../UI/Button/NextButton"
import Button from './../../../UI/Button/Button';

const Banner = () => {
  return (
    <div className="bg-homebg bg-cover h-[100vh] w-full">
        <div className="container px-[50px] flex flex-col items-start justify-center pt-[8%]">
          <h2 className="text-4xl text-secondary italic font-secondary">100% Natural Food</h2>
          <h1 className="text-[70px] text-primary font-extrabold">
            Choose the best <br /> healthier way <br /> of life
          </h1>
          <Button variant="secondary" className="flex items-center gap-[15px]">
            Explore Now <NextButton />
          </Button>
        </div>
      </div>
  )
}

export default Banner
