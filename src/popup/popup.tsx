import { getCurrentTab } from "@/utils/chrome";
import React from "react";

const Popup = () => {
  const handleClick = async () => {
    const tab = await getCurrentTab();
    chrome.tabs.sendMessage(tab.id, {
      value: "openPopup",
    });
  };

  return (
    <div className="bg-white p-8 flex flex-col">
      <h2 className="text-lg font-light text-slate-900">
        React Chrome Extension
      </h2>
      <button
        className="mt-2 bg-slate-900 hover:bg-slate-800 rounded-md py-2 px-4 cursor-pointer text-white"
        onClick={handleClick}
      >
        Open content page
      </button>
    </div>
  );
};

export default Popup;
