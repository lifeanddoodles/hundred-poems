import PoemColumns from "./PoemColumns";

const PoemContainer = ({
    poem,
    carouselView,
    traditionalJapanese,
    showFurigana,
    showEnglishColumn,
    showRomajiColumn,
    currentPoem}) => {
        
    return (
        <article className={`poem ${(carouselView && poem.id === currentPoem +1) ? 'active' : ''}`} key={poem.id}>
            <div className="scroll--unrolled">
                <div className="poem__paper">
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
                </div>
            </div>
            <div className="scroll">
                <div className="scroll--rolled"></div>
            </div>
        </article>
    )
}

export default PoemContainer;
