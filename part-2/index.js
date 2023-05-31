const App = () => (
    <div>
       <Tweet username="bob_m" name="Robert Nesta" message="When the root is strong, the fruit is sweet." date="11/11/1979" />
       <Tweet username="bob_m" name="Robert Nesta" message="When one door is closed, don’t you know, another is open." date="12/06/1979" />
       <Tweet username="bob_m" name="Robert Nesta" message="Man is a universe within himself." date="01/21/1980" />

       <Tweet username="homeyj1" name="Homer J." message="Forty seconds? But I want it now!" date="10/08/1995" />
       <Tweet username="homeyj1" name="Homer J." message="What’s the point of going out? We’re just going to wind up back here, anyway." date="02/04/1996" />
       <Tweet username="homeyj1" name="Homer J." message="Facts are meaningless. You can use facts to prove anything that’s even remotely true." date="11/23/1997" />

    </div>
  )
  ReactDOM.render(<App />, document.getElementById("root"))
  