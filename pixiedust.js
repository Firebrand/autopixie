(function (autopixie_status) {

    const pixieDust = document.body.querySelector("#pixiedust");

    if (pixieDust !== null) {

        if (autopixie_status===true) {
            chrome.storage.local.get('pixiescript', ret => {
                pixieDust.value = ret.pixiescript;
            });
        } else {
            chrome.storage.local.set({
                'pixiescript': pixieDust.value
              });
        }





    }


}(autopixie_status));