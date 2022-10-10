let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
saveEl.textContent = "Total attendees are: ";
let count = 0;
let countCheck = [];

function increment() {
  count += 1;
  countEl.textContent = count;
  changeFont();
}

function decrement() {
  count -= 1;
  if (count < 0) {
    countEl.textContent = countEl.textContent = "Negative numbers not allowed.";
  } else {
    countEl.textContent = count;
  }
  changeFont();
}

function save() {
  let countStr = " " + count + " - ";
  if (count <= 0) {
    saveEl.textContent;
  } else {
    saveEl.textContent += countStr;
    countCheck.push(count);
    countEl.textContent = 0;
    count = 0;
  }
}

function resetAll() {
  countEl.textContent = 0;
  saveEl.textContent = "Total attendees are: ";
  count = 0;
  countCheck = [];
  changeFont();
}

function total() {
  saveEl.textContent = "Total attendees are: " + countCheck.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }
  // countCheck = [];
}

function changeFont() {
  if (countEl.textContent === "Negative numbers not allowed.") {
    document.getElementById("count-el").style.fontSize = 35;
  } else {
    document.getElementById("count-el").style.fontSize = 50;
  }
}
