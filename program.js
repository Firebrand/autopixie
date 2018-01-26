(function () {


    chrome.storage.local.get('pixiescript', ret => {
        if (ret.pixiescript.length > 1) {
            eval(ret.pixiescript);
        } else 
        {
            var toolbar = document.body.querySelector(".toolbar"); 
            if (toolbar !== null) toolbar.style.display = 'none';

            document.body.setAttribute("style","padding-top:0px");

            var errorMsg = document.body.querySelector(".messages--error");
            if (errorMsg !== null) errorMsg .style.display = 'none';
        }
        
    });


}());