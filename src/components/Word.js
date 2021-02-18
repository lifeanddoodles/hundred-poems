import CharacterContainer from "./CharacterContainer";
import Tooltip from "./Tooltip";
import { getEachCharacter } from "../helpers";

const Word = ({
    wordObjectInLine,
    wordCallback,
    charactersCallback,
    }) => {

    const allCharacters = wordCallback === getEachCharacter ? wordObjectInLine.word.map((
        characterObject,
        index) => {

        return <CharacterContainer
                    key={index}
                    characterObject={characterObject}
                    characterCallback={charactersCallback}
                />
    }) : null;

    const toolTipRoleAttr = wordObjectInLine.roleInSentence !== "" ? {'data-tooltip-role': `${wordObjectInLine.roleInSentence}` } : ''
    // const toolTipSpecialAttr = wordObjectInLine.specialRule !== "" ? {'data-tooltip-special': `${wordObjectInLine.specialRule}` } : ''
    
    return (
        <>
            <span className={`word__container ${wordObjectInLine.roleInSentence !== "" ?
            'tooltip tooltip-role' : ''}`}
                {...toolTipRoleAttr}
            >
                {wordCallback === getEachCharacter ? allCharacters : wordObjectInLine.word}
            </span>
            {wordObjectInLine.specialRule ? <Tooltip className={`tooltip-special`} dataTooltip={wordObjectInLine.specialRule}>!</Tooltip> : ''}
        </>
    )
}

export default Word;
