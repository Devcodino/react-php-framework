"use strict";

//let test = "Moinesn";

function App() {
  return React.createElement(
    "h1",
    null,
    "Ja leck mich doch Fett!"
  );
}

var domContainer = document.querySelector("#home");
var root = ReactDOM.createRoot(domContainer);
root.render(App());