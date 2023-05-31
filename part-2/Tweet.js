const Tweet = (props) => {
    return (
        <div>
            <hr />
            <h4>{props.username} ({props.name})</h4>
            <h3>{props.message}</h3>
            <p>{props.date}</p>
            <hr />
        </div>
    );
};