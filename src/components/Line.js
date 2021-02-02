import React from 'react';
import Word from "./Word";

const Line = ({
    lineInPoem,
    wordCallback,
    charactersCallback,
    }) => {
        
        const words = lineInPoem.map((
            wordObjectInLine,
            index) => {
    
            const space = '\u0020';
            return <React.Fragment key={index}>
                        <Word
                            wordObjectInLine={wordObjectInLine}
                            wordCallback={wordCallback}
                            charactersCallback={charactersCallback}
                        />
                        {index < lineInPoem.length - 1 ? space : ''}
                    </React.Fragment>
        })
    return (
        <span className="line">
            {words}
        </span>
    )
}

export default Line;
