import React from 'react';
export const getTheCharacter = (characterObject) => {
    const character = characterObject.character;
    // const furigana = characterObject.furigana;
    // const isKanji = characterObject.isKanji;
    return character
    // return <span className="character__container">${isKanji ? getTheFurigana(furigana) : ''}<span className="character">${character}</span></span>;
}

export const getTheFurigana = furigana => {
    // return `${showFurigana? `<span className="furigana">${furigana}</span>` : ''}`;
    return <span className="furigana">{furigana}</span>;
}

export const getTheRomaji = (characterObject) => {
    const romaji = characterObject.romaji;
    // return `${showRomajiColumn? `${romaji}` : ''}`;
    return romaji;
}

export const getTheCharacterInfo = (characterObject, getCharactersCallback) => {
    // Pass getCharactersCallback to decide whether to render native Japanese or Romaji
    return getCharactersCallback(characterObject);
}

export const getEachCharacter = (wordObject, getCharactersCallback) => {
    return wordObject.word.map(characterObject => {
        const characterContent = getTheCharacterInfo(characterObject, getCharactersCallback)
        return characterContent
    }).join('')
}

export const getCompleteWordString = (wordObject) => {
    return wordObject.word;
}

export const getTheWord = (wordObject, getWordCallback, getCharactersCallback) => {
    // decide whether to use getCompleteString or getEachCharacter
    return getWordCallback(wordObject, getCharactersCallback);
};

// TODO: Add no particle in special cases for Japanese readings, depending on roleInSentence
// const WordContainer = ({index}) => {
//     return <span key={index}>test</span>
//     // return <><span key={index} className="word__container">{getTheWord(wordObjectInLine, getWordCallback, getCharactersCallback)}</span>{index < lineInContent.length - 1 ? ' ' : ''}</>
// }

export const getAllWords = (poemId, lineIndex, lineInContent, language, getWordCallback, getCharactersCallback) => {
    const words = lineInContent.map((wordObjectInLine,index) => {
        const word = <React.Fragment key={`${poemId}-${language}-${lineIndex}-${index}`}><span className="word__container">{getTheWord(wordObjectInLine, getWordCallback, getCharactersCallback)}</span>{index < lineInContent.length - 1 ? ' ' : ''}</React.Fragment>
        // console.log(typeof(word))
        // console.log(word)
        return word;
    })
    // console.log(typeof(words))
    // console.log(words)
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
    const sep = <br/>;
    const lines = poemLines[language].content.map(
        (lineInPoem, index) =>  <React.Fragment key={`${poemId}-${language}-line${index}`}><span className="line">{getAllWords(poemId, `line${index}`, lineInPoem, language, getWordCallback, getCharactersCallback)}</span>{index < poemLines[language].content.length ? sep : ''}</React.Fragment>
    )
    return lines;
}