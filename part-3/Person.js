const Person = (props) => {
    let voteMessage;
    if (props.age >= 18) {
        voteMessage = "please go vote!"
    } else {
        voteMessage = "you must be 18"
    }
    let displayName = props.name;
    if (displayName.length > 8) {
        displayName = displayName.slice(0,6);
    }
    return (
        <div>
            <hr />
            <p>Learn some information about this person.</p>
            <p>Name: {displayName}</p>
            <p>Age: {props.age}</p>
            <h3>{voteMessage}</h3>
            <h4>Hobbies</h4>
            <ul>
                { props.hobbies.map(h => <li>{h}</li>) }
            </ul>
            <hr />
        </div>
    );
};