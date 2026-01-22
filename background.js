chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "TRADE_EVENT") {
      console.log("📈 Trade captured:", message.payload);
  
      // Store locally (temporary for hackathon)
      chrome.storage.local.get({ trades: [] }, (result) => {
        const trades = result.trades;
        trades.push({
          ...message.payload,
          timestamp: Date.now()
        });
  
        chrome.storage.local.set({ trades });
      });
  
      sendResponse({ status: "ok" });
    }
  });
  