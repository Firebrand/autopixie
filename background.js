
var autopixie_status = false;
chrome.browserAction.setIcon({path: 'icon-16-bw.png'});


chrome.browserAction.onClicked.addListener(function(tab) {

    if (autopixie_status===false){
        autopixie_status = true;
        chrome.browserAction.setIcon({path: 'icon-16.png'});
    } else {
        autopixie_status = false;
        chrome.browserAction.setIcon({path: 'icon-16-bw.png'});
    }

    chrome.tabs.executeScript(null, {
        code: `var autopixie_status = ${autopixie_status};`
      }, () => {
        chrome.tabs.executeScript(null, {
          file: "pixiedust.js"
        })
    });

 });


chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (autopixie_status===true){
      chrome.tabs.executeScript(tabId, {file: "rundust.js"} );
    }
});