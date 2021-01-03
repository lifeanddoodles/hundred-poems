import React from 'react';
import Word from "../components/Word";
import CharacterContainer from "../components/CharacterContainer";

export const getTheCharacter = (characterObject) => {
    const character = characterObject.character;
    return character
}

export const getTheFurigana = (characterObject) => {
    const furigana = characterObject.furigana;
    return furigana;
}

export const getTheRomaji = (characterObject) => {
    const romaji = characterObject.romaji;
    return romaji;
}

export const getEachCharacter = (wordObject, getCharactersCallback) => {
    return wordObject.word.map((characterObject,index) => {
        return <CharacterContainer
                    key={index}
                    characterObject={characterObject}
                    characterCallback={getCharactersCallback}
                />
    })
}

export const getCompleteWordString = (wordObject) => {
    return wordObject.word;
}

export const getTheWord = (wordObject, getWordCallback, getCharactersCallback) => {
    // decide whether to use getCompleteString or getEachCharacter
    return getWordCallback(wordObject, getCharactersCallback);
};

// TODO: Add 'no' particle in special cases for Japanese readings, like last names, depending on roleInSentence
// TODO: Add 'hasSpecialReading' key to word objects, potentially with index to special reading

export const getAllWords = (lineInContent, language, getWordCallback, getCharactersCallback) => {
    const words = lineInContent.map((wordObjectInLine,index) => {
        const space = '\u0020';
        return <React.Fragment key={index}>
                    <Word wordObjectInLine={wordObjectInLine} wordCallback={getWordCallback} charactersCallback={getCharactersCallback} />
                    {index < lineInContent.length - 1 ? space : ''}
                </React.Fragment>
    })
    return words
}

// Get poem content
export const getAuthor = (author, language, getWordCallback, getCharactersCallback) => {
    const authorLine = author[language].content;
    return (
        getAllWords(authorLine, language, getWordCallback, getCharactersCallback)
    );
}

export const getPoemText = (poemLines, language, getWordCallback, getCharactersCallback) => {
    const newLine = '\u000A';
    const lines = poemLines[language].content.map(
        (lineInPoem, index) =>  {
            return  <React.Fragment key={index}>
                        <span className="line">{getAllWords(lineInPoem, language, getWordCallback, getCharactersCallback)}</span>
                        { index < poemLines[language].content.length ? newLine : '' }
                    </React.Fragment>
    })
    return lines;
}