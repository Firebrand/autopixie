
var tabsStatus = {}
window.scriptLastRun = 0;


chrome.browserAction.setIcon({path: 'icon-16-bw.png'});


chrome.browserAction.onClicked.addListener(function(tab) {
    const tabId = tab.id;

    if (!tabsStatus[tabId] || tabsStatus[tabId] !== true){
        tabsStatus[tabId] = true;
        chrome.browserAction.setIcon({path: 'icon-16.png'});
    } else {
        tabsStatus[tabId] = false;
        chrome.browserAction.setIcon({path: 'icon-16-bw.png'});
    }

    chrome.tabs.executeScript(null, {
        code: `var autopixie_status = ${tabsStatus[tabId]};`
      }, () => {
        chrome.tabs.executeScript(null, {
          file: "pixiedust.js"
        })
    });

 });


 chrome.tabs.onActivated.addListener(function(activeInfo){
    if (tabsStatus[activeInfo.tabId]!==true){
        chrome.browserAction.setIcon({path: 'icon-16-bw.png'});
        
    } else {
        chrome.browserAction.setIcon({path: 'icon-16.png'});
    }

    

 });

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    var d = new Date();
    var currentTime = Math.ceil(d.getTime() / 1000);

    if (tabsStatus[tabId]===true && window.scriptLastRun!==currentTime && window.scriptLastRun!==currentTime+1 && window.scriptLastRun!==currentTime+2){
      chrome.tabs.executeScript(tabId, {file: "rundust.js"} );

      window.scriptLastRun = currentTime;
    }
});
