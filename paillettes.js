chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "simple"){
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("simple.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    if (request.todo == "night"){
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("night.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    if (request.todo == "insatisfait"){
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("colors.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    if (request.todo == "game"){
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("arcade.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    if (request.todo == "chaos"){
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("chaos.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    if (request.todo == "world"){
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("reset.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    };
});