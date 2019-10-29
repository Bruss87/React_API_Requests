import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterBox extends Component{
    render(){
        return(
        <div className="character-box">
            <CharacterDetail/>
            <CharacterSelector/>
            </div>
            )
    }
}

export default CharacterBox;