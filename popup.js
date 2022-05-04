$(function(){
    $('#simple').click(function(){      
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "simple"});
        });
   });
    $('#night').click(function(){      
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "night"});
        });
   });
    $('#insatisfait').click(function(){      
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "insatisfait"});
        });
   });
    $('#game').click(function(){      
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "game"});
        });
   });
    $('#chaos').click(function(){      
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "chaos"});
        });
   });
    $('#world').click(function(){      
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "world"});
        });
   });
});
