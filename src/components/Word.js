import CharacterContainer from "./CharacterContainer";
import { getEachCharacter } from "../helpers";

const Word = ({
    wordObjectInLine,
    wordCallback,
    charactersCallback,
    showFurigana}) => {

        const allCharacters = wordCallback === getEachCharacter ? wordObjectInLine.word.map((
            characterObject,
            index) => {
    
            return <CharacterContainer
                        key={index}
                        characterObject={characterObject}
                        characterCallback={charactersCallback}
                        showFurigana={showFurigana}
                    />
        }) : null;
        const toolTipAttr = wordObjectInLine.roleInSentence !== "" ? {'data-tooltip': wordObjectInLine.roleInSentence } : ''
console.log(wordObjectInLine)
    return (
        <span className={`word__container ${wordObjectInLine.roleInSentence !== "" ? 'tooltip' : ''}`} {...toolTipAttr}>
            {wordCallback === getEachCharacter ? allCharacters : wordObjectInLine.word}
        </span>
    )
}

export default Word;
