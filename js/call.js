function getInputValues(itemNameId, baseId, heightId) {
  const itemNameElement = document.getElementById(itemNameId);
  const itemName = itemNameElement.innerText;

  const baseInput = document.getElementById(baseId);
  const baseValue = parseFloat(baseInput.value);

  const heightInput = document.getElementById(heightId);
  const heightValue = parseFloat(heightInput.value);

  return { itemName, baseValue, heightValue };
}

function addTableRow(itemName, result) {
  const tableContent = document.getElementById("table-content");

  // for dynamic number
  count = count + 1;

  //create tr and td
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count} <span>.</span></td>
    <td>${itemName}</td>
    <td>${result} cm&sup2;</td>
    <td><button class="conversion-btn">Convert to m&sup2;</button></td>
  `;

  // append tr
  tableContent.appendChild(tr);
  //padding add
  paddingInTd();
}

// Function for padding in each table data
function paddingInTd() {
  const table = document.querySelector("table");
  const internalElements = table.querySelectorAll("*");
  internalElements.forEach((element) => {
    element.style.paddingRight = "10px";
  });
}
