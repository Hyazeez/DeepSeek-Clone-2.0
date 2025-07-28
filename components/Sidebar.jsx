import { assets } from "@/assets/icons/assets";
import Image from "next/image";
import React from "react";

const Sidebar = ({ expand, setExpand }) => {
  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        expand ? "px-3 w-68" : "md:w-20 w-0"
      }`}
    >
      {/* Top Section */}
      <div>
        {/* Logo & Toggle Button */}
        <div
          className={`flex ${
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          }`}
        >
          <Image
            className={`${expand ? "w-48" : "w-10 h-10"} object-contain`}
            src={expand ? assets.logotext : assets.logo}
            alt="deepseek"
            width={100}
            height={60}
          />
          <div
            onClick={() => setExpand(!expand)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image src={assets.menu} alt="" className="md:hidden" />
            <Image
              src={expand ? assets.close : assets.sidebar}
              alt=""
              className="hidden md:block w-7"
            />
            <div
              className={`absolute w-max ${
                expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"
              } opacity-0 group-hover:opacity-100
            transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expand
                    ? "left-1/2 -top-1.5 -translate-x-1/2"
                    : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <div>
          <button
            className={`mt-8 flex items-center justify-center cursor-pointer ${
              expand
                ? "bg-[#3a3b3f] hover:bg-[#4b4c50] border border-[#5b5c60] shadow-lg shadow-[#4b4c5060] rounded-2xl gap-2 p-3 w-[160px]"
                : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
            }`}
          >
            <Image
              className={expand ? "w-6" : "w-7"}
              src={expand ? assets.chat : assets.chatplus}
              alt="image"
            />
            <div
              className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black
            text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none"
            >
              New Chat
              <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
            </div>
            {expand && <p className="text-white text font-medium">New Chat</p>}
          </button>

          {/* Recents */}
          <div
            className={`mt-8 text-white/25 text-sm ${expand ? "block" : "hidden"}`}
          >
            <p className="my-1">Recents</p>
            {/* --chat label-- */}
          </div>
        </div>
      </div>

      {/* Bottom Section - Get App */}
      <div className="pb-6">
        <div
          className={`flex items-center cursor-pointer group relative ${
            expand
              ? "gap-1 text-white/80 text-sm p-1.5 border border-primary rounded-lg hover:bg-white/10"
              : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            className={expand ? "w-5" : "w-6.5 mx-auto"}
            src={expand ? assets.mobile : assets.mobile2}
            alt=""
          />
          <div
            className={`absolute -top-60 ${!expand && "-right-40"}
            opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}
          >
            <div className="relative w-max bg-white text-black text-sm p-3 px-4 rounded-lg shadow-lg">
              <Image src={assets.qrcode} alt="" className="w-40" />
              <p className="text-center pt-2">Scan Deepseek App</p>
              <div
                className={`w-3 h-3 absolute bg-white rotate-45 ${
                  expand ? "right-1/2" : "left-4"
                } -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              <span>Get App</span>
              <Image src={assets.newicon} alt="" className="w-10 ml-2" />
            </>
          )}
        </div>
        <div className={`flex items-center ${expand ? "hover:bg-white/10 rounded-lg" : 
          "justify-center w-full"} gap-3 text-white/60 text-sm p-2 mt-3 cursor-pointer`}>
          <Image src={assets.user} alt="user" className="w-8"/>
          {expand && <span>My profile</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
