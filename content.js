console.log('logged from content script')

let link_count = document.body.querySelectorAll('a').length

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};

// Event listener
document.addEventListener('RW759_connectExtension', function(e) {
    // e.detail contains the transferred data (can be anything, ranging
    // from JavaScript objects to strings).
    // Do something, for example:
    alert(e.detail);
});

// https://stackoverflow.com/questions/9915311/chrome-extension-code-vs-content-scripts-vs-injected-scripts
// https://stackoverflow.com/questions/9602022/chrome-extension-retrieving-gmails-original-message
// https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script/9517879#9517879
// https://developer.chrome.com/extensions/content_scripts#execution-environment


// see first reply here regarding external JS in a chrome extension: https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/LIH7LGXeQHo

// document.querySelector('#GlobalNav').addEventListener("load", function() {
//   var patientId = CurrentPatient.V1.GetCurrentPatient();
//   console.log('patientid:',patientId)
// })

chrome.runtime.onMessage.addListener(gotTheMessage)

function gotTheMessage(message, sender, sendResponse) {
  chrome.runtime.sendMessage({link_count: link_count}, function(response) {
    console.log('link_count',link_count)
    console.log('i sent a message to background.js');
    // document.querySelector('#GlobalNav').addEventListener("load", function() {
    //   var patientId = CurrentPatient.V1.GetCurrentPatient();
    //   console.log('patientid:',patientId)
    // })
  });
}
