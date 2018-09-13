import React, { Component } from 'react';
import WordCard from './WordCard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        
        <WordCard value="HELLO" />
       {/* {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
        }*/}
      </div>
    );
  }
}
