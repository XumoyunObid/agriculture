const AboutCategoryCard = ({ img, title }) => {
  return (
    <>
      <div className="flex items-center justify-center bg-white rounded-[30px] w-[334px] h-[334px] p-3">
        <img src={img} alt="" className="object-contain" />
      </div>
      <p className="text-2xl font-medium text-white text-center mt-4">
        {title}
      </p>
    </>
  );
};

export default AboutCategoryCard;
