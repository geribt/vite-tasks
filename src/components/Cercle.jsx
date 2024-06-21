
function Cercle(props){


    return (
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke={props.color} stroke-width="4" fill={props.color} />
        </svg>
    )
}

export default Cercle;