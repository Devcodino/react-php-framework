"use strict";

//let test = "Moinesn";

function App() {
  return <h1>Ja leck mich doch Fett!</h1>;
}

const domContainer = document.querySelector("#home");
const root = ReactDOM.createRoot(domContainer);
root.render(App());