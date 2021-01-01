import {
    getTheCharacter,
    getTheFurigana,
    getTheRomaji
} from "../helpers";

const showFurigana = true

const CharacterContainer = ({characterObject, characterCallback}) => {
    const isKanji = characterObject.isKanji;

    return (
        characterCallback === getTheCharacter ?
        <span className="character__container">
            {(isKanji && showFurigana ) && <span className="furigana">{getTheFurigana(characterObject)}</span>}
            <span className="character">{getTheCharacter(characterObject)}</span>
        </span> :
        <span className={`romaji ${characterObject.isParticle ? 'particle' : ''}`}>{getTheRomaji(characterObject)}</span>
    )
}

export default CharacterContainer;
