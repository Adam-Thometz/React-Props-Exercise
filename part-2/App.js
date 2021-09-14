const App = () => {
  return (
    <div>
      <Tweet username="squid" name="Squidward" date="12:00 pm" message="Aw jeez..." />
      <Tweet username="pat123" name="Patrick Star" date="11:59 am" message="Let's go Squidward!" />
      <Tweet username="spongebob" name="Spongebob Squarepants" date="11:58 am" message="Who wants to go jellyfishing?" />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))