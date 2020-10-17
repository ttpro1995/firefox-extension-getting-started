console.log(window.location.href);
console.log("window.location.href = " + window.location.href);
console.log("main.js MEOWWWW this is a log of content script");

var data = {"timestamp": Math.floor(Date.now() / 1000),"url":window.location.href};
var yourUrl= "https://requestbin.io/1i5gjg51";
var xhr = new XMLHttpRequest();
xhr.open("POST", yourUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));