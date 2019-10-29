import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterBox extends Component{
    render(){
        return(
        <div className="character-box">
            <h1>Character info</h1>
            <CharacterDetail/>
            <CharacterSelector/>
            </div>
            )
    }
}

export default CharacterBox;