export const getCurrentTab = async (): Promise<chrome.tabs.Tab> => {
  const [firstTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  return firstTab;
};
