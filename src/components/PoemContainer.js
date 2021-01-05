import PoemColumns from "./PoemColumns";

const PoemContainer = ({
    poem,
    traditionalJapanese,
    showFurigana,
    showEnglishColumn,
    showRomajiColumn,
    currentPoem}) => {
        
    return (
        <article className={`poem ${poem.id === currentPoem +1 ? 'active' : ''}`} key={poem.id}>
            <header className="poem__number"><h2 id={poem.id}>Poem {poem.id}</h2></header>
            <section className="poem__columns">
                <PoemColumns
                    poem={poem}
                    traditionalJapanese={traditionalJapanese}
                    showFurigana={showFurigana}
                    showEnglishColumn={showEnglishColumn}
                    showRomajiColumn={showRomajiColumn}
                />
            </section>
        </article>
    )
}

export default PoemContainer;
