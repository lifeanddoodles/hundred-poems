const Tooltip = ({dataTooltip}) => {
    // console.log(dataTooltip)
    return (
        <button className={`tooltip-special`} data-tooltip={dataTooltip}>!</button>
    )
}

export default Tooltip
