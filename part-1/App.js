const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Bobert" />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))