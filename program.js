(function () {


    chrome.storage.local.get('pixiescript', ret => {
        eval(ret.pixiescript);
    });


}());