console.log('hola from background')

chrome.runtime.onMessage.addListener(gotTheMessage)

function gotTheMessage(message, sender, sendResponse) {
  console.log('background.js got the message:', message)
  chrome.runtime.sendMessage(message, function(response) {
    console.log('i sent a message to popup.js', message);
  });
}
