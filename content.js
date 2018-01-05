console.log('logged from content script')

chrome.runtime.onMessage.addListener(gotTheMessage)

function gotTheMessage(message, sender, sendResponse) {
  console.log('message: ',message)
  chrome.runtime.sendMessage(message, function(response) {
    console.log('i sent a message to background.js');
  });
}
