// define language reload anchors
var dataReload = document.querySelectorAll("data-reload");

// korean translation
var language = {
    eng: {
        chooselang: "Choose your Adventure Language",
        soundadv: "Please turn sound up for full experience",
        startlink: "Start your Adventure"
    },
    ko: {
        chooselang: "모험 언어를 선택하십시오",
        soundadv: "충분한 경험을 위해 소리를 크게 해 주세요",
        startlink: "모험을 시작"
    }
};

// defines language using window hash
if (window.location.hash) {
    if (location.hash.substring(1) === "eng") {
        // remove all hash tags and reload page to default text
        window.location.href = window.location.toString().split(/\?|#/)[0];
      }
    if (location.hash.substring(1) === "ko") {
        $("[data-language=chooselang").text(language.ko.chooselang)
        $("[data-language=soundadv]").text(language.ko.soundadv);
        $("[data-language=startlink]").text(language.ko.startlink);
        $("[data-language=startlink]").attr("href", "app/" + location.hash);
    }
};

function timeFunction() {
    setTimeout(function(){ history.go(0); }, 200);
  }
