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
  try {
    document.getElementById("output").value = document.getElementById(
      "screen"
    ).value;
    document.getElementById("screen").value = eval(
      document.getElementById("screen").value
    );
    ANS = document.getElementById("screen").value;
    document.getElementById("output").value += "=" + ANS;
  } catch (e) {
    document.getElementById("output").value =
      document.getElementById("screen").value + "=Error";
  }
}

function addANS() {
  let str = document.getElementById("screen").value;
  document.getElementById("screen").value =
    str === "0" && str.length === 1
      ? ANS
      : document.getElementById("screen").value + ANS;
}

function CE() {
  let str = document.getElementById("screen").value;
  document.getElementById("screen").value =
    str.length === 1 ? 0 : str.substring(0, str.length - 1);
}

function reset() {
  document.getElementById("screen").value = "0";
}
