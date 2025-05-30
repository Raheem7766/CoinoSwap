import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { Edit, Copy, Trash2, Eye, EyeOff, Plus, X } from "lucide-react";
import Account from "./tabs/Account";
import Widget from "./tabs/Widget";
import Button from "./tabs/Button";
import Banner from "./tabs/Banner";
import Exchange from "./tabs/Exchange";
import Stats from "./tabs/Stats";
import Payout from "./tabs/Payout";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Payouts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <>
            <Account />
          </>
        );
      case "Widget":
        return (
          <>
            <Widget />
          </>
        );
      case "Button":
        return (
          <>
            <Button />
          </>
        );
      case "Banner":
        return (
          <>
            <Banner />
          </>
        );
      case "Exchanges":
        return (
          <>
            <Exchange />
          </>
        );
      case "Daily Stats":
        return (
          <>
            <Stats />
          </>
        );
      case "Payouts":
        return (
          <>
            <Payout />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-[40px] font-bold text-white text-center mt-4">
        Partner <span className="text-[#F4A70B]"> Account</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-4 pb-1 w-full mt-10">
        <div className="w-[23%] h-auto pb-2 px-2 bg-[#1A1918] rounded-[20px]">
          <div className="h-auto w-full flex items-center justify-between px-4 pt-2">
            <h2 className="text-[22px] font-semibold text-white">
              Total Turnover
            </h2>
            <div className="text-gray-400">
              <IoMdEye size={22} />
            </div>
          </div>
          <div className="w-full h-[100px] bg-white rounded-[20px] flex flex-col justify-center pl-4 mt-2 ">
            <h3 className="text-[34px] font-bold text-[#F4A70B]">0.004 ₿</h3>
            <p className="text-[16px] font-medium text-black">~6542,25 USD</p>
          </div>
        </div>
        <div className="w-[23%] h-auto pb-2 px-2 bg-[#1A1918] rounded-[20px]">
          <div className="h-auto w-full flex items-center justify-between px-4 pt-2">
            <h2 className="text-[22px] font-semibold text-white">
              Total Profit
            </h2>
            <div className="text-gray-400">
              <IoMdEye size={22} />
            </div>
          </div>
          <div className="w-full h-[100px] bg-white rounded-[20px] flex flex-col justify-center pl-4 mt-2 ">
            <h3 className="text-[34px] font-bold text-[#F4A70B]">0.004 ₿</h3>
            <p className="text-[16px] font-medium text-black">~6542,25 USD</p>
          </div>
        </div>
        <div className="w-[23%] h-auto pb-2 px-2 bg-[#1A1918] rounded-[20px]">
          <div className="h-auto w-full flex items-center justify-between px-4 pt-2">
            <h2 className="text-[22px] font-semibold text-white">
              Ready to Payout
            </h2>
            <div className="text-gray-400">
              <IoMdEye size={22} />
            </div>
          </div>
          <div className="w-full h-[100px] bg-white rounded-[20px] flex flex-col justify-center pl-4 mt-2 ">
            <h3 className="text-[34px] font-bold text-[#F4A70B]">0.004 ₿</h3>
            <p className="text-[16px] font-medium text-black">~6542,25 USD</p>
          </div>
        </div>
        <div className="w-[23%] h-auto pb-2 px-2 bg-[#1A1918] rounded-[20px]">
          <div className="h-auto w-full flex items-center justify-between px-4 pt-2">
            <h2 className="text-[22px] font-semibold text-white">
              Completed Exchanges
            </h2>
            <div className="text-gray-400">
              <IoMdEye size={22} />
            </div>
          </div>
          <div className="w-full h-[100px] bg-white rounded-[20px] flex flex-col justify-center pl-4 mt-2 ">
            <h3 className="text-[34px] font-bold text-[#F4A70B]">0.004 ₿</h3>
            <p className="text-[16px] font-medium text-black">~6542,25 USD</p>
          </div>
        </div>
      </div>
      <p className="text-[16px] font-medium text-white ml-14">
        Partner Share 0.5%
      </p>
      <div className="min-h-screen bg-black px-14 mt-14">
        <div className="bg-gray-100 rounded-[20px] border border-white pt-2">
          <div className="px-4">
            <div className="flex justify-between mb-2">
              {[
                "Account",
                "Widget",
                "Button",
                "Banner",
                "Exchanges",
                "Daily Stats",
                "Payouts",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "text-black hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div>{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
