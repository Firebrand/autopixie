
var autopixie_status = false;
window.scriptLastRun = 0;


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
    var d = new Date();
    var currentTime = Math.ceil(d.getTime() / 1000);
    console.log('Current time:'+currentTime);
    console.log('Script last run:'+window.scriptLastRun);

    if (autopixie_status===true && window.scriptLastRun!==currentTime && window.scriptLastRun!==currentTime+1 && window.scriptLastRun!==currentTime+2){
      chrome.tabs.executeScript(tabId, {file: "rundust.js"} );

      window.scriptLastRun = currentTime;
    }
});