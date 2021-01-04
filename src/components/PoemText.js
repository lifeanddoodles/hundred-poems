import React from 'react';
import Line from './Line';

const PoemText = ({
    poemLines,
    language,
    wordCallback,
    charactersCallback,
    showFurigana
}) => {
    
    const newLine = '\u000A';
    const lines = poemLines[language].content.map((
        lineInPoem,
        index) =>  {
            
        return  <React.Fragment key={index}>
                    <Line
                        lineInPoem={lineInPoem}
                        wordCallback={wordCallback}
                        charactersCallback={charactersCallback}
                        showFurigana={showFurigana}
                    />
                    {
                        index < poemLines[language].content.length ?
                        newLine : ''
                    }
                </React.Fragment>
    });
    
    return (
        <p className="poem__text">
            { lines }
        </p>
    )
}

export default PoemText;
