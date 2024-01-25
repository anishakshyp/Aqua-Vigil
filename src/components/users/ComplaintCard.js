import React, { useState } from "react";
import Blockage from "../../assets/complaints/blockage.png";
import { Chat, ThumbsDown, ThumbsUp } from "phosphor-react";

const ComplaintCard = () => {
  const [active, setActive] = useState(false);
  const [notActive, setNotActive] = useState(false);

  return (
    <div className="flex">
      <div
        className={`h-[300px] w-[600px] rounded-3xl border-[2px] bg-transparent backdrop-blur-[10px] mt-10 shadow-md hover:cursor-pointer`}
        onMouseEnter={() => {
          setActive(true);
          setNotActive(false);
        }}
        onMouseLeave={() => {
          setActive(false);
          setNotActive(true);
        }}
      >
        <div className="flex">
          <div className="w-[400px] h-[300px]">
            <div className="h-[100px] flex justify-center items-center">
              <p className="font-bold text-[25px] border-b-[2px] py-1">
                Blockage
              </p>
            </div>
            <p className="flex justify-start text-left h-[150px] px-10 overflow-y-scroll scrollbar-hide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="justify-center items-center w-[200px] flex h-[300px]">
            <img
              src={Blockage}
              alt="Blockage"
              className="rounded-3xl h-[250px] w-[150px] object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className={`w-[70px] h-[300px] mt-10 p-5 flex flex-col gap-y-2`}
        onMouseEnter={() => {
          setActive(true);
          setNotActive(false);
        }}
        onMouseLeave={() => {
            setActive(false);
            setNotActive(true);
          }}
      >
        <div
          className={`p-2 rounded-full shadow-md w-[70px] h-[70px] flex items-center justify-center hover:shadow-green-300 hover:shadow-lg transition-all duration-200 cursor-pointer ${
            active ? "icon-1-slideOut" : ""
          }
          ${notActive ? "icon-1-slideIn" : ""} translate-x-[-100px] z-[-1]`}
        >
          <Chat className="h-[30px] w-[30px]" />
        </div>
        <div
          className={`p-2 rounded-full shadow-md w-[70px] h-[70px] flex items-center justify-center hover:shadow-red-500 hover:shadow-lg transition-all duration-200 cursor-pointer ${
            active ? "icon-2-slideOut" : ""
          }
          ${notActive ? "icon-2-slideIn" : ""} translate-x-[-100px] z-[-1]`}
        >
          <ThumbsUp className="h-[30px] w-[30px]" />
        </div>
        <div
          className={`p-2 rounded-full shadow-md w-[70px] h-[70px] flex items-center justify-center hover:shadow-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer ${
            active ? "icon-3-slideOut" : ""
          }
          ${notActive ? "icon-3-slideIn" : ""} translate-x-[-100px] z-[-1]`}
        >
          <ThumbsDown className="h-[30px] w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard;
