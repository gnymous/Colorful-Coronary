const arteryArray = [
  "LM",
  "LAD",
  "RCA",
  "LCX",
  "RAMUS",
  "D1",
  "D2",
  "S1",
  "S2",
  "EOM",
  "OM1",
  "OM2",
  "Conus",
  "RV",
  "AM",
  "AVN",
  "PDA",
  "PLV",
  "Left_PDA",
  "Left_PLV",
];
let colorPrimary = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let colorInfo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let colorDanger = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function colorPri() {
  changeColorPri(colorPrimary);
}
function colorInf() {
  changeColorInf(colorInfo);
}
function colorDan() {
  changeColorDan(colorDanger);
}
function changeColorPri(colorName) {
  for (let i = 0; i < arteryArray.length; i++) {
    const element = document.getElementById(arteryArray[i]);
    for (let j = 0; j < element.childElementCount; j++) {
      if (colorName[i]) {
        element.children[j].setAttribute("style", "fill:#0B5ED7");
      } else {
        element.children[j].setAttribute("style", "fill:black");
      }
    }
  }
}
function changeColorInf(colorName) {
  for (let i = 0; i < arteryArray.length; i++) {
    const element = document.getElementById(arteryArray[i]);
    for (let j = 0; j < element.childElementCount; j++) {
      if (colorName[i]) {
        element.children[j].setAttribute("style", "fill:#31D2F2");
      } else {
        element.children[j].setAttribute("style", "fill:black");
      }
    }
  }
}
function changeColorDan(colorName) {
  for (let i = 0; i < arteryArray.length; i++) {
    const element = document.getElementById(arteryArray[i]);
    for (let j = 0; j < element.childElementCount; j++) {
      if (colorName[i]) {
        element.children[j].setAttribute("style", "fill:#BB2D3B");
      } else {
        element.children[j].setAttribute("style", "fill:black");
      }
    }
  }
}

$(document).ready(function () {
  var arteryArrays = [
    "LM",
    "LAD",
    "RCA",
    "LCX",
    "RAMUS",
    "D1",
    "D2",
    "S1",
    "S2",
    "EOM",
    "OM1",
    "OM2",
    "Conus",
    "RV",
    "AM",
    "AVN",
    "PDA",
    "PLV",
    "Left_PDA",
    "Left_PLV",
  ];
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  arteryArrays.forEach((element, i) => {
    $(`#${element}`).on("mouseover", function (e) {
      e.target.setAttribute("style", "fill:#BB2D3B");
    });
  });
});