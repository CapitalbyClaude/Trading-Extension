console.log("Capital by Claude content script loaded");

// MOCK trade capture (replace later with real DOM parsing)
function mockTrade() {
  const trade = {
    terminal: window.location.hostname,
    pair: "SOL/USDC",
    side: Math.random() > 0.5 ? "BUY" : "SELL",
    size: (Math.random() * 2).toFixed(2),
    price: (Math.random() * 100).toFixed(2),
    pnl: (Math.random() * 0.5 - 0.25).toFixed(3)
  };

  chrome.runtime.sendMessage({
    type: "TRADE_EVENT",
    payload: trade
  });
}

// simulate trades every 10s
setInterval(mockTrade, 10000);
