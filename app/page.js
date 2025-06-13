'use client';
import { assets } from "@/assets/icons/assets";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
        
        <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
          <Image
            onClick={() => setExpand(!expand)}
            src={assets.menu}
            width={24}
            height={24}
            className="rotate-180"
            alt="menu"
          />
          <Image
            src={assets.chat}
            width={30}
            height={30}
            className="opacity-70 mr-6"
            alt="menu-bar"
          />
        </div>

        <div className="mt-9 text-center">
          {messages.length === 0 ? (
            <>
            <div className="flex flex-row items-center gap-4">
              <Image
                src={assets.logo}
                width={40}
                height={40}
                alt="logo"
              />
              <p className="text-3xl font-medium">Hi, I'm DeepSeek</p>
            </div>
            <p className="text-base mt-5">How can I help you today?</p>
            </>
          ) : (
            <>
            <div>

            </div>
            </>
          )}
        </div>
        <div className="w-full flex justify-center">
          <p className="text-xs absolute bottom-1 text-gray-500 text-center">AI-generated, for reference only</p>
        </div>
      </div>
    </div>
  );
}
