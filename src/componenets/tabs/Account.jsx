import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { Edit, Copy, Trash2, Eye, EyeOff, Plus, X } from "lucide-react";

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const [websiteLinks, setWebsiteLinks] = useState([
    "https://docs.google.com/spreadsheets/U1js9Jt83&deje9h&3he*%B...",
    "https://docs.google.com/spreadsheets/U1js9Jt83&deje9h&3he*%B...",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState(null);
  const [deletingLink, setDeletingLink] = useState(null);
  const [rememberChoice, setRememberChoice] = useState(false);
  const [referralLinks, setReferralLinks] = useState([
    {
      id: 1,
      name: "Ref Link 01",
      url: "https://coinoswap.com?hs4+40sj48hsd938@h...",
    },
    {
      id: 2,
      name: "Ref Link 02",
      url: "https://coinoswap.com?hs4+40sj48hsd938@h...",
    },
    {
      id: 3,
      name: "Ref Link 03",
      url: "https://coinoswap.com?hs4+40sj48hsd938@h...",
    },
  ]);

  const addWebsiteLink = () => {
    setWebsiteLinks([...websiteLinks, ""]);
  };

  const removeWebsiteLink = (index) => {
    setWebsiteLinks(websiteLinks.filter((_, i) => i !== index));
  };

  const openEditModal = (link) => {
    setEditingLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingLink(null);
  };

  const openDeleteModal = (link) => {
    setDeletingLink(link);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingLink(null);
    setRememberChoice(false);
  };

  const confirmDelete = () => {
    if (deletingLink) {
      setReferralLinks(
        referralLinks.filter((link) => link.id !== deletingLink.id)
      );
      if (rememberChoice) {
        console.log("User chose to remember this choice");
      }
    }
    closeDeleteModal();
  };

  const handleSaveChanges = () => {
    setReferralLinks((prevLinks) =>
      prevLinks.map((link) => (link.id === editingLink.id ? editingLink : link))
    );
    closeModal();
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  const handleDelete = (link) => {
    openDeleteModal(link);
  };
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200">
        <div className="p-6 pb-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Referral Link
          </h2>
          <p className="text-gray-600 mb-6">
            Earn By Recommending Crypto Swaps Through CoinoSwap. Share Your
            Unique Affiliate Link, And Earn In Bitcoin For Every Transaction
            Made Through It.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Create Ref Link
          </button>
        </div>
        <div className="">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-3 bg-black p-4 rounded-[20px]">
              {referralLinks.map((link) => (
                <div
                  key={link.id}
                  className="bg-gray-50 rounded-full p-[2px] flex justify-between"
                >
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {link.name}
                  </span>
                  <div className="bg-black flex items-center justify-between py-1 gap-4 rounded-[20px]">
                    <div className="flex-1 mx-4">
                      <span className="text-yellow-600 text-sm">
                        {link.url}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditModal(link)}
                        className="p-2 rounded-full transition-colors"
                      >
                        <Edit className="w-4 h-4 cursor-pointer text-white" />
                      </button>
                      <button
                        onClick={() => handleCopy(link.url)}
                        className="p-2 rounded-full transition-colors"
                      >
                        <Copy className="w-4 h-4 cursor-pointer text-white" />
                      </button>
                      <button
                        onClick={() => handleDelete(link)}
                        className="p-2 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4 cursor-pointer text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 cursor-pointer w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Edit Referral Link
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={editingLink?.name || ""}
                      onChange={(e) =>
                        setEditingLink({
                          ...editingLink,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#E2E2E2] rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter link name"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSaveChanges}
                  className="w-full mt-3 bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
          {isDeleteModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="bg-white rounded-2xl p-6 pt-4 w-full max-w-md relative">
                <h3 className="text-[28px] font-extrabold text-gray-900 mb-2 leading-9">
                  Are You Sure You Want To Delete This Referral Link?
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {deletingLink?.url}
                </p>
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberChoice}
                    onChange={(e) => setRememberChoice(e.target.checked)}
                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember And Delete Without Confirmation
                  </label>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={confirmDelete}
                    className="flex-1 cursor-pointer bg-red-500 text-white py-3 rounded-full font-medium hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                  <button
                    onClick={closeDeleteModal}
                    className="flex-1 cursor-pointer bg-gray-200 text-gray-800 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200">
        <div className="p-6 pb-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">API Keys</h2>
          <p className="text-gray-600 mb-6">
            An API Key Is A Unique Identifier Used By Computer Applications To
            Securely Access Our API Services. This Key Grants You Access To
            CoinoSwap's API Functionality, Which You Can Explain In Full Detail
            In Our <span className="text-yellow-600">API Documentation</span>.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Create Ref Link
          </button>
        </div>
        <div className="space-y-3 bg-black p-4 rounded-[20px]">
          {[1, 2].map((num) => (
            <div
              key={num}
              className="bg-gray-50 rounded-full p-[2px] flex justify-between"
            >
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                API Key 0{num}
              </span>
              <div className="bg-black flex items-center justify-between py-1 gap-42 rounded-[20px]">
                <div className="flex-1 mx-4">
                  <span className="text-yellow-600 text-sm">
                    7ushf78HWER-Hjqw8&4i4-bhaHJwhgj29{" "}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full">
                    <Copy className="w-4 h-4 cursor-pointer text-white" />
                  </button>
                  <button className="p-2 rounded-full">
                    <Trash2 className="w-4 h-4 cursor-pointer text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Account Settings
        </h2>
        <div className="mb-6">
          <label className="block text-gray-900 font-semibold mb-3">
            Affiliate Email
          </label>
          <div className="bg-black rounded-full p-1 flex items-center">
            <input
              type="email"
              value="draztik99@gmail.com"
              className="flex-1 bg-transparent px-4 py-2 text-yellow-600 text-sm outline-none"
              readOnly
            />
            <button className="p-2 pr-4 rounded-full">
              <Edit className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 font-semibold mb-3">
            Affiliate Password
          </label>
          <div className="bg-black rounded-full p-1 flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value="••••••••••••••••••••••••••••"
              className="flex-1 bg-transparent px-4 py-2 text-yellow-600 text-sm outline-none"
              readOnly
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 rounded-full"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-white" />
                ) : (
                  <Eye className="w-4 h-4 text-white" />
                )}
              </button>
              <button className="p-2 pr-4 rounded-full">
                <Edit className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-gray-900 font-medium mb-3">
            Links To Your Website Or Blog
          </label>
          <div className="space-y-3 mb-4">
            {websiteLinks.map((link, index) => (
              <div
                key={index}
                className="bg-black rounded-full p-1 flex items-center"
              >
                <input
                  type="text"
                  value={link}
                  className="flex-1 bg-transparent px-4 py-2 text-yellow-600 text-sm outline-none"
                  placeholder="Enter website URL"
                />
                <button
                  onClick={() => removeWebsiteLink(index)}
                  className="p-2 pr-4 rounded-full"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addWebsiteLink}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center mb-4"
          >
            <Plus className="w-5 h-5 text-black" />
          </button>
          <p className="text-gray-600 text-sm">
            Please Provide Links To Your Website Or Blog That You Will Use To
            Direct Traffic And Earn Revenue In The CoinoSwap Affiliate Program.
          </p>
        </div>
      </div>
      <div className="bg-[#222120] rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6">
          Two-Factor Authentication
        </h2>
        <button className="text-white px-6 py-3 border border-white rounded-full font-medium hover:bg-gray-700 transition-colors">
          Enable Google Authentication
        </button>
      </div>
    </>
  );
}
