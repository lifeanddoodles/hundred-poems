import React from 'react';
import CharacterContainer from "../components/CharacterContainer";

export const getEachCharacter = (
    wordObject,
    charactersCallback,
    showFurigana) => {

    return wordObject.word.map((
        characterObject,
        index) => {

        return <CharacterContainer
                    key={index}
                    characterObject={characterObject}
                    characterCallback={charactersCallback}
                    showFurigana={showFurigana}
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
