import React, {Component} from 'react';


const CharacterSelector =({characters}) => {
        const characterNodes = characters.map((character, index) => {
            const {name} = character
            return(
                <option value={name} key={index}>{name}</option>
            )
        })

    return(
            <form>
                <label>
                    Select Character:
                    <select>
                    {characterNodes}
                    </select>
                </label>
            </form>
        )
    }


export default CharacterSelector;
