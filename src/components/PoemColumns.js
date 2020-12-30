import PoemCard from "./PoemCard";

const PoemColumns = (poem) => {
    return [
        PoemCard(poem, "japanese"),
        PoemCard(poem, "romaji"),
        PoemCard(poem, "english")
    ];
}

export default PoemColumns;