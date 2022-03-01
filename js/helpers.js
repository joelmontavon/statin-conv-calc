function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

window.addEventListener('load', function() {
    let message = { height: document.body.scrollHeight, width: document.body.scrollWidth };

    // window.top refers to parent window
    window.top.postMessage(message, "*");
});
