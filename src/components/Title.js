function Title(props) {
    return (
        <>
    <h1>{props.name}</h1>
    {props.role? <p>{props.role}</p> : <p>No role</p>}
        </>
    )        
}

export default Title;