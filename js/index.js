let count = 0;

// Triangle
document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    const { itemName, baseValue, heightValue } = getInputValues(
      "triangle-name",
      "triangle-base",
      "triangle-height"
    );

    if (isNaN(baseValue) || isNaN(heightValue)) {
      alert("Please enter numbers for height and base values.");
    } else if (baseValue <= 0 || heightValue <= 0) {
      alert("Please enter positive numbers for height and base values.");
    } else {
      const triangleResult = (0.5 * baseValue * heightValue).toFixed(2);

      addTableRow(itemName, triangleResult);
    }
  });

// Rectangle
document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    const itemNameElement = document.getElementById("rectangle-name");
    const itemName = itemNameElement.innerText;

    const widthInput = document.getElementById("rectangle-width");
    const widthValue = parseFloat(widthInput.value);

    const lengthInput = document.getElementById("rectangle-lenght");
    const lengthValue = parseFloat(lengthInput.value);

    if (isNaN(widthValue) || isNaN(lengthValue)) {
      alert("Please enter numbers for height and base values.");
    } else if (widthValue <= 0 || lengthValue <= 0) {
      alert("Please enter positive numbers for height and base values.");
    } else {
      const rectangleleResult = (widthValue * lengthValue).toFixed(2);

      addTableRow(itemName, rectangleleResult);
    }
  });

// parallelogram
document
  .getElementById("parallelogram-calculate-btn")
  .addEventListener("click", function () {
    const { itemName, baseValue, heightValue } = getInputValues(
      "parallelogram-name",
      "parallelogram-base",
      "parallelogram-height"
    );

    if (isNaN(baseValue) || isNaN(heightValue)) {
      alert("Please enter numbers for height and base values.");
    } else if (baseValue <= 0 || heightValue <= 0) {
      alert("Please enter positive numbers for height and base values.");
    } else {
      const parallelogramResult = (baseValue * heightValue).toFixed(2);

      addTableRow(itemName, parallelogramResult);
    }
  });
// Rhombus
document
  .getElementById("rhombus-calculate-btn")
  .addEventListener("click", function () {
    const itemNameElement = document.getElementById("rhombus-name");
    const itemName = itemNameElement.innerText;

    const diagonal1Input = document.getElementById("diagonal1");
    const diagonal1Value = parseFloat(diagonal1Input.value);

    const diagonal2Input = document.getElementById("diagonal2");
    const diagonal2Value = parseFloat(diagonal2Input.value);

    if (isNaN(diagonal1Value) || isNaN(diagonal2Value)) {
      alert("Please enter numbers for height and base values.");
    } else if (diagonal1Value <= 0 || diagonal2Value <= 0) {
      alert("Please enter positive numbers for height and base values.");
    } else {
      const rhombusResult = (0.5 * diagonal1Value * diagonal2Value).toFixed(2);

      addTableRow(itemName, rhombusResult);
    }
  });

// Pentagon
document
  .getElementById("pentagon-calculate-btn")
  .addEventListener("click", function () {
    const itemNameElement = document.getElementById("pentagon-name");
    const itemName = itemNameElement.innerText;

    const perimeterInput = document.getElementById("pentagon-perimeter");
    const perimeterValue = parseFloat(perimeterInput.value);

    const sideInput = document.getElementById("pentagon-side");
    const sideValue = parseFloat(sideInput.value);

    if (isNaN(perimeterValue) || isNaN(sideValue)) {
      alert("Please enter numbers for height and base values.");
    } else if (perimeterValue <= 0 || sideValue <= 0) {
      alert("Please enter positive numbers for height and base values.");
    } else {
      const rhombusResult = (0.5 * perimeterValue * sideValue).toFixed(2);

      addTableRow(itemName, rhombusResult);
    }
  });

// Ellipse
document
  .getElementById("ellipse-calculate-btn")
  .addEventListener("click", function () {
    const itemNameElement = document.getElementById("ellipse-name");
    const itemName = itemNameElement.innerText;

    const ellipseLength1Input = document.getElementById("ellipse-length1");
    const ellipseLength1Value = parseFloat(ellipseLength1Input.value);

    const ellipseLength2Input = document.getElementById("ellipse-length2");
    const ellipseLength2Value = parseFloat(ellipseLength2Input.value);

    if (isNaN(ellipseLength1Value) || isNaN(ellipseLength2Value)) {
      alert("Please enter numbers for height and base values.");
    } else if (ellipseLength1Value <= 0 || ellipseLength2Value <= 0) {
      alert("Please enter positive numbers for height and base values.");
    } else {
      const ellipseResult = (
        3.14 *
        ellipseLength1Value *
        ellipseLength2Value
      ).toFixed(2);

      addTableRow(itemName, ellipseResult);
    }
  });
