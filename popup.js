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
  var popup_div = document.getElementById('message_result');
  popup_div.innerText = 'the number of links on this page is: '+ message.link_count;
  console.log('popup.js got the message', message)
}
