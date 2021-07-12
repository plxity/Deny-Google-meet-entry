setInterval(() => {
  console.log("In start")
  const denyButton = document.getElementsByClassName('RveJvd snByac')[2];
  console.log(denyButton)
  if (denyButton) {
    let click = new Event('click');
    denyButton.dispatchEvent(click);
    denyButton.click();
  }
}, 3000);

console.log("hello")
