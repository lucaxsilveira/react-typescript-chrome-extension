import React, { useState } from "react";

const Teste = () => {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(false);

  const sendMessage = () => {
    chrome.runtime.sendMessage({
      value: "hello from content script",
    });
  };

  chrome.runtime.onMessage.addListener((message) => {
    setMessage(message.value);
    if (message.value === "openPopup") {
      setOpen(true);
    }
  });

  if (!open) return null;

  return (
    <div className="w-[400px] fixed bg-blue-500 text-white p-4 top-8 left-8 z-[9999999999] rounded-lg">
      Page content
      <p className="my-4">Message: {message}</p>
      <button
        className="bg-slate-900 px-4 py-2 text-white rounded-lg hover:bg-slate-800 pointer"
        onClick={sendMessage}
      >
        Send message to background script
      </button>
    </div>
  );
};

export default Teste;
