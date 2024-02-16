const AboutServiceCard = ({ title, text, img: Img }) => {
  return (
    <div className="px-[35px] bg-white  rounded-[30px] w-[255px] h-[335px] text-center py-[20px] flex flex-col items-center gap-[15px]">
      <div className="rounded-[18px] bg-doctor p-[25px] flex items-center justify-center">
        <Img />
      </div>
      <h2 className="text-2xl font-extrabold text-primary">{title}</h2>
      <p className="text-lg text-primary">{text}</p>
    </div>
  );
};

export default AboutServiceCard;
