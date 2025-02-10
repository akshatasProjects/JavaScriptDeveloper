const focusEvent = new Event("focus");
const testInput = document.getElementById("test-text");

testInput.addEventListener("focus", (e) => {
  console.log(`${e.target.value}`);
  console.log(`The active Element is : ${document.activeElement.id}`);
});

testInput.dispatchEvent(focusEvent);
