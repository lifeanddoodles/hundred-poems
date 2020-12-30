import PoemColumns from "./PoemColumns";

const PoemContainer = (poem) => {
    return (
        <article id={poem.id} className="poem" key={poem.id}>
            <header className="poem__number"><h2>Poem {poem.id}</h2></header>
            <section className="poem__columns">
                {PoemColumns(poem)}
            </section>
        </article>
    )
}

export default PoemContainer;
