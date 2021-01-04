import Line from "./Line";

const AuthorTitle = ({
    poemAuthor,
    language,
    wordCallback,
    charactersCallback,
    showFurigana}) => {
        
    return (
        <h3 className={
            `poem__author poem__author--${charactersCallback === 'romaji' ?
            'romaji' : language}`
         }>
            <Line
                lineInPoem={poemAuthor[language].content}
                wordCallback={wordCallback}
                charactersCallback={charactersCallback}
                showFurigana={showFurigana}
            />
        </h3>
    )
}

export default AuthorTitle;
