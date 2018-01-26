(function (autopixie_status) {

    const pixieDust = document.body.querySelector("#pixiedust");

    if (pixieDust !== null) {
      
        if (autopixie_status===true) {
            chrome.storage.local.get('pixiescript', ret => {
                pixieDust.value = ret.pixiescript;
                pixieDust.setAttribute("style","background-color:#FFFFE7; width: 80%; height:80%");
                alert ("See my pixie dust!");
            });
        } else {
            chrome.storage.local.set({
                'pixiescript': pixieDust.value
              });
              pixieDust.value='';
              pixieDust.setAttribute("style","background-color:white; width: 20%; height:20%");
              alert ("Thanks for the new pixie dust!");
        }

    } else {
        location.href = location.href;
    }


}(autopixie_status));