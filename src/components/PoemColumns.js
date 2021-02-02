import {useContext} from 'react';
import {
    getEachCharacter,
    getCompleteWordString
} from "../helpers";
import { valueToBoolean } from "../utils";
import { PoemsContext } from '../PoemsContext';
import PoemCard from "./PoemCard";

const PoemColumns = ({
    poem,
    }) => {

    const {
        showEnglishColumn,
        showRomajiColumn
    } = useContext(PoemsContext);

    return [
        <PoemCard
            key={`${poem.id}--ja`}
            poem={poem}
            language={'ja'}
            wordCallback={getEachCharacter}
            charactersCallback='character'
        />,
        valueToBoolean(showEnglishColumn) &&
        <PoemCard
            key={`${poem.id}--en`}
            poem={poem}
            language={'en'}
            wordCallback={getCompleteWordString}
            charactersCallback={null}
        />,
        valueToBoolean(showRomajiColumn) &&
        <PoemCard
            key={`${poem.id}--romaji`}
            poem={poem}
            language={'ja'}
            wordCallback={getEachCharacter}
            charactersCallback='romaji'
        />,
    ];
}

export default PoemColumns;