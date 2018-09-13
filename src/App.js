import React, {Component} from 'react';
import CharacterCard from './CharactorCard';
export default class App extends Component {
 render() {
 return (
 <div>
 <CharacterCard value="h"/>
<CharacterCard value="i"/>
{
  Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
  }
 </div>
 );
 }
}
