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

    const toolTipRoleAttr = wordObjectInLine.roleInSentence !== "" ? {'data-tooltip-role': `${wordObjectInLine.roleInSentence}` } : ''
    const toolTipSpecialAttr = wordObjectInLine.specialRule !== "" ? {'data-tooltip-special': `${wordObjectInLine.specialRule}` } : ''
    // console.log(wordObjectInLine)
    return (
        <span className={`word__container ${wordObjectInLine.roleInSentence !== "" || wordObjectInLine.roleInSentence !== ""  ?
        'tooltip' : ''} ${wordObjectInLine.roleInSentence !== "" ?
        'tooltip-role' : ''}  ${wordObjectInLine.specialRule !== "" ?
        'tooltip-special' : ''}`}
            {...toolTipRoleAttr}
            {...toolTipSpecialAttr}
        >
            {wordCallback === getEachCharacter ? allCharacters : wordObjectInLine.word}
        </span>
    )
}

export default Word;
