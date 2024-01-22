let demo = document.getElementById("demo");
let borderRadius = document.getElementById("borderRadius");
let opacity = document.getElementById("opacity");
let heightInput = document.querySelector(".heightInput");
let height = document.getElementById("height");
let widthInput = document.querySelector(".widthInput");
let width = document.getElementById("width");
let rotate = document.getElementById("rotate");
let translateX = document.getElementById("translateX");
let translateY = document.getElementById("translateY");
let scale = document.getElementById("scale");
let skewX = document.getElementById("skewX");
let skewY = document.getElementById("skewY");
let btn = document.querySelector(".btn");

console.log(heightInput.max);

var bordervalue = document.getElementById("borderRadius");
var output = document.getElementById("borderRange");
output.innerHTML = bordervalue.value;
bordervalue.oninput = function () {
  output.innerHTML = this.value;
};

var opacityValue = document.getElementById("opacity");
var opacityRange = document.getElementById("opacityRange");
opacityRange.innerHTML = opacityValue.value;
opacityValue.oninput = function () {
  opacityRange.innerHTML = this.value;
};

var widthOutput = document.getElementById("width");
var widthRange = document.getElementById("widthRange");
widthRange.innerHTML = widthOutput.value;
widthOutput.oninput = function () {
  widthRange.innerHTML = this.value;
};

var heightOutput = document.getElementById("height");
var heightRange = document.getElementById("heightRange");
heightRange.innerHTML = heightOutput.value;
heightOutput.oninput = function () {
  heightRange.innerHTML = this.value;
};

var rotateOutput = document.getElementById("rotate");
var rotateRange = document.getElementById("rotateRange");
rotateRange.innerHTML = rotateOutput.value;
rotateOutput.oninput = function () {
  rotateRange.innerHTML = this.value;
};

var translateXOutput = document.getElementById("translateX");
var translateXRange = document.getElementById("translateXRange");
translateXRange.innerHTML = translateXOutput.value;
translateXOutput.oninput = function () {
  translateXRange.innerHTML = this.value;
};

var translateYOutput = document.getElementById("translateY");
var translateYRange = document.getElementById("translateYRange");
translateYRange.innerHTML = translateYOutput.value;
translateYOutput.oninput = function () {
  translateYRange.innerHTML = this.value;
};

var scaleOutput = document.getElementById("scale");
var scaleRange = document.getElementById("scaleRange");
scaleRange.innerHTML = scaleOutput.value;
scaleOutput.oninput = function () {
  scaleRange.innerHTML = this.value;
};

var skewXOutput = document.getElementById("skewX");
var skewXRange = document.getElementById("skewXRange");
skewXRange.innerHTML = skewXOutput.value;
skewXOutput.oninput = function () {
  skewXRange.innerHTML = this.value;
};

var skewYOutput = document.getElementById("skewY");
var skewYRange = document.getElementById("skewYRange");
skewYRange.innerHTML = skewYOutput.value;
skewYOutput.oninput = function () {
  skewYRange.innerHTML = this.value;
};

function updateRangeInputs() {
  let isDisabled =
    opacity.value === "0" || height.value === "0" || width.value === "0";

  let isEnabled =
    opacity.value !== "0" && height.value !== "0" && width.value !== "0";

  if (opacity.value == 0) {
    borderRadius.disabled = isDisabled;
    height.disabled = isDisabled;
    width.disabled = isDisabled;
    rotate.disabled = isDisabled;
    translateX.disabled = isDisabled;
    translateY.disabled = isDisabled;
    scale.disabled = isDisabled;
    skewX.disabled = isDisabled;
    skewY.disabled = isDisabled;
    red.disabled = isDisabled;
    green.disabled = isDisabled;
    blue.disabled = isDisabled;
    alpha.disabled = isDisabled;
  } else if (height.value == 0) {
    borderRadius.disabled = isDisabled;
    opacity.disabled = isDisabled;
    width.disabled = isDisabled;
    rotate.disabled = isDisabled;
    translateX.disabled = isDisabled;
    translateY.disabled = isDisabled;
    scale.disabled = isDisabled;
    skewX.disabled = isDisabled;
    skewY.disabled = isDisabled;
    red.disabled = isDisabled;
    green.disabled = isDisabled;
    blue.disabled = isDisabled;
    alpha.disabled = isDisabled;
  } else if (width.value == 0) {
    borderRadius.disabled = isDisabled;
    opacity.disabled = isDisabled;
    height.disabled = isDisabled;
    rotate.disabled = isDisabled;
    translateX.disabled = isDisabled;
    translateY.disabled = isDisabled;
    scale.disabled = isDisabled;
    skewX.disabled = isDisabled;
    skewY.disabled = isDisabled;
    red.disabled = isDisabled;
    green.disabled = isDisabled;
    blue.disabled = isDisabled;
    alpha.disabled = isDisabled;
  } else {
    borderRadius.disabled = !isEnabled;
    opacity.disabled = !isEnabled;
    height.disabled = !isEnabled;
    width.disabled = !isEnabled;
    rotate.disabled = !isEnabled;
    translateX.disabled = !isEnabled;
    translateY.disabled = !isEnabled;
    scale.disabled = !isEnabled;
    skewX.disabled = !isEnabled;
    skewY.disabled = !isEnabled;
    red.disabled =  !isEnabled;
    green.disabled =  !isEnabled;
    blue.disabled =  !isEnabled;
    alpha.disabled =  !isEnabled;
  }
}

heightInput.addEventListener("click", function () {
  let heightInputvalue = heightInput.value + "px";
  demo.style.height = heightInputvalue;

  updateRangeInputs();
});

widthInput.addEventListener("click", function () {
  let widthInputvalue = widthInput.value + "px";
  demo.style.width = widthInputvalue;

  updateRangeInputs();
});

btn.addEventListener("click", function () {
  demo.style.width = widthInput.value + "px";
  demo.style.height = heightInput.value + "px";
  console.log(heightInput.value);
});

height.addEventListener("input", function () {
  height.max = heightInput.value;
  demo.style.height = height.value + "px";
  updateRangeInputs();
});

width.addEventListener("input", function () {
  width.max = widthInput.value;
  demo.style.width = width.value + "px";
  updateRangeInputs();
});

borderRadius.addEventListener("input", function () {
  let borderRadiusValue = borderRadius.value + "%";
  demo.style.borderRadius = borderRadiusValue;
  updateRangeInputs();
});

opacity.addEventListener("input", function () {
  let opacityValue = opacity.value / 100;
  demo.style.opacity = opacityValue;
  updateRangeInputs();
});

rotate.addEventListener("input", function () {
  let rotatevalue = rotate.value + "deg";
  demo.style.rotate = rotatevalue;
  updateRangeInputs();
});

translateX.addEventListener("input", function () {
  let translatevalue = translateX.value + "px";
  demo.style.transform = `translateX(${translatevalue})`;
  updateRangeInputs();
});

translateY.addEventListener("input", function () {
  let translatevalue = translateY.value + "px";
  demo.style.transform = `translateY(${translatevalue})`;
  updateRangeInputs();
});

scale.addEventListener("input", function () {
  let scalevalue = scale.value / 100;
  demo.style.scale = scalevalue;
  updateRangeInputs();
});

skewX.addEventListener("input", function () {
  let skewvalue = skewX.value + "deg";
  demo.style.transform = `skewX(${skewvalue})`;
  updateRangeInputs();
});

skewY.addEventListener("input", function () {
  let skewvalue = skewY.value + "deg";
  demo.style.transform = `skewY(${skewvalue})`;
  updateRangeInputs();
});

updateRangeInputs();

document.getElementById("red").addEventListener("input", updateColor);
document.getElementById("green").addEventListener("input", updateColor);
document.getElementById("blue").addEventListener("input", updateColor);
document.getElementById("alpha").addEventListener("input", updateColor);

function updateColor() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var alpha = document.getElementById("alpha").value;

  var color = `rgb(${red}, ${green}, ${blue} , ${alpha})`;

  demo.style.backgroundColor = color;

  document.getElementById("redRange").innerHTML = red;
  document.getElementById("greenRange").innerHTML = green;
  document.getElementById("blueRange").innerHTML = blue;
  document.getElementById("alphaRange").innerHTML = alpha;
}

updateColor();
