const PoemCard = (poem, language) => {
    return (
        <section key={`${poem.id}--${language}`}>
            This is the {language} column for poem {poem.id}.
        </section>
    )
}

export default PoemCard;
