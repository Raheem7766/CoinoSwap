import React, { useState } from "react";
import { Copy, Trash2, X } from "lucide-react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../../assets/Banner.png";

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonName, setButtonName] = useState("Button #2");
  const [selectedSize, setSelectedSize] = useState("250×40");
  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sizes = [
    { label: "250×40", value: "250×40" },
    { label: "750×40", value: "750×40" },
    { label: "370×40", value: "370×40" },
  ];

  const iframeCode =
    '<iframe Src="" Style="Border:0px #f1f1f1 None;" Name="myiFrame" Scrolling="No" Frameborder="1" Marginheight="0px" Marginwidth="0px" Height="400px" Width="600px" Allowfullscreen></iframe>';

  const handleCopyCode = () => {
    const textarea = document.createElement("textarea");
    textarea.value = iframeCode;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
    document.body.removeChild(textarea);
  };

  const handleDelete = () => {
    console.log("Widget deleted");
    setShowModal(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-[20px] p-4 bg-black">
        <div className="flex w-full gap-4">
          <div className="w-max h-max bg-white py-3 pb-0 rounded-[20px] border border-white">
            <div className="px-3">
              <button
                className="w-[600px] bg-black text-white cursor-pointer py-1 px-4 rounded-full mb-4 font-medium"
                onClick={openModal}
              >
                + Create New Banner
              </button>
            </div>
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <div className="bg-white rounded-2xl py-2 pb-4 pt-2 w-full max-w-lg relative">
                  <div className="px-4">
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 cursor-pointer w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <h2 className="text-xl font-bold text-center text-black mb-6">
                      Create Banner
                    </h2>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-black mb-2">
                        Banner Name
                      </label>
                      <input
                        type="text"
                        value={buttonName}
                        onChange={(e) => setButtonName(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 rounded-[40px] border-none outline-none"
                        placeholder="Enter button name"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-black mb-2">
                        Choose Size
                      </label>
                      <div className="flex gap-3 ">
                        {sizes.map((size) => (
                          <label
                            key={size.value}
                            className={`flex items-center justify-center px-3 gap-1 cursor-pointer rounded-[40px] ${
                              selectedSize === size.value
                                ? "bg-[#F4A70B] text-black"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            <input
                              type="radio"
                              name="size"
                              value={size.value}
                              checked={selectedSize === size.value}
                              onChange={(e) => setSelectedSize(e.target.value)}
                              className=""
                            />
                            <span
                              className={`py-1 text-sm font-medium${
                                selectedSize === size.value
                                  ? " text-black"
                                  : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {size.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-1">
                    <label className="block text-sm font-bold text-black mb-1 px-4">
                      Preview
                    </label>
                    <div className="pb-3 px-3 w-full">
                      <img src={banner} alt="banner" className="w-full" />
                    </div>
                  </div>
                  <div className="px-4">
                    <button className="w-full bg-black text-white py-1 rounded-full font-medium hover:bg-gray-800">
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

            <div className="bg-black rounded-[20px] p-4 py-4">
              <div className="flex items-center justify-between text-white w-full bg-white rounded-[40px] border border-white pl-5">
                <AiOutlinePicture className="text-black" size={28} />

                <div className="flex items-center justify-between px-4 w-[90%] py-4 bg-black rounded-[40px]">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400">Banner #01</span>
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

          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-[20px] pt-4 w-[730px] h-max border border-gray-700">
              <div className="mb-6 px-6">
                <h2 className="text-black text-[30px] font-bold mb-2">
                  Banner #01 (360x60)
                </h2>
                <p className="text-gray-400 text-sm">
                  Use the code below to embed This widget Into your website.
                </p>
              </div>

              <div className="bg-black rounded-[20px] p-4">
                <div className="border-2 border-[#232221] rounded-[10px] p-3 mb-6">
                  <code className="text-yellow-400 text-md break-all">
                    {iframeCode}
                  </code>
                  <button
                    className="border border-white cursor-pointer text-white px-4 py-2 rounded-[20px] mt-3 flex items-center space-x-2 text-sm transition-colors"
                    onClick={handleCopyCode}
                  >
                    <span>Copy Code</span>
                    <Copy className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>
                <div className="flex items-center justify-center w-full">
                  <img src={banner} alt="banner" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}
