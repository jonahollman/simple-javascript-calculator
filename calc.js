$(document).ready(function() {
  $(".numberEntry").html(0);
})

var currentNumArr = [];
var currentNum = 0;
var storageNum = 0;
var storageFunc = "";

function trim() {
  if ((currentNumArr.length > 8 && currentNumArr.length <= 11) || (currentNum.toString().length > 8 && currentNum.toString().length <= 11)) {
    $(".numberEntry").css("font-size", "1.9em");
  } else if ((currentNumArr.length > 11 && currentNumArr.length <= 15) || (currentNum.toString().length > 11 && currentNum.toString().length <= 15)) {
    $(".numberEntry").css("font-size", "1.5em");        
  } else if (currentNumArr.length > 15 || currentNum.toString().length > 15) {
    $(".numberEntry").css("font-size", "1.1em");    
  } else {
    $(".numberEntry").css("font-size", "2.5em");
  }
}

$("#one").click(function() {
  currentNumArr.push(1);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#two").click(function() {
  currentNumArr.push(2);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#three").click(function() {
  currentNumArr.push(3);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#four").click(function() {
  currentNumArr.push(4);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#five").click(function() {
  currentNumArr.push(5);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#six").click(function() {
  currentNumArr.push(6);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#seven").click(function() {
  currentNumArr.push(7);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#eight").click(function() {
  currentNumArr.push(8);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#nine").click(function() {
  currentNumArr.push(9);
  trim();
  $(".numberEntry").html(currentNumArr.join(''));
});

$("#zero").click(function() {
  if (currentNumArr != ['0'] && currentNumArr != [0] && $(".numberEntry").html() != 0) {
    currentNumArr.push('0');
    trim();
    $(".numberEntry").html(currentNumArr.join(''));
  }
});

$("#sqrt").click(function() {
  if (storageNum) {
    currentNum = Math.round(Math.sqrt(Number(storageNum)) * 1000000) / 1000000;
  } else {
    currentNum = Math.round(Math.sqrt(Number(currentNumArr.join(''))) * 1000000) / 1000000;
  }
  $(".numberEntry").css("font-size", "2.5em");
  $(".numberEntry").html(currentNum);
  currentNumArr = [];
  storageFunc = "";
  storageNum = currentNum;
});

$("#clearOne").click(function() {
  if (currentNumArr.length > 1) {
    currentNumArr.pop();  
    trim();
    $(".numberEntry").html(currentNumArr.join(''));
  } else {
    currentNumArr = [];
    trim();
    $(".numberEntry").html(0);
  }
});

$("#clearAll").click(function() {
  currentNumArr = [];
  storageNum = 0;
  trim();
  $(".numberEntry").html(0);
});

$("#multiply").click(function() {
  if (currentNumArr.length > 0) {
    storageNum = Number(currentNumArr.join(''));
  } else {
    storageNum = currentNum;
  }
  storageFunc = "multiply";
  currentNumArr = [];
});

$("#divide").click(function() {
  if (currentNumArr.length > 0) {
    storageNum = Number(currentNumArr.join(''));
  } else {
    storageNum = currentNum;
  }
  storageFunc = "divide";
  currentNumArr = [];
});

$("#subtract").click(function() {
  if (currentNumArr.length > 0) {
    storageNum = Number(currentNumArr.join(''));
  } else if (currenNumArr == [] && currentNum === 0) {
    currentNumArr.push('-');
  } else {
    storageNum = currentNum;
  }
  storageFunc = "subtract";
  currentNumArr = [];
});

$("#add").click(function() {
  if (currentNumArr.length > 0) {
    storageNum = Number(currentNumArr.join(''));
  } else {
    storageNum = currentNum;
  }
  storageFunc = "add";
  currentNumArr = [];
});

$("#point").click(function() {
  if (currentNumArr.indexOf('.') == -1) {
    currentNumArr.push('.');
    trim();
    $(".numberEntry").html(currentNumArr.join(''));
  }
});

$("#equals").click(function() {
  trim();
  if (storageFunc == "multiply") {
    currentNum = Math.round(storageNum * Number(currentNumArr.join('')) * 1000000) / 1000000;
    currentNumArr = [];
    $(".numberEntry").html(currentNum);
    storageFunc = "";
    storageNum = 0;
  } else if (storageFunc == "divide") {
    currentNum = Math.round((storageNum / Number(currentNumArr.join(''))) * 1000000) / 1000000;
    currentNumArr = [];
    $(".numberEntry").html(currentNum);
    storageFunc = "";
    storageNum = 0;
  } else if (storageFunc == "subtract") {
    currentNum = Math.round((storageNum - Number(currentNumArr.join(''))) * 1000000) / 1000000;
    currentNumArr = [];
    $(".numberEntry").html(currentNum);
    storageFunc = "";
    storageNum = 0;
  } else if (storageFunc == "add") {
    currentNum = Math.round((storageNum + Number(currentNumArr.join(''))) * 1000000) / 1000000;
    currentNumArr = [];
    $(".numberEntry").html(currentNum);
    storageFunc = "";
    storageNum = 0;
  }
});