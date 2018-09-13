import React, { Component } from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharactorCard';


const word = "PEAW";
export default class App extends Component {
  render() {
    return (
      <div className="App">dfg
        <CharacterCard value="h" />
        <CharacterCard value="i" />
        <WordCard value="hello" />
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
        }
      </div>
    );
  }
}
