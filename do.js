function calc() {
    var lower = "qwertyuiopasdfghjklzxcvbnm";
    var upper = "MNBVCXZLKJHGFDSAPOIUYTREWQ";
    var numbs = "1234567890";
    var speci = "!@#$%^&*()?";
    var num = 0;
    var l = false;
    var u = false;
    var n = false;
    var s = false;
    var pass = "";

    for (let i = 0; i < 10; i++){
        num = Math.floor(4*Math.random());
        if(num == 0){
            pass = pass + lower.charAt(Math.floor(lower.length * Math.random()));
            l = true;
        }
        else if (num == 1){
            pass = pass + upper.charAt(Math.floor(upper.length * Math.random()));
            u = true;
        }
        else if (num == 2){
            pass = pass + numbs.charAt(Math.floor(numbs.length * Math.random()));
            n = true;
        }
        else {
            pass = pass + speci.charAt(Math.floor(speci.length * Math.random()));
            s = true;
        }

    }
    if(!l){
        pass = pass + lower.charAt(Math.floor(lower.length * Math.random()));
    }
    if(!u){
        pass = pass + upper.charAt(Math.floor(upper.length * Math.random()));
    }
    if(!n){
        pass = pass + numbs.charAt(Math.floor(numbs.length * Math.random()));
    }
    if(!s){
        pass = pass + speci.charAt(Math.floor(speci.length * Math.random()));
    }

    $("#password").text(pass);
}

function clrChgr() {
    setInterval(function () {
        var r = Math.floor(255 * Math.random());
        var g = Math.floor(255 * Math.random());
        var b = Math.floor(255 * Math.random());
        var r2 = Math.floor(255 * Math.random());
        var g3 = Math.floor(255 * Math.random());
        var b4 = Math.floor(255 * Math.random());
        var colorStr = "rgb(" + r + "," + g + "," + b + ")";
        var colorStr2 = "rgb(" + r2 + "," + g3 + "," + b4 + ")";
        $("#text-title").css("color", colorStr);
        $("#main-subtitle").css("color", colorStr2);
    }, 175);
}

window.onload = function () {
    clrChgr();
}

$("#generate-password").click(function () {
    calc();
    $("#getpass").css("display", "none");
    $("#showpass").css("display", "inline");
});

$("#reset-password").click(function () {
    $("#showpass").css("display", "none");
    $("#getpass").css("display", "inline");
});