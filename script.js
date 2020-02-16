let ANS = 0;

function display(val) {
  document.getElementById("screen").value += val;
}

function number(val) {
  let str = document.getElementById("screen").value;
  document.getElementById("screen").value =
    str === "0" && str.length === 1
      ? val
      : document.getElementById("screen").value + val;
}

function solve() {
  document.getElementById("screen").value = eval(
    document.getElementById("screen").value
  );
  ANS = document.getElementById("screen").value;
}

function addANS() {
  document.getElementById("screen").value += ANS;
}

function CE() {
  let str = document.getElementById("screen").value;
  document.getElementById("screen").value =
    str.length === 1 ? 0 : str.substring(0, str.length - 1);
}
