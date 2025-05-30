import React, { useState } from "react";

export default function Payout() {
  const [amount, setAmount] = useState("0.00");
  const [btcAddress, setBtcAddress] = useState("");

  return (
    <div className="bg-black rounded-[20px] p-3 space-y-6">
      <div className="bg-white p-3 rounded-[10px]">
        <h2 className="text-xl font-bold mb-6">Request A Payout</h2>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <div className="bg-black text-white px-3 py-2 rounded-t-[20px] text-sm font-medium">
              Available Balance
            </div>
            <div className="bg-black rounded-b-[20px]">
              <div className="bg-white border-2 border-black rounded-[20px] px-3 py-4">
                <span className="text-[#F4A70B] font-bold text-[22px]">
                  0.004 BTC
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#E2E2E2] text-black px-3 py-2 rounded-t-[20px] text-sm font-medium">
              Minimum Withdrawal Amount
            </div>
            <div className="bg-[#E2E2E2] pb-[1px] px-[1px] rounded-b-[20px]">
              <div className="bg-white rounded-[20px] px-3 py-4">
                <span className="text-black font-bold text-[22px]">
                  0.001 BTC
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2 px-4">
            Amount
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 bg-[#E2E2E2] rounded-[40px] border-none outline-none text-lg"
            placeholder="0.00"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2 px-4">
            BTC Address
          </label>
          <input
            type="text"
            value={btcAddress}
            onChange={(e) => setBtcAddress(e.target.value)}
            className="w-full px-4 py-3 bg-[#E2E2E2] rounded-[40px] border-none outline-none"
            placeholder="Enter BTC Address"
          />
          <p className="text-xs text-gray-500 mt-2 px-4">
            Our Withdrawal Requests Are Made Within 2-3 Business Days
          </p>
        </div>

        <button className="bg-black text-white px-14 py-1 rounded-full font-medium hover:bg-gray-800">
          Payout
        </button>
      </div>

      <div className="bg-white rounded-2xl border-4 border-black p-3">
        <h2 className="text-xl font-bold mb-6">Payout History</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="flex justify-between">
                <th className="font-semibold text-gray-800">
                  Status
                </th>
                <th className="font-semibold text-gray-800">
                  Created Date
                </th>
                <th className="font-semibold text-gray-800">
                  Amount Paid
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state - no data rows */}
              <tr>
                <td colSpan="3" className="py-16 text-center text-gray-400">
                  <div className="text-lg">No payout history found</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
