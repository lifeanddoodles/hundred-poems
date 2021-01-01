import PoemColumns from "./PoemColumns";

const PoemContainer = ({poem}) => {
    return (
        <article className="poem" key={poem.id}>
            <header className="poem__number"><h2 id={poem.id}>Poem {poem.id}</h2></header>
            <section className="poem__columns">
                <PoemColumns poem={poem} />
            </section>
        </article>
    )
}

export default PoemContainer;
