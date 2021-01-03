import {
    getTheCharacter,
    getTheFurigana,
    getTheRomaji
} from "../helpers";

const showFurigana = true;

const CharacterContainer = ({
    characterObject,
    characterCallback}) => {

    const isKanji = characterObject.isKanji;

    return (
        characterCallback === 'character' ?
        <span className="character__container">
            {
                (isKanji && showFurigana ) &&
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
