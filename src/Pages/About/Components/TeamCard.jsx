const TeamCard = ({
  img,
  name,
  job,
  insta: Insta,
  facebook: Facebook,
  twitter: Twitter,
}) => {
  return (
    <div className="rounded-[30px] shadow-2xl">
      <img src={img} alt="" />
      <div className="px-[28px] py-[35px]">
        <h3 className="text-3xl font-extrabold text-primary">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-secondary italic font-secondary text-2xl">{job}</p>
          <div className="flex gap-4 items-center">
            <Insta />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
