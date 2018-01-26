(function (autopixie_status) {

    var windowUrl = window.location.href;

    var magicPage = windowUrl.includes("pixiedust.html");


    if (magicPage === true) {
      
 

        if (autopixie_status===true) {
            var textarea = document.createElement("textarea");

            chrome.storage.local.get('pixiescript', ret => {
                textarea.value = ret.pixiescript;
                textarea.id = "pixiedustarea";
                textarea.setAttribute("style","background-color:#FFFFE7; width: 80%; height:80%");
                document.body.appendChild(textarea);
                alert ("See my pixie dust!");
            });
        } else {
            var textarea = document.body.querySelector("#pixiedustarea");
            chrome.storage.local.set({
                'pixiescript': textarea.value
              });
              document.body.removeChild(textarea);
              alert ("Thanks for the new pixie dust!");
        }

    } else {
        location.href = location.href;
    }


}(autopixie_status));