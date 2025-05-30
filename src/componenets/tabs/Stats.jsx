import React from "react";

export default function Stats() {
  return (
    <div className="">
      <div className="bg-black rounded-[20px] p-3">
        <div className="bg-white p-3 rounded-[10px]">
          <h2 className="text-[24px] font-bold mb-3">Daily Stats</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="flex justify-between">
                  <th className=" font-semibold text-gray-800">Status</th>
                  <th className=" font-semibold text-gray-800">Date</th>
                  <th className=" font-semibold text-gray-800">Order ID</th>
                  <th className=" font-semibold text-gray-800">Sell Amount</th>
                  <th className=" font-semibold text-gray-800">Get Amount</th>
                  <th className=" font-semibold text-gray-800">Profit</th>
                  <th className=" font-semibold text-gray-800">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" className="py-16 text-center text-gray-400">
                    <div className="text-lg">No Daily stats history found</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
