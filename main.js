setInterval(() => {
  const denyButton = document.getElementsByClassName('RveJvd snByac')[2];
  console.log(denyButton);
  if (denyButton) {
    var click = new Event('click');
    denyButton.dispatchEvent(click);
    denyButton.click();
  }
}, 3000);
