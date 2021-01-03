import React from 'react';
import Word from "../components/Word";
import CharacterContainer from "../components/CharacterContainer";

export const getEachCharacter = (
    wordObject,
    charactersCallback) => {

    return wordObject.word.map((
        characterObject,
        index) => {

        return <CharacterContainer
                    key={index}
                    characterObject={characterObject}
                    characterCallback={charactersCallback}
                />
    })
}

export const getCompleteWordString = (wordObject) => {
    return wordObject.word;
}

export const getTheWord = (
    wordObject,
    wordCallback,
    charactersCallback) => {

    // decide whether to use getCompleteString or getEachCharacter
    return wordCallback(
        wordObject,
        charactersCallback);
};

// TODO: Add 'no' particle in special cases for Japanese readings, like last names, depending on roleInSentence
// TODO: Add 'hasSpecialReading' key to word objects, potentially with index to special reading

export const getAllWords = (
    lineInContent,
    wordCallback,
    charactersCallback) => {

    const words = lineInContent.map((
        wordObjectInLine,
        index) => {

        const space = '\u0020';
        return <React.Fragment key={index}>
                    <Word wordObjectInLine={wordObjectInLine} wordCallback={wordCallback} charactersCallback={charactersCallback} />
                    {index < lineInContent.length - 1 ? space : ''}
                </React.Fragment>
    })
    return words
}
