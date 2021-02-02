import React, {useContext} from 'react';
import { valueToBoolean } from "../utils";
import { PoemsContext } from '../PoemsContext';

const CharacterContainer = ({
    characterObject,
    characterCallback,
    }) => {

    const {
        showFurigana,
    } = useContext(PoemsContext);
    
    const isKanji = characterObject.isKanji;

    return (
        characterCallback === 'character' ?
        <span className="character__container">
            {
                (isKanji && valueToBoolean(showFurigana) ) &&
                <span className="furigana">
                    {characterObject.furigana}
                </span>
            }
            <span className="character">
                {characterObject.character}
            </span>
        </span> :
        <span
         className={`romaji ${characterObject.isParticle ?
            'particle' : ''}`}
        >
            {characterObject.romaji}
        </span>
    )
}

export default CharacterContainer;
