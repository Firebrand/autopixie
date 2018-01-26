(function () {


    chrome.storage.local.get('pixiescript', ret => {
        if (typeof(ret.pixiescript) !== "undefined" && ret.pixiescript.length > 1) {
            eval(ret.pixiescript);
        }
        else {
            var defaultScript = `var toolbar = document.body.querySelector(".toolbar"); 
if (toolbar !== null) toolbar.style.display = 'none';

document.body.setAttribute("style","padding-top:0px");

var errorMsg = document.body.querySelector(".messages--error");
if (errorMsg !== null) errorMsg.style.display = 'none';`;

            chrome.storage.local.set({
                'pixiescript': defaultScript
              });

              eval(defaultScript);
        }
        
    });


}());