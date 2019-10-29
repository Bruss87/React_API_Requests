import React, {Component} from 'react';


class CharacterSelector extends Component{
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select Character:
                    <select>
                    <option>Harry Potter </option>
                    </select>
                </label>
            </form>
        )
    }
}


export default CharacterSelector;
