setInterval(() => {
  const denyButton = document.getElementsByClassName('RveJvd snByac')[2];
  if (denyButton) {
    let click = new Event('click');
    denyButton.dispatchEvent(click);
    denyButton.click();
  }
}, 3000);
