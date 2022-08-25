import React from "react";
import Emojipedia from "./emojipedia";
import Card from "./Card";
import "./App.css"

function Entry(Emojipedia) {
  return (
    <Card
      key={Emojipedia.id}
      emoji={Emojipedia.emoji}
      name={Emojipedia.name}
      meaning={Emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(Entry)}</dl>
    </div>
  );
}

export default App;
