console.log("i'm from popup.js")

sendPopupMessage()

chrome.runtime.onMessage.addListener(gotTheMessage)

function sendPopupMessage() {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {greeting: "tacos"});
  });
}

function gotTheMessage(message, sender, sendResponse) {
  alert(message.greeting)
  console.log('popup.js got the message', message)
}
