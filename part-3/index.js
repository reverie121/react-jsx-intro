const App = () => (
    <div>
        <Person name="Jer" age={41} hobbies={["Gardening", "Music", "Painting and Crafting", "Tabletop Games"]}/>
        <Person name="LilyBeth" age={11} hobbies={["Drawing", "Playing w/Jack", "Chatting w/Friends", "Video Games"]}/>
        <Person name="Jack" age={2} hobbies={["Eating", "Playing", "Talking"]}/>

    </div>
  )
  ReactDOM.render(<App />, document.getElementById("root"))
  