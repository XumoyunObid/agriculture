import React from "react";
import { team } from "../../../Data/ProductsData";
import TeamCard from "../Components/TeamCard";

const Team = () => {
  return (
    <div className="py-[175px]">
      <div className="container px-[50px] flex flex-col gap-[42px]">
        <div className="text-center">
          <h3 className="text-secondary font-secondary text-4xl ">Team</h3>
          <h1 className="text-primary text-[50px] font-extrabold">
            Our Organic Experts
          </h1>
          <p className="text-lg text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's <br /> standard dummy text ever
            since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
        <ul className="flex items-center justify-between gap-[30px]">
          {team.map((item) => (
            <li key={item.id}>
              <TeamCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
