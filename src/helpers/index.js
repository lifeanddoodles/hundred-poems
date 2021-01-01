import React from 'react';
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

export const getAllWords = (poemId, lineIndex, lineInContent, language, getWordCallback, getCharactersCallback) => {
    const words = lineInContent.map((wordObjectInLine,index) => {
        const space = '\u0020';
        const word = <React.Fragment key={`${poemId}-${language}-${lineIndex}-${index}`}>
                        <span className="word__container">{getTheWord(wordObjectInLine, getWordCallback, getCharactersCallback)}</span>
                        {index < lineInContent.length - 1 ? space : ''}
                    </React.Fragment>
        return word;
    })
    return words
}

// Get poem content
export const getAuthor = (poemId, author, language, getWordCallback, getCharactersCallback) => {
    const authorLine = author[language].content;
    return (
        getAllWords(poemId, 'author', authorLine, language, getWordCallback, getCharactersCallback)
    );
}

export const getPoemText = (poemId, poemLines, language, getWordCallback, getCharactersCallback) => {
    const newLine = '\u000A';
    const lines = poemLines[language].content.map(
        (lineInPoem, index) =>  {
            return  <React.Fragment key={`${poemId}-${language}-line${index}`}>
                        <span className="line">{getAllWords(poemId, `line${index}`, lineInPoem, language, getWordCallback, getCharactersCallback)}</span>
                        { index < poemLines[language].content.length ? newLine : '' }
                    </React.Fragment>
    })
    return lines;
}