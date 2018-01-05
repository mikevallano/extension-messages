console.log('logged from content script')

let link_count = document.body.querySelectorAll('a').length

console.log('link_count',link_count)

chrome.runtime.onMessage.addListener(gotTheMessage)

function gotTheMessage(message, sender, sendResponse) {
  chrome.runtime.sendMessage({link_count: link_count}, function(response) {
    console.log('i sent a message to background.js');
  });
}
