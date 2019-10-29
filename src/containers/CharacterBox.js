import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterBox extends Component{

    constructor(props){
        super(props);
        this.state={
            characters:[]
        }
    }

    componentDidMount(){
             fetch("http://hp-api.herokuapp.com/api/characters")
             .then(res => res.json())
             .then(
                 (characters) => {
                     this.setState({
                         characters: characters
                     });
                 }
             )
            }

    render(){
        const {characters} = this.state;

        return(
        <div className="character-box">
            <h1>Character info</h1>
    
            <CharacterDetail/>
            <CharacterSelector characters= {this.state.characters}/>
            </div>
            )
        }
}

export default CharacterBox;