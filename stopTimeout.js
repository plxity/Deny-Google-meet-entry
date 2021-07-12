{
  let id = window.setTimeout(function () {}, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }
}
