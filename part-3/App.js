const App = () => {
  return (
    <div>
      <Person name="Miranda" age="14"/>
      <Person name="Randy" age="23" hobbies={['writing poetry']} />
      <Person name="Chysanthenum" age="31" hobbies={['painting', 'photography']} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))