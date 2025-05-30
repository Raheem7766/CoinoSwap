import React, { useState } from "react";
import { ChevronDown, RefreshCw, Copy, Trash2, Check } from "lucide-react";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { X } from "lucide-react";

export default function Widget() {
  const [sendAmount, setSendAmount] = useState("400");
  const [receiveAmount, setReceiveAmount] = useState("7324.49");
  const [sendCurrency, setSendCurrency] = useState("BTC");
  const [receiveCurrency, setReceiveCurrency] = useState("ETH");
  const [copied, setCopied] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [widgetName, setWidgetName] = useState("Widget #2");
  const [defaultAmount, setDefaultAmount] = useState("01");
  const [defaultSendCoin, setDefaultSendCoin] = useState("BTC");
  const [defaultReceiveCoin, setDefaultReceiveCoin] = useState("ETH");
  const [exchangePartners, setExchangePartners] = useState("All");
  const [enableLogo, setEnableLogo] = useState(true);
  const [shortFormat, setShortFormat] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const iframeCode =
    '<iframe Src="" Style="Border:0px #f1f1f1 None;" Name="myiFrame" Scrolling="No" Frameborder="1" Marginheight="0px" Marginwidth="0px" Height="400px" Width="600px" Allowfullscreen></iframe>';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(iframeCode);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDelete = () => {
    console.log("Widget deleted");
    setShowModal(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-[20px] p-4 bg-black">
      <div className="flex w-full gap-4">
        <div className="w-max h-max bg-white py-3 pb-0 rounded-[20px] border border-white">
          <div className="px-3">
            <button
              className="w-[600px] bg-black text-white cursor-pointer py-1 px-4 rounded-full mb-4 font-medium"
              onClick={() => setShowCreateModal(true)}
            >
              + Create New Widget
            </button>
          </div>

          <div className="bg-black rounded-[20px] p-4 py-4">
            <div className="flex items-center justify-between text-white w-full bg-white rounded-[40px] border border-white pl-5">
              <BsSpeedometer2 className="text-black" size={28} />

              <div className="flex items-center justify-between px-4 w-[90%] py-4 bg-black rounded-[40px]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-400">Widget #01</span>
                </div>
                <div>
                  <button className="p-2 rounded-full transition-colors">
                    <MdEdit className="w-4 h-4 cursor-pointer text-white" />
                  </button>
                  <button
                    className="p-2 rounded-full transition-colors"
                    onClick={() => setshowDeleteModal(true)}
                  >
                    <Trash2 className="w-4 h-4 cursor-pointer text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCreateModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="bg-white rounded-2xl p-6 pt-2 w-full max-w-lg relative">
              <button
                onClick={() => setShowCreateModal(false)}
                className="absolute top-1 right-1 p-1 cursor-pointer bg-black rounded-full"
              >
                <X className="w-4 h-4 font-bold text-white" />
              </button>

              <h2 className="text-xl font-bold text-center text-black mb-6">
                Create New Widget
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Widget Name
                    </label>
                    <input
                      type="text"
                      value={widgetName}
                      onChange={(e) => setWidgetName(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-200 border-0 rounded-[40px] text-black placeholder-gray-500"
                      placeholder="Widget #2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Default Amount
                    </label>
                    <input
                      type="text"
                      value={defaultAmount}
                      onChange={(e) => setDefaultAmount(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-200 border-0 rounded-[40px] text-black placeholder-gray-500"
                      placeholder="01"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Set Default Send Coin
                    </label>
                    <div className="relative">
                      <select
                        value={defaultSendCoin}
                        onChange={(e) => setDefaultSendCoin(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-200 border-0 rounded-[40px] text-black appearance-none cursor-pointer"
                      >
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="USDT">USDT</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Set Default Recieve Coin
                    </label>
                    <div className="relative">
                      <select
                        value={defaultReceiveCoin}
                        onChange={(e) => setDefaultReceiveCoin(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-200 border-0 rounded-[40px] text-black appearance-none cursor-pointer"
                      >
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="USDT">USDT</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Choose Exchange Partners
                    </label>
                    <div className="relative">
                      <select
                        value={exchangePartners}
                        onChange={(e) => setExchangePartners(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-200 border-0 rounded-[40px] text-black appearance-none cursor-pointer"
                      >
                        <option value="All">All</option>
                        <option value="Binance">Binance</option>
                        <option value="Coinbase">Coinbase</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Choose Color Theme
                    </label>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <Check className="text-[#E99F0B] text-sm" />
                      </div>
                      <div className="w-8 h-8 bg-white border border-gray-400 rounded-full "></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={enableLogo}
                        onChange={(e) => setEnableLogo(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#E99F0B]"></div>
                    </label>
                    <span className="text-sm font-bold text-black">
                      Enable CoinSwap Logo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={shortFormat}
                        onChange={(e) => setShortFormat(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-black peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-400"></div>
                    </label>
                    <span className="text-sm font-bold text-black">
                      Short Widget Format
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCreateModal(false)}
                  className="w-full bg-black text-white font-semibold py-3 rounded-full mt-6 hover:bg-gray-800 transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="bg-white p-2 px-3 rounded-[20px] shadow-lg w-90">
              <h2 className="text-[20px]  font-bold mb-4 pr-10">
                Are You Sure You Want To Delete This Widget?
              </h2>
              <div className="flex justify-center gap-1">
                <button
                  className="bg-red-600 text-white w-[50%] cursor-pointer px-4 py-2 rounded-[20px] hover:bg-red-700 transition"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-200 w-[50%] cursor-pointer px-4 py-2 rounded-[20px] hover:bg-gray-300 transition"
                  onClick={() => setshowDeleteModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-[20px] pt-4 w-[730px] h-max border border-gray-700">
            <div className="mb-6 px-6">
              <h2 className="text-black text-[30px] font-bold mb-2">
                Widget #01
              </h2>
              <p className="text-gray-400 text-sm">
                Use The Code Below To Embed This Widget Into Your Website.
              </p>
            </div>

            <div className="bg-black rounded-[20px] p-4">
              <div className="border-2 border-[#232221] rounded-[10px] p-3 mb-6">
                <code className="text-yellow-400 text-md break-all">
                  &lt;iframe Src="" Style="Border:0px #f1f1f1 None;"
                  Name="myiFrame" Scrolling="No" Frameborder="1"
                  Marginheight="0px" Marginwidth="0px" Height="400px"
                  Width="600px" Allowfullscreen&gt;&lt;/iframe&gt;
                </code>
                <button
                  onClick={handleCopyCode}
                  className="border border-white cursor-pointer text-white px-4 py-2 rounded-[20px] mt-3 flex items-center space-x-2 text-sm transition-colors"
                >
                  <span>Copy Code</span>
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full">
                <div className="bg-white rounded-3xl p-6 border border-gray-800">
                  <div className="px-4">
                    <div className="flex mb-6 rounded-[20px] bg-[#E8E6E5]">
                      <button className=" text-white w-[50%] py-3 bg-black rounded-full font-semibold text-[18px]">
                        Exchange Crypto
                      </button>
                      <button className="text-black w-[50%] py-3 rounded-full font-semibold text-[18px] relative pl-16 flex items-center">
                        Buy/Sell Crypto 💳
                        <span className="bg-orange-500 absolute top-[-8px] right-10 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          Available Soon
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-black rounded-[20px] p-4">
                    <div className="">
                      <div className="rounded-2xl p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-gray-400 text-sm mb-2">
                              You Send:
                            </div>
                            <input
                              type="text"
                              value={sendAmount}
                              onChange={(e) => setSendAmount(e.target.value)}
                              className="bg-transparent text-white text-2xl font-semibold outline-none w-full"
                            />
                          </div>

                          <div className="flex items-center bg-[#1B1A1A] rounded-[10px] px-3 py-4 ml-4">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">
                                ₿
                              </span>
                            </div>
                            <span className="text-white font-medium mr-2">
                              {sendCurrency}
                            </span>
                            <span className="text-red-500 text-xs bg-red-500/20 px-2 py-1 rounded mr-2">
                              TRX
                            </span>
                            <ChevronDown className="text-white w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center cursor-pointer">
                      <button className="bg-white p-3 rounded-full border transition-colors">
                        <RefreshCw className="w-5 h-5 text-black" />
                      </button>
                    </div>

                    <div className="">
                      <div className="rounded-2xl p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-gray-400 text-sm mb-2">
                              You Receive:
                            </div>
                            <p className="text-white text-2xl font-semibold">
                              {receiveAmount}
                            </p>
                          </div>

                          <div className="flex items-center bg-[#1B1A1A] rounded-[10px] px-3 py-1 ml-4">
                            <span className="text-white text-[30px] font-bold">
                              ♦
                            </span>
                            <span className="text-white text-xs px-2 py-1 rounded mr-2">
                              {receiveCurrency}
                            </span>
                            <ChevronDown className="text-white w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 mt-4 mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <span className="text-white mr-2">♦</span>
                        <span>Min • Amount: 0.0032427</span>
                      </div>
                      <div className="flex items-center text-[#f4a70b] text-sm">
                        <span className="text-yellow-500 mr-2">♦</span>
                        <span>Estimated • 1 BTC ~ 18.849695 ETH</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#F49F0A] to-[#F36403] text-black font-bold py-4 rounded-2xl hover:from-[#F36403] hover:to-[#F49F0A] transition-all duration-200 cursor-pointer">
                      View Offers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
